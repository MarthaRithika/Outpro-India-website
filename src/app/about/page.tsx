import Link from "next/link";

export default function About() {
  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      {/* Header */}
      <section className="section" style={{ paddingBottom: '2rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>About <span className="gradient-text">Outpro.India</span></h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0' }}>
              We are a premier digital engineering firm dedicated to transforming businesses through state-of-the-art technology and visionary design.
            </p>
          </div>
        </div>
      </section>

      {/* Story & Mission */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="about-grid">
            <div>
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Our Story</h2>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                Founded with a vision to redefine the corporate digital landscape, Outpro.India has grown from a boutique agency into a leading technology partner for global enterprises. We recognized a gap in the market for high-performance, scalable web solutions that don't compromise on design aesthetics. 
              </p>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                Today, we empower organizations to communicate their true value online, bridging the gap between complex business requirements and seamless user experiences.
              </p>
              
              <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Mission & Vision</h2>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px solid var(--border-color)', marginBottom: '1.5rem' }}>
                <strong style={{ color: 'var(--accent-color)' }}>Mission:</strong> To engineer scalable, high-performance digital platforms that accelerate growth and build lasting brand credibility for our clients.
              </div>
              <div style={{ padding: '1.5rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                <strong style={{ color: 'var(--accent-secondary)' }}>Vision:</strong> To be the catalyst for enterprise digital transformation worldwide, setting the standard for quality and innovation.
              </div>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <div className="about-image" style={{ height: '300px' }}>
                <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, #1a233a, #0b0f19)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: '3rem' }}>🏢</span>
                </div>
              </div>
              <div className="about-stats" style={{ marginTop: '0' }}>
                <div className="stat-item" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                  <h4>[XX]+</h4>
                  <p>Years Experience</p>
                </div>
                <div className="stat-item" style={{ textAlign: 'center', padding: '2rem', backgroundColor: 'var(--bg-tertiary)', borderRadius: '12px' }}>
                  <h4>[XX]+</h4>
                  <p>Tech Experts</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership & Team */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Leadership</span></h2>
            <p className="section-subtitle">Meet the visionary minds driving Outpro.India forward.</p>
          </div>
          
          <div className="grid-3">
            {[
              { name: '[Leader Name]', role: '[Chief Executive Officer]', icon: '👨‍💼' },
              { name: '[Leader Name]', role: '[Chief Technology Officer]', icon: '👩‍💻' },
              { name: '[Leader Name]', role: '[Head of Design]', icon: '🎨' },
            ].map((leader, i) => (
              <div key={i} className="card" style={{ textAlign: 'center' }}>
                <div style={{ width: '100px', height: '100px', borderRadius: '50%', backgroundColor: 'var(--glass-bg)', margin: '0 auto 1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3rem' }}>
                  {leader.icon}
                </div>
                <h3 style={{ fontSize: '1.4rem', marginBottom: '0.5rem' }}>{leader.name}</h3>
                <p style={{ color: 'var(--accent-color)', fontWeight: '600' }}>{leader.role}</p>
                <p style={{ color: 'var(--text-secondary)', marginTop: '1rem', fontSize: '0.9rem' }}>
                  Dedicated to pushing the boundaries of technology and design to deliver excellence.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA */}
      <section className="section" style={{ textAlign: 'center', padding: '4rem 0' }}>
        <div className="container">
          <h2 style={{ marginBottom: '1.5rem' }}>Join Our Growing Team</h2>
          <Link href="/careers" className="btn btn-secondary">View Open Positions</Link>
        </div>
      </section>
    </div>
  );
}
