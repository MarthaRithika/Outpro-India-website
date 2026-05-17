export default function Testimonials() {
  const testimonials = [
    {
      name: '[Client Name]',
      role: '[Position], [Company Name]',
      text: '[Client testimonial text will be placed here once available. This space is reserved for a written review of our services.]',
      type: 'text'
    },
    {
      name: '[Client Name]',
      role: '[Position], [Company Name]',
      text: '[Client testimonial text will be placed here once available. This space is reserved for a video review of our services.]',
      type: 'video',
      thumbnail: 'linear-gradient(135deg, #1a233a, #0b0f19)'
    },
    {
      name: '[Client Name]',
      role: '[Position], [Company Name]',
      text: '[Client testimonial text will be placed here once available. This space is reserved for a written review of our services.]',
      type: 'text'
    },
    {
      name: '[Client Name]',
      role: '[Position], [Company Name]',
      text: '[Client testimonial text will be placed here once available. This space is reserved for a video review of our services.]',
      type: 'video',
      thumbnail: 'linear-gradient(135deg, #2d1b4e, #1a1025)'
    }
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Client <span className="gradient-text">Testimonials</span></h1>
            <p className="section-subtitle" style={{ maxWidth: '800px', margin: '0 auto' }}>
              Hear directly from our enterprise partners about their experience working with Outpro.India.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '4rem' }}>
        <div className="container">
          <div className="grid-3">
            {testimonials.map((test, index) => (
              <div key={index} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                
                {test.type === 'video' ? (
                  <div style={{ width: '100%', height: '200px', background: test.thumbnail, borderRadius: '12px', marginBottom: '1.5rem', position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                    <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(5px)' }}>
                      <span style={{ marginLeft: '5px', color: 'white', fontSize: '1.2rem' }}>▶</span>
                    </div>
                    <span style={{ position: 'absolute', top: '10px', right: '10px', background: 'rgba(0,0,0,0.6)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.7rem', fontWeight: 'bold' }}>VIDEO</span>
                  </div>
                ) : (
                  <div style={{ color: 'var(--accent-color)', fontSize: '3rem', lineHeight: '1', marginBottom: '1rem', fontFamily: 'serif' }}>"</div>
                )}
                
                <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '2rem', flexGrow: 1 }}>
                  "{test.text}"
                </p>
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginTop: 'auto' }}>
                  <div style={{ width: '50px', height: '50px', borderRadius: '50%', backgroundColor: 'var(--glass-bg)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem' }}>
                    👤
                  </div>
                  <div>
                    <h4 style={{ fontSize: '1.1rem', marginBottom: '2px' }}>{test.name}</h4>
                    <p style={{ fontSize: '0.85rem', color: 'var(--accent-color)' }}>{test.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
