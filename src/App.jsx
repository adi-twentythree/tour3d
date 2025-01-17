import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Home, Portfolio, Blog, Contact, About, Scene, Scenenew } from './pages/Index';

const App = () => {
  return (
    <Router>
      <MainContent />
    </Router>
  );
};


const MainContent = () => {
  const location = useLocation();

  return (
    <main className="bg-slate-300/20 min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="blog" element={<Blog />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="scene" element={<Scene />} />
          <Route path="scenenew" element={<Scenenew />} />
        </Routes>
      </div>

      {!['/scene', '/scenenew'].includes(location.pathname) && <Footer />}

    </main>
  );
};

export default App;
