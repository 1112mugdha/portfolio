import React, { Component, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import PersonalDetail from './pages/PersonalDetail';
import ExperienceDetail from './pages/ExperienceDetail';
import Contact from './pages/Contact';
import { LightboxProvider } from './context/LightboxContext';

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

// Scroll handler supporting both route changes and section hash anchors (#assignments, #personal-projects, #experience)
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const targetId = hash.replace('#', '');
      const element = document.getElementById(targetId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <ErrorBoundary>
        <LightboxProvider>
          <div className="page-wrapper">
            <Navbar />
            <main className="main-content-area page-container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<Navigate to="/#about" replace />} />
                <Route path="/work" element={<Navigate to="/#assignments" replace />} />
                <Route path="/work/:projectId" element={<ProjectDetail />} />
                <Route path="/personal" element={<Navigate to="/#personal-projects" replace />} />
                <Route path="/personal/:categoryId" element={<PersonalDetail />} />
                <Route path="/experience" element={<Navigate to="/#experience" replace />} />
                <Route path="/experience/:id" element={<ExperienceDetail />} />
                <Route path="/experience/:id/:subFolder" element={<ExperienceDetail />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="*" element={<Home />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </LightboxProvider>
      </ErrorBoundary>
    </Router>
  );
}
