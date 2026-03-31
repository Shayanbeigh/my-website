import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import PageTransition from '../../components/PageTransition'
import Link from 'next/link'

const articles = {
  'why-tech-job-descriptions-fail': {
    tag: 'Hiring Strategy',
    title: 'Why most tech job descriptions are killing your candidate pipeline',
    date: 'March 2025',
    readTime: '5 min read',
    content: [
      {
        type: 'intro',
        text: 'The average tech job description asks for 7 years of experience in a 4-year-old framework, requires a degree for a role that doesn\'t need one, and uses buzzwords that make engineers scroll straight past. The result? Your pipeline is full of people who didn\'t read carefully — and empty of the people you actually want.',
      },
      {
        type: 'heading',
        text: 'The most common mistakes',
      },
      {
        type: 'paragraph',
        text: 'Most job descriptions are written by someone who has never done the role, copied from a template that\'s three years old, and reviewed by a legal team that adds nothing but length. The engineer reading it can tell immediately — and the best ones move on.',
      },
      {
        type: 'paragraph',
        text: 'Requiring a Computer Science degree for a frontend role. Listing 12 "must-have" technologies when the team uses 3. Writing "fast-paced environment" instead of describing what the team actually ships. These are signals to top candidates that your company doesn\'t know what it needs.',
      },
      {
        type: 'heading',
        text: 'What great job descriptions do instead',
      },
      {
        type: 'paragraph',
        text: 'The best job descriptions we\'ve seen are written like a pitch, not a checklist. They explain what the company is building and why it matters. They describe what the first 90 days actually look like. They\'re honest about the challenges and clear about what success looks like.',
      },
      {
        type: 'paragraph',
        text: 'They also separate "must haves" from "nice to haves" — and keep the must-have list brutally short. If everything is essential, nothing is.',
      },
      {
        type: 'heading',
        text: 'A simple framework to use',
      },
      {
        type: 'paragraph',
        text: 'Before you post your next role, answer these four questions in the description: What problem does this person solve? What will they build in their first three months? What does the team they\'re joining look like? What does growth look like in 12–18 months? Answer those honestly and you\'ll outperform 90% of job postings in your market.',
      },
    ],
  },
  'offshore-team-myths': {
    tag: 'Global Teams',
    title: 'The offshore team myth: what companies get wrong before they even start',
    date: 'February 2025',
    readTime: '7 min read',
    content: [
      {
        type: 'intro',
        text: 'Offshore teams fail not because of skill gaps or time zones — they fail because of misaligned expectations and poor onboarding. We\'ve seen it hundreds of times. The good news is that every single failure mode is predictable and avoidable.',
      },
      {
        type: 'heading',
        text: 'The myth of the plug-and-play team',
      },
      {
        type: 'paragraph',
        text: 'Most companies approach offshore hiring as if they\'re buying a service rather than building a team. They hand over a spec, expect delivery, and are surprised when the output doesn\'t match their internal standards. The offshore team isn\'t the problem — the onboarding is.',
      },
      {
        type: 'paragraph',
        text: 'Your best internal engineers didn\'t arrive on day one knowing your codebase, your culture, or your standards. Neither will an offshore team. The investment required to bring them up to speed is exactly the same — it just happens across a video call instead of in an office.',
      },
      {
        type: 'heading',
        text: 'What actually works',
      },
      {
        type: 'paragraph',
        text: 'The companies we\'ve seen build world-class offshore teams share one trait: they treat the offshore team as an extension of the company, not a vendor relationship. That means shared Slack channels, attendance at all-hands, inclusion in sprint ceremonies, and a senior internal engineer who owns the relationship.',
      },
      {
        type: 'paragraph',
        text: 'It also means investing in a 30-day onboarding plan before the team writes a single line of production code. Context is everything — and context takes time to transfer.',
      },
    ],
  },
  'where-engineers-are-moving-2025': {
    tag: 'Market Insights',
    title: 'Where the best engineers are moving in 2025 — and why it matters for your hiring',
    date: 'January 2025',
    readTime: '6 min read',
    content: [
      {
        type: 'intro',
        text: 'A wave of senior engineers is quietly relocating from major tech hubs to secondary cities and emerging markets. For companies hiring globally, this is one of the biggest opportunities of the decade — if you know where to look.',
      },
      {
        type: 'heading',
        text: 'The great redistribution of tech talent',
      },
      {
        type: 'paragraph',
        text: 'Since 2022, we\'ve tracked a consistent trend in our placement data: senior engineers who previously would only consider San Francisco, London, or Berlin are now open to — and in many cases actively choosing — Bangalore, Warsaw, Lisbon, Dubai, and Nairobi. The reasons are a mix of cost of living, remote-first culture, and lifestyle.',
      },
      {
        type: 'paragraph',
        text: 'For hiring companies, this is transformative. Senior talent that was previously priced out of reach is now accessible — not because quality has dropped, but because geography no longer limits the talent pool.',
      },
      {
        type: 'heading',
        text: 'The markets to watch in 2025',
      },
      {
        type: 'paragraph',
        text: 'India continues to be the deepest pool of engineering talent globally, with Bangalore, Hyderabad, and Pune producing extraordinary full-stack and backend engineers. Eastern Europe — particularly Poland, Romania, and Ukraine — offers world-class systems engineers with strong English and European time zones. The Middle East is emerging as a genuine tech hub, with Dubai and Riyadh attracting senior talent from across the region.',
      },
    ],
  },
  'interview-question-that-reveals-everything': {
    tag: 'Culture',
    title: 'The one interview question that reveals everything about a candidate',
    date: 'December 2024',
    readTime: '4 min read',
    content: [
      {
        type: 'intro',
        text: 'After thousands of technical placements, we\'ve noticed that one unconventional question consistently separates candidates who just want a job from those who will genuinely elevate your team.',
      },
      {
        type: 'heading',
        text: 'The question',
      },
      {
        type: 'paragraph',
        text: 'The question is simply this: "Tell me about a technical decision you made that you later regretted — and what you did about it." It\'s disarmingly simple. But the answers reveal almost everything.',
      },
      {
        type: 'paragraph',
        text: 'Candidates who struggle with this question usually fall into two camps: those who can\'t think of a mistake (a red flag for self-awareness) and those who describe a mistake but take no ownership of it (a red flag for accountability). The candidates who answer it well — with specificity, honesty, and a clear description of what they learned — are almost always the ones who perform.',
      },
      {
        type: 'heading',
        text: 'Why it works',
      },
      {
        type: 'paragraph',
        text: 'Technical interviews are full of questions designed to test what candidates know. This one tests something harder to fake: how they handle being wrong. In a fast-moving engineering team, the ability to make a call, own the outcome, and course-correct is worth more than any specific technical skill.',
      },
    ],
  },
  'hiring-your-first-engineer': {
    tag: 'Hiring Strategy',
    title: 'How to hire your first engineer without making the most common mistakes',
    date: 'November 2024',
    readTime: '8 min read',
    content: [
      {
        type: 'intro',
        text: 'Your first technical hire sets the tone for your entire engineering culture. Most founders get it wrong by optimizing for speed over fit. Here\'s a framework that balances both.',
      },
      {
        type: 'heading',
        text: 'Why the first hire is different',
      },
      {
        type: 'paragraph',
        text: 'Every engineering hire after your first will be influenced by your first. They\'ll shape the technical standards, the coding culture, the way decisions get made. Hire someone who cuts corners and you\'ll spend years cleaning up the debt. Hire someone who over-engineers everything and you\'ll never ship.',
      },
      {
        type: 'paragraph',
        text: 'The qualities that matter most in a first engineer are not the ones most founders optimize for. It\'s not the most impressive CV or the highest LeetCode score. It\'s product sense, pragmatism, and the ability to operate with extreme ambiguity.',
      },
      {
        type: 'heading',
        text: 'The evaluation framework we recommend',
      },
      {
        type: 'paragraph',
        text: 'Give candidates a real problem from your product — something you\'ve actually faced or are facing — and ask them to walk you through how they\'d approach it. Don\'t evaluate the answer. Evaluate the questions they ask before answering. Great first engineers ask about users, constraints, and tradeoffs. Average ones ask about the tech stack.',
      },
    ],
  },
  'salary-benchmarks-2025': {
    tag: 'Market Insights',
    title: 'Salary benchmarks for global tech talent in 2025: what the data says',
    date: 'October 2024',
    readTime: '10 min read',
    content: [
      {
        type: 'intro',
        text: 'We analyzed 300+ placements across the US, Europe, Middle East, and India to put together the most accurate salary guide for engineering roles in 2025. Here\'s what the data actually says.',
      },
      {
        type: 'heading',
        text: 'The global picture',
      },
      {
        type: 'paragraph',
        text: 'Engineering salaries continued to normalize globally in 2024, with US salaries plateauing while Indian and Eastern European salaries grew meaningfully. The gap between markets is narrowing — but it\'s still significant enough to make global hiring one of the best levers available to growing companies.',
      },
      {
        type: 'heading',
        text: 'Senior Full-Stack Engineer benchmarks',
      },
      {
        type: 'paragraph',
        text: 'In the US, senior full-stack engineers command $150,000–$200,000 base. In London, the equivalent is £90,000–£130,000. In Dubai, AED 25,000–40,000 per month. In Bangalore, ₹35–65 lakh per annum. All figures represent total cash compensation excluding equity.',
      },
      {
        type: 'heading',
        text: 'What this means for hiring strategy',
      },
      {
        type: 'paragraph',
        text: 'The most effective hiring strategies we\'re seeing in 2025 combine a small senior team in the company\'s home market with a larger execution team built globally. This isn\'t about cutting costs — it\'s about accessing the best talent at every level, wherever it happens to be.',
      },
    ],
  },
}

const tagColors = {
  'Hiring Strategy': { bg: '#ede9fe', color: '#4f46e5' },
  'Global Teams': { bg: '#fce7f3', color: '#9d174d' },
  'Market Insights': { bg: '#d1fae5', color: '#065f46' },
  'Culture': { bg: '#fef3c7', color: '#92400e' },
}

export async function generateStaticParams() {
  return Object.keys(articles).map((slug) => ({ slug }))

}

export default async function ArticlePage({ params }) {
  const { slug } = await params
  const article = articles[slug]

  if (!article) {
    return (
      <main>
        <Navbar />
        <div style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '16px',
        }}>
          <h1 style={{ fontSize: '32px', fontWeight: '800', color: '#1a1a1a' }}>
            Article not found
          </h1>
          <Link href="/insights" style={{ color: '#4f46e5', fontWeight: '600' }}>
            ← Back to Insights
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <PageTransition>
      <main>
        <Navbar />

        {/* Article Header */}
        <section style={{
          paddingTop: '140px',
          paddingBottom: '60px',
          paddingLeft: '40px',
          paddingRight: '40px',
          backgroundColor: '#fafafa',
          borderBottom: '1px solid #ebebeb',
        }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>

            <Link href="/insights" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              color: '#888',
              textDecoration: 'none',
              fontSize: '14px',
              fontWeight: '500',
              marginBottom: '28px',
            }}>
              ← Back to Insights
            </Link>

            <div style={{ marginBottom: '20px' }}>
              <span style={{
                display: 'inline-block',
                backgroundColor: tagColors[article.tag]?.bg,
                color: tagColors[article.tag]?.color,
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                padding: '4px 12px',
                borderRadius: '999px',
              }}>
                {article.tag}
              </span>
            </div>

            <h1 style={{
              fontSize: 'clamp(28px, 4vw, 48px)',
              fontWeight: '800',
              color: '#1a1a1a',
              letterSpacing: '-1.5px',
              lineHeight: '1.15',
              marginBottom: '20px',
            }}>
              {article.title}
            </h1>

            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <span style={{ fontSize: '14px', color: '#888' }}>{article.date}</span>
              <span style={{ color: '#ccc' }}>·</span>
              <span style={{ fontSize: '14px', color: '#888' }}>{article.readTime}</span>
            </div>

          </div>
        </section>

        {/* Article Body */}
        <section style={{ padding: '60px 40px 120px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '720px', margin: '0 auto' }}>

            {article.content.map((block, i) => {
              if (block.type === 'intro') return (
                <p key={i} style={{
                  fontSize: '20px',
                  color: '#333',
                  lineHeight: '1.8',
                  marginBottom: '40px',
                  fontWeight: '500',
                  borderLeft: '3px solid #4f46e5',
                  paddingLeft: '20px',
                }}>
                  {block.text}
                </p>
              )
              if (block.type === 'heading') return (
                <h2 key={i} style={{
                  fontSize: '24px',
                  fontWeight: '800',
                  color: '#1a1a1a',
                  letterSpacing: '-0.5px',
                  marginTop: '48px',
                  marginBottom: '16px',
                }}>
                  {block.text}
                </h2>
              )
              if (block.type === 'paragraph') return (
                <p key={i} style={{
                  fontSize: '17px',
                  color: '#444',
                  lineHeight: '1.9',
                  marginBottom: '24px',
                }}>
                  {block.text}
                </p>
              )
              return null
            })}

            {/* Bottom CTA */}
            <div style={{
              marginTop: '64px',
              backgroundColor: '#1a1a1a',
              borderRadius: '16px',
              padding: '48px',
              textAlign: 'center',
            }}>
              <h3 style={{
                fontSize: '22px',
                fontWeight: '800',
                color: '#fff',
                marginBottom: '12px',
                letterSpacing: '-0.5px',
              }}>
                Ready to build a better team?
              </h3>
              <p style={{
                fontSize: '15px',
                color: '#888',
                marginBottom: '28px',
                lineHeight: '1.6',
              }}>
                Let's talk about what you're building and how we can help.
              </p>
              <Link href="/contact" style={{
                backgroundColor: '#4f46e5',
                color: '#fff',
                padding: '12px 28px',
                borderRadius: '8px',
                textDecoration: 'none',
                fontSize: '15px',
                fontWeight: '600',
              }}>
                Get in Touch →
              </Link>
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}