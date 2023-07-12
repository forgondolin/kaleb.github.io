import './App.css';
import Header from './components/header';
import About from './components/about';
import Footer from './components/footer'
import Skills from './components/skills'
import Projects from './components/projects';

const App = () => {
  return (
    <div className="App">
       <Header />
       <About />
       <Skills />
       <Projects />
       <Footer />
    </div>
  );
};

export default App;
