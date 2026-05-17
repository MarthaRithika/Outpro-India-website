import Link from "next/link";

export default function Services() {
  const services = [
    { id: 'web-development', title: 'Custom Web Development', icon: '💻', desc: 'High-performance, responsive websites built with React.js, Next.js, and modern architectures to ensure scalability. We prioritize fast load times (< 2.5s) and >95 Google PageSpeed scores.' },
    { id: 'mobile-app', title: 'Mobile App Development', icon: '📱', desc: 'Engaging and seamless cross-platform mobile applications that provide intuitive user experiences on both iOS and Android.' },
    { id: 'ui-ux-design', title: 'UI/UX Design', icon: '🎨', desc: 'Pixel-perfect, user-centric designs that elevate brand perception and increase user retention. We provide complete Figma/XD files before development.' },
    { id: 'cloud-infrastructure', title: 'Cloud Infrastructure', icon: '☁️', desc: 'Secure and robust cloud deployment on AWS, Google Cloud, and Azure. We handle DNS, domain mapping, and SSL installation.' },
    { id: 'seo-analytics', title: 'SEO & Analytics', icon: '📈', desc: 'Data-driven optimization utilizing GA4 and Search Console to boost your visibility and lead generation. Includes CDN and lazy-loading setups.' },
    { id: 'enterprise-systems', title: 'Enterprise Systems', icon: '⚙️', desc: 'Integrating CRMs (HubSpot/Zoho), live chats, and custom dashboards to streamline your complex corporate workflows.' },
  ];

  return (
    <div style={{ paddingTop: '100px', minHeight: '100vh' }}>
      <section className="section" style={{ paddingBottom: '3rem' }}>
        <div className="container">
          <div className="section-header" style={{ textAlign: 'left', marginBottom: '2rem' }}>
            <h1 className="hero-title" style={{ fontSize: '3.5rem' }}>Our <span className="gradient-text">Services</span></h1>
            <p className="hero-subtitle" style={{ maxWidth: '800px', margin: '0' }}>
              Comprehensive digital solutions meticulously designed to address complex enterprise requirements and accelerate your business growth.
            </p>
          </div>
        </div>
      </section>

      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', paddingTop: '4rem' }}>
        <div className="container">
          <div className="grid-3">
            {services.map((service) => (
              <div key={service.id} className="card" style={{ display: 'flex', flexDirection: 'column' }}>
                <div className="card-icon">{service.icon}</div>
                <h3 className="card-title">{service.title}</h3>
                <p className="card-desc" style={{ flexGrow: 1, marginBottom: '1.5rem' }}>
                  {service.desc}
                </p>
                <Link href={`/services/${service.id}`} className="btn btn-secondary" style={{ textAlign: 'center', width: '100%', fontSize: '0.9rem', padding: '0.6rem' }}>
                  View Details
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Tech Stack */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technology <span className="gradient-text">Stack</span></h2>
            <p className="section-subtitle">Built with enterprise-grade technologies for maximum performance and security.</p>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', maxWidth: '800px', margin: '0 auto' }}>
            {['Next.js', 'React.js', 'Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Google Cloud', 'Figma', 'GA4'].map(tech => (
              <span key={tech} style={{ padding: '0.8rem 1.5rem', backgroundColor: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '50px', fontWeight: '600' }}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
