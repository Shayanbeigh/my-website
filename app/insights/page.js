import Navbar from '../components/Navbar'
import PageHero from '../components/PageHero'
import Footer from '../components/Footer'
import FadeIn from '../components/FadeIn'
import PageTransition from '../components/PageTransition'
import Link from 'next/link'

const posts = [
  {
    slug: 'why-tech-job-descriptions-fail',
    tag: 'Hiring Strategy',
    title: 'Why most tech job descriptions are killing your candidate pipeline',
    excerpt: 'The average tech job description asks for 7 years of experience in a 4-year-old framework, requires a degree for a role that doesn\'t need one, and uses buzzwords that make engineers scroll straight past. Here\'s how to fix it.',
    readTime: '5 min read',
    date: 'March 2025',
  },
  {
    slug: 'offshore-team-myths',
    tag: 'Global Teams',
    title: 'The offshore team myth: what companies get wrong before they even start',
    excerpt: 'Offshore teams fail not because of skill gaps or time zones — they fail because of misaligned expectations and poor onboarding. We\'ve seen it hundreds of times. Here\'s what actually works.',
    readTime: '7 min read',
    date: 'February 2025',
  },
  {
    slug: 'where-engineers-are-moving-2025',
    tag: 'Market Insights',
    title: 'Where the best engineers are moving in 2025 — and why it matters for your hiring',
    excerpt: 'A wave of senior engineers is quietly relocating from major tech hubs to secondary cities and emerging markets. For companies hiring globally, this is one of the biggest opportunities of the decade.',
    readTime: '6 min read',
    date: 'January 2025',
  },
  {
    slug: 'interview-question-that-reveals-everything',
    tag: 'Culture',
    title: 'The one interview question that reveals everything about a candidate',
    excerpt: 'After thousands of technical placements, we\'ve noticed that one unconventional question separates the candidates who just want a job from those who will truly elevate your team.',
    readTime: '4 min read',
    date: 'December 2024',
  },
  {
    slug: 'hiring-your-first-engineer',
    tag: 'Hiring Strategy',
    title: 'How to hire your first engineer without making the most common mistakes',
    excerpt: 'Your first technical hire sets the tone for your entire engineering culture. Most founders get it wrong by optimizing for speed over fit. Here\'s a framework that balances both.',
    readTime: '8 min read',
    date: 'November 2024',
  },
  {
    slug: 'salary-benchmarks-2025',
    tag: 'Market Insights',
    title: 'Salary benchmarks for global tech talent in 2025: what the data says',
    excerpt: 'We analyzed 300+ placements across the US, Europe, Middle East, and India to put together the most accurate salary guide for engineering roles in 2025.',
    readTime: '10 min read',
    date: 'October 2024',
  },
]

const tagColors = {
  'Hiring Strategy': { bg: '#ede9fe', color: '#4f46e5' },
  'Global Teams': { bg: '#fce7f3', color: '#9d174d' },
  'Market Insights': { bg: '#d1fae5', color: '#065f46' },
  'Culture': { bg: '#fef3c7', color: '#92400e' },
}

export default function Insights() {
  return (
    <PageTransition>
      <main>
        <Navbar />
        <PageHero
          label="Insights"
          title="Thinking out loud on hiring, teams & talent"
          subtitle="Practical perspectives from the frontlines of global tech recruitment — no fluff, no filler."
        />

        <section style={{ padding: '80px 40px 120px', backgroundColor: '#fff' }}>
          <div style={{ maxWidth: '1100px', margin: '0 auto' }}>

            {/* Featured post */}
            <FadeIn>
              <div style={{
                backgroundColor: '#1a1a1a',
                borderRadius: '20px',
                padding: '60px',
                marginBottom: '48px',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '40px',
                alignItems: 'center',
              }}>
                <div>
                  <span style={{
                    display: 'inline-block',
                    backgroundColor: '#4f46e5',
                    color: '#fff',
                    fontSize: '11px',
                    fontWeight: '700',
                    letterSpacing: '1.5px',
                    textTransform: 'uppercase',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    marginBottom: '20px',
                  }}>Featured</span>
                  <h2 style={{
                    fontSize: 'clamp(22px, 3vw, 32px)',
                    fontWeight: '800',
                    color: '#fff',
                    letterSpacing: '-0.5px',
                    lineHeight: '1.2',
                    marginBottom: '16px',
                  }}>
                    {posts[0].title}
                  </h2>
                  <p style={{
                    fontSize: '15px',
                    color: '#888',
                    lineHeight: '1.7',
                    marginBottom: '28px',
                  }}>
                    {posts[0].excerpt}
                  </p>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', color: '#555' }}>{posts[0].date}</span>
                    <span style={{ fontSize: '13px', color: '#555' }}>·</span>
                    <span style={{ fontSize: '13px', color: '#555' }}>{posts[0].readTime}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <Link href={`/insights/${posts[0].slug}`} style={{
                    display: 'inline-block',
                    backgroundColor: '#fff',
                    color: '#1a1a1a',
                    padding: '14px 28px',
                    borderRadius: '8px',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '700',
                  }}>
                    Read Article →
                  </Link>
                </div>
              </div>
            </FadeIn>

            {/* Grid posts */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '24px',
            }}>
              {posts.slice(1).map((post, i) => (
                <FadeIn key={i} delay={i * 0.1}>
                  <div style={{
                    backgroundColor: '#fafafa',
                    borderRadius: '16px',
                    padding: '36px',
                    border: '1px solid #ebebeb',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '16px',
                    height: '100%',
                    transition: 'transform 0.2s, box-shadow 0.2s',
                  }}>
                    <span style={{
                      display: 'inline-block',
                      backgroundColor: tagColors[post.tag]?.bg || '#f0f0f0',
                      color: tagColors[post.tag]?.color || '#555',
                      fontSize: '11px',
                      fontWeight: '700',
                      letterSpacing: '1px',
                      textTransform: 'uppercase',
                      padding: '4px 10px',
                      borderRadius: '999px',
                      alignSelf: 'flex-start',
                    }}>
                      {post.tag}
                    </span>

                    <h3 style={{
                      fontSize: '18px',
                      fontWeight: '700',
                      color: '#1a1a1a',
                      lineHeight: '1.3',
                      letterSpacing: '-0.3px',
                    }}>
                      {post.title}
                    </h3>

                    <p style={{
                      fontSize: '14px',
                      color: '#666',
                      lineHeight: '1.7',
                      flexGrow: 1,
                    }}>
                      {post.excerpt}
                    </p>

                    <div style={{
                      display: 'flex',
                      gap: '12px',
                      alignItems: 'center',
                      borderTop: '1px solid #ebebeb',
                      paddingTop: '16px',
                      marginTop: '4px',
                    }}>
                      <span style={{ fontSize: '12px', color: '#888' }}>{post.date}</span>
                      <span style={{ fontSize: '12px', color: '#ccc' }}>·</span>
                      <span style={{ fontSize: '12px', color: '#888' }}>{post.readTime}</span>
                      <Link href={`/insights/${post.slug}`} style={{
                        marginLeft: 'auto',
                        fontSize: '13px',
                        fontWeight: '600',
                        color: '#4f46e5',
                        textDecoration: 'none',
                      }}>
                        Read →
                      </Link>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>

          </div>
        </section>

        <Footer />
      </main>
    </PageTransition>
  )
}