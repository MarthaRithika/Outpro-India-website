export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Elevate Your <span className="gradient-text">Digital Presence</span>
            </h1>
            <p className="hero-subtitle">
              We engineer scalable, high-performance web and mobile solutions to transform your business identity. Unlock growth with Next-Gen technology and modern design.
            </p>
            <div className="hero-actions">
              <a href="#services" className="btn btn-primary">Discover Services</a>
              <a href="#portfolio" className="btn btn-secondary">View Portfolio</a>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About <span className="gradient-text">Outpro.India</span></h2>
            <p className="section-subtitle">
              Pioneering digital transformation with innovation and excellence.
            </p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <h3>Our Mission</h3>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
                At Outpro.India, our mission is to empower enterprises by establishing a formidable digital footprint. We merge creativity with advanced technology to deliver premium solutions that drive meaningful business outcomes. Our vision is to be the catalyst for your digital success story.
              </p>
              <h3>Core Values</h3>
              <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', listStyleType: 'disc', paddingLeft: '1.5rem' }}>
                <li>Innovation First</li>
                <li>Uncompromising Quality</li>
                <li>Client-Centric Approach</li>
                <li>Scalable Architecture</li>
              </ul>
              
              <div className="about-stats">
                <div className="stat-item">
                  <h4>[XX]+</h4>
                  <p>Projects Delivered</p>
                </div>
                <div className="stat-item">
                  <h4>[XX]%</h4>
                  <p>Client Satisfaction</p>
                </div>
              </div>
            </div>
            <div className="about-image">
              <div style={{ width: '100%', height: '400px', background: 'linear-gradient(45deg, #111, #222)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-secondary)' }}>
                <span style={{ fontSize: '4rem' }}>🚀</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our <span className="gradient-text">Services</span></h2>
            <p className="section-subtitle">
              Comprehensive digital solutions tailored to your unique enterprise requirements.
            </p>
          </div>
          
          <div className="grid-3">
            <div className="card">
              <div className="card-icon">💻</div>
              <h3 className="card-title">Custom Web Development</h3>
              <p className="card-desc">
                High-performance, responsive websites built with React.js, Next.js, and modern architectures to ensure scalability.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📱</div>
              <h3 className="card-title">Mobile App Development</h3>
              <p className="card-desc">
                Engaging and seamless cross-platform mobile applications that provide intuitive user experiences.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">🎨</div>
              <h3 className="card-title">UI/UX Design</h3>
              <p className="card-desc">
                Pixel-perfect, user-centric designs that elevate brand perception and increase user retention.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">☁️</div>
              <h3 className="card-title">Cloud Infrastructure</h3>
              <p className="card-desc">
                Secure and robust cloud deployment on AWS, Google Cloud, and Azure to keep your business online 24/7.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">📈</div>
              <h3 className="card-title">SEO & Analytics</h3>
              <p className="card-desc">
                Data-driven optimization utilizing GA4 and Search Console to boost your visibility and lead generation.
              </p>
            </div>
            <div className="card">
              <div className="card-icon">⚙️</div>
              <h3 className="card-title">Enterprise Systems</h3>
              <p className="card-desc">
                Integrating CRMs, ERPs, and custom dashboards to streamline your complex corporate workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="section" style={{ backgroundColor: 'var(--bg-secondary)' }}>
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured <span className="gradient-text">Portfolio</span></h2>
            <p className="section-subtitle">
              A glimpse into our successful deployments and enterprise case studies.
            </p>
          </div>
          
          <div className="portfolio-grid">
            <div className="portfolio-item">
              <div style={{ width: '100%', height: '250px', background: 'linear-gradient(135deg, #0b0f19, #1a233a)' }}></div>
              <div className="portfolio-overlay">
                <h3>[Project Name 1]</h3>
                <p>[Project description will go here]</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div style={{ width: '100%', height: '250px', background: 'linear-gradient(135deg, #1a1025, #2d1b4e)' }}></div>
              <div className="portfolio-overlay">
                <h3>[Project Name 2]</h3>
                <p>[Project description will go here]</p>
              </div>
            </div>
            <div className="portfolio-item">
              <div style={{ width: '100%', height: '250px', background: 'linear-gradient(135deg, #0f1714, #1a332a)' }}></div>
              <div className="portfolio-overlay">
                <h3>[Project Name 3]</h3>
                <p>[Project description will go here]</p>
              </div>
            </div>
          </div>
          
          <div style={{ textAlign: 'center', marginTop: '3rem' }}>
            <a href="#" className="btn btn-secondary">View All Case Studies</a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Client <span className="gradient-text">Testimonials</span></h2>
            <p className="section-subtitle">
              What industry leaders say about our technological partnership.
            </p>
          </div>
          
          <div className="grid-3">
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2rem', marginBottom: '1rem' }}>"</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                [Client testimonial text will be placed here once available. This space is reserved for a written review of our services.]
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--glass-bg)' }}></div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>[Client Name]</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>[Position, Company]</p>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2rem', marginBottom: '1rem' }}>"</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                [Client testimonial text will be placed here once available. This space is reserved for a written review of our services.]
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--glass-bg)' }}></div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>[Client Name]</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>[Position, Company]</p>
                </div>
              </div>
            </div>
            
            <div className="card" style={{ padding: '2rem' }}>
              <div style={{ color: 'var(--accent-color)', fontSize: '2rem', marginBottom: '1rem' }}>"</div>
              <p style={{ fontStyle: 'italic', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                [Client testimonial text will be placed here once available. This space is reserved for a written review of our services.]
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: 'var(--glass-bg)' }}></div>
                <div>
                  <h4 style={{ fontSize: '1rem' }}>[Client Name]</h4>
                  <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>[Position, Company]</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="section" style={{ background: 'linear-gradient(135deg, var(--bg-tertiary), rgba(59, 130, 246, 0.1))', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ready to Accelerate Your Growth?</h2>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
            Let's discuss how our digital solutions can help you achieve your business objectives.
          </p>
          <a href="#contact" className="btn btn-primary" style={{ fontSize: '1.1rem', padding: '1rem 2rem' }}>Start a Project</a>
        </div>
      </section>
    </>
  );
}
