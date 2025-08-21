import { useState, useEffect } from 'react'
import logo from './assets/newlogo.png'
import './App.css'

// Placeholder product images (using high-quality placeholder service)
const products = [
  {
    id: 1,
    name: "Leaded Solder Stick",
    image: "https://images.unsplash.com/photo-1581092334651-ddf26d9a09d0?w=400&h=300&fit=crop",
    description: "High-quality leaded solder sticks for professional applications"
  },
  {
    id: 2,
    name: "Leaded Solder Wire",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=300&fit=crop",
    description: "Precision leaded solder wire in various diameters"
  },
  {
    id: 3,
    name: "ROHS Solder Wire",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    description: "Lead-free ROHS compliant solder wire for electronics"
  },
  {
    id: 4,
    name: "ROHS Solder Stick",
    image: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=400&h=300&fit=crop",
    description: "Environmentally friendly lead-free solder sticks"
  },
  {
    id: 5,
    name: "Solder Preform",
    image: "https://images.unsplash.com/photo-1518709074710-38c7eca5313e?w=400&h=300&fit=crop",
    description: "Precision shaped solder preforms for specific applications"
  },
  {
    id: 6,
    name: "Anode",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop",
    description: "High-purity anodes for electroplating applications"
  },
  {
    id: 7,
    name: "Lead Sheet 1 Component",
    image: "https://images.unsplash.com/photo-1567789884554-0b844b597180?w=400&h=300&fit=crop",
    description: "Premium lead sheets for industrial applications"
  },
  {
    id: 8,
    name: "Solder Paste",
    image: "https://images.unsplash.com/photo-1609592809139-2b24e08b5c86?w=400&h=300&fit=crop",
    description: "Professional grade solder paste for SMT applications"
  },
  {
    id: 9,
    name: "Fluxes and Chemicals",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?w=400&h=300&fit=crop",
    description: "Complete range of fluxes and cleaning chemicals"
  },
  {
    id: 10,
    name: "Babbit Wire/Alloy",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop",
    description: "High-quality babbit wire and alloys for bearing applications"
  }
];

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'products', 'downloads', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <img src={logo} alt="HarshSolders Logo" className="logo" />
          </div>
          <div className="nav-menu">
            {['home', 'about', 'products', 'downloads', 'contact'].map((section) => (
              <button
                key={section}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
                onClick={() => scrollToSection(section)}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="section hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Professional Soldering Solutions
            </h1>
            <p className="hero-subtitle">
              Leading manufacturer and supplier of high-quality soldering materials, 
              fluxes, and electronic assembly solutions for industries worldwide.
            </p>
            <div className="hero-buttons">
              <button className="btn-primary" onClick={() => scrollToSection('products')}>
                View Products
              </button>
              <button className="btn-secondary" onClick={() => scrollToSection('contact')}>
                Get Quote
              </button>
            </div>
          </div>
          <div className="hero-image">
            <img src="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=600&h=400&fit=crop" alt="Professional Soldering Equipment and Circuit Boards" className="hero-photo" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About HarshSolders</h2>
            <p className="section-subtitle">
              Your trusted partner in precision soldering solutions
            </p>
          </div>
          <div className="about-grid">
            <div className="about-content">
              <h3>Our Story</h3>
              <p>
                With decades of experience in the soldering industry, HarshSolders has established 
                itself as a leading manufacturer and supplier of premium soldering materials. We 
                specialize in providing comprehensive solutions for electronics manufacturing, 
                automotive, aerospace, and industrial applications.
              </p>
              <h3>Our Mission</h3>
              <p>
                To deliver superior quality soldering materials and exceptional customer service, 
                enabling our clients to achieve excellence in their manufacturing processes while 
                maintaining the highest standards of safety and environmental compliance.
              </p>
            </div>
            <div className="about-features">
              <div className="feature-card">
                <div className="feature-icon quality-icon"></div>
                <h4>Quality Certified</h4>
                <p>ISO certified manufacturing processes ensuring consistent quality</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon global-icon"></div>
                <h4>Global Reach</h4>
                <p>Serving customers worldwide with reliable supply chains</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon research-icon"></div>
                <h4>R&D Excellence</h4>
                <p>Continuous innovation in soldering technology and materials</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon rohs-icon"></div>
                <h4>ROHS Compliant</h4>
                <p>Environmentally responsible products meeting global standards</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="section products-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Our Products</h2>
            <p className="section-subtitle">
              Comprehensive range of professional soldering materials
            </p>
          </div>
          <div className="products-grid">
            <div className="products-scroll">
              {[...products, ...products, ...products].map((product, index) => (
                <div key={`${product.id}-${Math.floor(index / products.length)}-${index % products.length}`} className="product-card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-description">{product.description}</p>
                    <button className="product-btn">Learn More</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloads Section */}
      <section id="downloads" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Downloads</h2>
            <p className="section-subtitle">
              Access our technical documentation and product information
            </p>
          </div>
          <div className="downloads-grid">
            <div className="download-card">
              <div className="download-icon catalog-icon"></div>
              <h3>Product Catalogue</h3>
              <p>Complete catalog of all our products with specifications and applications</p>
              <button className="download-btn">Download PDF</button>
            </div>
            <div className="download-card">
              <div className="download-icon tds-icon"></div>
              <h3>Technical Data Sheet (TDS)</h3>
              <p>Detailed technical specifications and performance characteristics</p>
              <button className="download-btn">Download TDS</button>
            </div>
            <div className="download-card">
              <div className="download-icon msds-icon"></div>
              <h3>Material Safety Data Sheet (MSDS)</h3>
              <p>Safety information and handling guidelines for all products</p>
              <button className="download-btn">Download MSDS</button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Contact Us</h2>
            <p className="section-subtitle">
              Get in touch with our team for inquiries and support
            </p>
          </div>
          <div className="contact-grid">
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">📍</div>
                <div>
                  <h4>Address</h4>
                  <p>
                    HarshSolders Manufacturing<br/>
                    Industrial Area, Sector 25<br/>
                    New Delhi - 110020, India
                  </p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📞</div>
                <div>
                  <h4>Phone</h4>
                  <p>+91-11-2345-6789</p>
                  <p>+91-98765-43210</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">✉️</div>
                <div>
                  <h4>Email</h4>
                  <p>info@harshsolders.com</p>
                  <p>sales@harshsolders.com</p>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🕒</div>
                <div>
                  <h4>Business Hours</h4>
                  <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form>
                <div className="form-group">
                  <input type="text" placeholder="Your Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Your Email" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Your Phone" />
                </div>
                <div className="form-group">
                  <input type="text" placeholder="Subject" required />
                </div>
                <div className="form-group">
                  <textarea placeholder="Your Message" rows="5" required></textarea>
                </div>
                <button type="submit" className="btn-primary">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-logo">
              <img src={logo} alt="HarshSolders" />
              <span>HarshSolders</span>
            </div>
            <p>&copy; 2024 HarshSolders. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App