import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      title: '[Project Name 1]',
      client: '[Client Name]',
      category: '[Category]',
      kpis: ['[Metric 1]', '[Metric 2]', '[Metric 3]'],
      gradient: 'linear-gradient(135deg, #0b0f19, #1a233a)',
      desc: '[Detailed description of the project, challenges, and the solution provided will go here.]'
    },
    {
      id: 2,
      title: '[Project Name 2]',
      client: '[Client Name]',
      category: '[Category]',
      kpis: ['[Metric 1]', '[Metric 2]', '[Metric 3]'],
      gradient: 'linear-gradient(135deg, #1a1025, #2d1b4e)',
      desc: '[Detailed description of the project, challenges, and the solution provided will go here.]'
    },
    {
      id: 3,
      title: '[Project Name 3]',
      client: '[Client Name]',
      category: '[Category]',
      kpis: ['[Metric 1]', '[Metric 2]', '[Metric 3]'],
      gradient: 'linear-gradient(135deg, #0f1714, #1a332a)',
      desc: '[Detailed description of the project, challenges, and the solution provided will go here.]'
    },
    {
      id: 4,
      title: '[Project Name 4]',
      client: '[Client Name]',
      category: '[Category]',
      kpis: ['[Metric 1]', '[Metric 2]', '[Metric 3]'],
      gradient: 'linear-gradient(135deg, #2b1111, #4a1d1d)',
      desc: '[Detailed description of the project, challenges, and the solution provided will go here.]'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Our <span className="gradient-text">Portfolio</span></h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0' }}>
              Discover how we've helped enterprises achieve digital excellence through our proven case studies.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '4rem' }}>
        <div className="container">
          <div style={{ display: 'grid', gap: '4rem' }}>
            {projects.map((project, index) => (
              <div key={project.id} style={{ display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', gap: '3rem', alignItems: 'center' }} className="portfolio-row">
                <div style={{ flex: 1 }}>
                  <div style={{ width: '100%', height: '350px', background: project.gradient, borderRadius: '20px', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }}></div>
                </div>
                <div style={{ flex: 1 }}>
                  <span style={{ color: 'var(--accent-color)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px', fontSize: '0.85rem' }}>{project.category}</span>
                  <h2 style={{ fontSize: '2.5rem', margin: '0.5rem 0 1rem' }}>{project.title}</h2>
                  <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>Client: {project.client}</h4>
                  <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                    {project.desc}
                  </p>
                  
                  <div style={{ marginBottom: '2rem' }}>
                    <strong style={{ display: 'block', marginBottom: '0.8rem' }}>Key Performance Indicators:</strong>
                    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                      {project.kpis.map(kpi => (
                        <span key={kpi} style={{ padding: '0.5rem 1rem', backgroundColor: 'var(--bg-tertiary)', border: '1px solid var(--border-color)', borderRadius: '8px', fontSize: '0.9rem' }}>
                          ✓ {kpi}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link href={`/portfolio/${project.id}`} className="btn btn-secondary">Read Full Case Study</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .portfolio-row { flex-direction: column !important; }
        }
      `}} />
    </div>
  );
}
