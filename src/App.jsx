import './index.css';

//components
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Section2 from './components/Section2.jsx';
import Projects from './components/Projects.jsx';
import { Artcle1 } from './pages/blog/Article1.jsx';

const App=()=>{
  return(
    <>
      {/* <Home/>
      <Section2/>
      <Projects/>
      <Footer/> */}
      <Artcle1/>
    </>
  );
}
export default App;


