import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { email } = body

    if (!email || !email.includes('@')) {
      return Response.json(
        { error: 'Valid email is required.' },
        { status: 400 }
      )
    }

    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.CONTACT_EMAIL,
      subject: `New newsletter subscriber — ${email}`,
      html: `
        <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto;">
          <h2 style="color: #1a1a1a; border-bottom: 2px solid #4f46e5; padding-bottom: 12px;">
            New Subscriber
          </h2>
          <p style="font-size: 16px; color: #444; margin-top: 24px;">
            Someone just subscribed to the my-website newsletter.
          </p>
          <div style="background: #f9f9f9; border-radius: 8px; padding: 16px 20px; margin-top: 16px;">
            <p style="margin: 0; font-size: 15px; color: #1a1a1a;">
              <strong>Email:</strong> ${email}
            </p>
          </div>
          <div style="margin-top: 32px; font-size: 13px; color: #888;">
            Sent from the my-website newsletter form
          </div>
        </div>
      `,
    })

    return Response.json({ success: true })

  } catch (error) {
    console.error('Subscribe error:', error)
    return Response.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}