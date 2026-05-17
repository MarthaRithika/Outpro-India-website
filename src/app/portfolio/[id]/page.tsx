export function generateStaticParams() {
  return [
    { id: '1' }, { id: '2' }, { id: '3' }, { id: '4' }
  ];
}

export default async function PortfolioDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <span style={{ color: 'var(--accent-color)', fontWeight: 'bold' }}>CASE STUDY {params.id}</span>
          <h1 style={{ fontSize: '3.5rem', margin: '1rem 0 2rem' }}>Enterprise Digital Transformation</h1>
          
          <div style={{ width: '100%', height: '450px', background: 'linear-gradient(135deg, #0f1714, #1a332a)', borderRadius: '20px', marginBottom: '4rem' }}></div>
          
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }} className="case-study-grid">
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Project Overview</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                [Detailed project overview, explaining the client's problem, the objectives of the project, and the timeline will be placed here once available.]
              </p>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>The Solution</h2>
              <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem' }}>
                [Detailed explanation of the technical solution, architecture, and deployment strategy will be placed here once available.]
              </p>
            </div>
            
            <div>
              <div style={{ padding: '2rem', backgroundColor: 'var(--bg-secondary)', borderRadius: '16px', border: '1px solid var(--border-color)' }}>
                <h3 style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '1rem' }}>Project Details</h3>
                
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Client</strong>
                  <div style={{ marginTop: '0.3rem' }}>[Client Name]</div>
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Timeline</strong>
                  <div style={{ marginTop: '0.3rem' }}>[X Months]</div>
                </div>
                <div style={{ marginBottom: '1.5rem' }}>
                  <strong style={{ color: 'var(--text-secondary)' }}>Technologies</strong>
                  <div style={{ marginTop: '0.3rem' }}>[Tech Stack used]</div>
                </div>
                
                <h3 style={{ marginBottom: '1rem', marginTop: '2rem', color: 'var(--accent-color)' }}>Results Delivered</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={{ marginBottom: '0.5rem' }}>[Metric 1]</li>
                  <li style={{ marginBottom: '0.5rem' }}>[Metric 2]</li>
                  <li>[Metric 3]</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 768px) {
          .case-study-grid { grid-template-columns: 1fr !important; }
        }
      `}} />
    </div>
  );
}
