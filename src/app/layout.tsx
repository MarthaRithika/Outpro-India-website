import type { Metadata } from "next";
import Link from "next/link";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outpro.India | Corporate Digital Presence",
  description: "Modern, high-performance, and scalable website for Outpro.India. We build credibility, support lead generation, and deliver seamless digital experiences.",
  verification: {
    google: "google-site-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
      </head>
      <body>
        <nav className="navbar">
          <div className="container">
            <Link href="/" className="logo">Outpro<span className="gradient-text">.India</span></Link>
            <ul className="nav-links">
              <li><Link href="/" className="nav-link">Home</Link></li>
              <li><Link href="/about" className="nav-link">About Us</Link></li>
              <li><Link href="/services" className="nav-link">Services</Link></li>
              <li><Link href="/portfolio" className="nav-link">Portfolio</Link></li>
              <li><Link href="/testimonials" className="nav-link">Testimonials</Link></li>
            </ul>
            <div className="nav-actions">
              <Link href="/contact" className="btn btn-primary">Get in Touch</Link>
            </div>
          </div>
        </nav>
        
        <main>
          {children}
        </main>
        
        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-about">
                <div className="logo">Outpro<span className="gradient-text">.India</span></div>
                <p>We deliver cutting-edge digital solutions tailored to elevate your business presence and accelerate growth.</p>
              </div>
              <div>
                <h4 className="footer-heading">Company</h4>
                <div className="footer-links">
                  <Link href="/about">About Us</Link>
                  <Link href="/careers">Careers</Link>
                  <Link href="/portfolio">Our Work</Link>
                  <Link href="/contact">Contact</Link>
                </div>
              </div>
              <div>
                <h4 className="footer-heading">Services</h4>
                <div className="footer-links">
                  <Link href="/services">Digital Strategy</Link>
                  <Link href="/services">Web Development</Link>
                  <Link href="/services">Cloud Solutions</Link>
                  <Link href="/services">UI/UX Design</Link>
                </div>
              </div>
              <div>
                <h4 className="footer-heading">Legal</h4>
                <div className="footer-links">
                  <Link href="/privacy">Privacy Policy</Link>
                  <Link href="/terms">Terms of Service</Link>
                  <Link href="/cookies">Cookie Policy</Link>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; {new Date().getFullYear()} Outpro.India. All rights reserved.</p>
            </div>
          </div>
        </footer>
        <GoogleAnalytics gaId="G-9JS8VEDSH5" />
      </body>
    </html>
  );
}
