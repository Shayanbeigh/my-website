import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)
export async function POST(request) {
  try {
    const body = await request.json()
    const { email } = body
    if (!email || !email.includes('@')) {
      return Response.json({ error: 'Valid email is required.' }, { status: 400 })
    }
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: 'New subscriber - my-website',
      html: '<p>New subscriber: ' + email + '</p>',
    })
    return Response.json({ success: true })
  } catch (error) {
    return Response.json({ error: 'Something went wrong.' }, { status: 500 })
  }
}
