import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body
    if (!name || !email || !message) {
      return Response.json({ error: 'Required fields missing.' }, { status: 400 })
    }
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: 'New enquiry - my-website',
      html: '<p><strong>Name:</strong> ' + name + '</p><p><strong>Email:</strong> ' + email + '</p><p><strong>Company:</strong> ' + (company || 'N/A') + '</p><p><strong>Service:</strong> ' + (service || 'N/A') + '</p><p><strong>Message:</strong> ' + message + '</p>',
    })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
