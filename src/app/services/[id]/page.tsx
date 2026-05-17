export function generateStaticParams() {
  return [
    { id: 'web-development' },
    { id: 'mobile-app' },
    { id: 'ui-ux-design' },
    { id: 'cloud-infrastructure' },
    { id: 'seo-analytics' },
    { id: 'enterprise-systems' }
  ];
}

export default async function ServiceDetail(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const serviceName = params.id.split('-').map((word: string) => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh', backgroundColor: 'var(--bg-secondary)' }}>
      <section className="section">
        <div className="container">
          <div style={{ display: 'flex', gap: '4rem', alignItems: 'center' }} className="service-detail-row">
            <div style={{ flex: 1 }}>
              <span style={{ color: 'var(--accent-color)', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>Detailed Service</span>
              <h1 style={{ fontSize: '3.5rem', margin: '1rem 0' }}>{serviceName}</h1>
              <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '2rem' }}>
                Our {serviceName} service is engineered to meet the highest corporate standards, delivering performance, scalability, and security for your enterprise needs. We work closely with your team to ensure every technical requirement is met perfectly.
              </p>
              
              <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
                {['Custom Architecture Design', 'Scalable Implementation', '24/7 Priority Support', 'Performance Optimization'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '1rem', color: 'var(--text-primary)' }}>
                    <span style={{ color: 'var(--success-color, #10b981)' }}>✓</span> {item}
                  </li>
                ))}
              </ul>
              
              <a href="/contact" className="btn btn-primary">Request Consultation</a>
            </div>
            
            <div style={{ flex: 1 }}>
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(135deg, #1a233a, #0b0f19)', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontSize: '5rem' }}>⚙️</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <style dangerouslySetInnerHTML={{__html: `
        @media (max-width: 992px) {
          .service-detail-row { flex-direction: column !important; }
        }
      `}} />
    </div>
  );
}
