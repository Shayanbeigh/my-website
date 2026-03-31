import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, company, service, message } = body

    if (!name || !email || !message) {
      return Response.json(
        { error: 'Name, email and message are required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: `New enquiry from ${name} - my-website`,
      html: `<div style="font-family:sans-serif;max-width:600px;margin:0 auto;"><h2 style="color:#1a1a1a;border-bottom:2px solid #4f46e5;padding-bottom:12px;">New Contact Form Submission</h2><table style="width:100%;border-collapse:collapse;margin-top:24px;"><tr style="background:#f9f9f9;"><td style="padding:12px 16px;font-weight:600;color:#555;width:140px;">Name</td><td style="padding:12px 16px;color:#1a1a1a;">${name}</td></tr><tr><td style="padding:12px 16px;font-weight:600;color:#555;">Email</td><td style="padding:12px 16px;color:#1a1a1a;"><a href="mailto:${email}" style="color:#4f46e5;">${email}</a></td></tr><tr style="background:#f9f9f9;"><td style="padding:12px 16px;font-weight:600;color:#555;">Company</td><td style="padding:12px 16px;color:#1a1a1a;">${company || 'Not provided'}</td></tr><tr><td style="padding:12px 16px;font-weight:600;color:#555;">Service</td><td style="padding:12px 16px;color:#1a1a1a;">${service || 'Not specified'}</td></tr><tr style="background:#f9f9f9;"><td style="padding:12px 16px;font-weight:600;color:#555;vertical-align:top;">Message</td><td style="padding:12px 16px;color:#1a1a1a;line-height:1.6;">${message}</td></tr></table><div style="margin-top:32px;padding:16px;background:#f0f0f0;border-radius:8px;font-size:13px;color:#888;">Sent from the my-website contact form</div></div>`,
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error('Contact form error:', error)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}