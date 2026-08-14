import React, { Component, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Work from './pages/Work';
import ProjectDetail from './pages/ProjectDetail';
import Personal from './pages/Personal';
import PersonalDetail from './pages/PersonalDetail';
import Experience from './pages/Experience';
import ExperienceDetail from './pages/ExperienceDetail';
import Contact from './pages/Contact';

// Safety Error Boundary to prevent blank screen crashes
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error("React Error Boundary Caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '4rem 2rem', textAlign: 'center', backgroundColor: '#F7F3EA', color: '#171515' }}>
          <h2 style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: '1.75rem', marginBottom: '1rem' }}>
            Application Error Caught
          </h2>
          <p style={{ color: '#57534E', marginBottom: '1.5rem' }}>
            {this.state.error?.toString()}
          </p>
          <button 
            onClick={() => window.location.reload()}
            style={{ padding: '0.75rem 1.5rem', backgroundColor: '#171515', color: '#F7F3EA', border: 'none', cursor: 'pointer', fontFamily: 'Space Grotesk, sans-serif', fontWeight: 700 }}
          >
            RELOAD PAGE
          </button>
        </div>
      );
    }

    return this.props.children;
  }
}

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <div className="page-wrapper">
          <Navbar />
          <main className="main-content-area page-container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/work" element={<Work />} />
              <Route path="/work/:projectId" element={<ProjectDetail />} />
              <Route path="/personal" element={<Personal />} />
              <Route path="/personal/:categoryId" element={<PersonalDetail />} />
              <Route path="/experience" element={<Experience />} />
              <Route path="/experience/:id" element={<ExperienceDetail />} />
              <Route path="/experience/:id/:subFolder" element={<ExperienceDetail />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="*" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}
