
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Banner from './Components/Banner/Banner';
import About from './Components/About/About';
import Project from './Components/Project/Project';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';
import Blogs from './Components/Blogs/Blogs';
import Navigation from './Components/Navigation/Navigation';






function App() {
  return (
    <div className="app">
     
      <Navigation></Navigation>
      <Banner></Banner>
      <About></About>
      <Skills></Skills>
      <Project></Project>
      <Blogs></Blogs>
      <Contact></Contact>
      <Footer></Footer>


    </div>
  );
}

export default App;
