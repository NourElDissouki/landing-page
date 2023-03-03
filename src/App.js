import './App.css';
import './style.css';
import './MobileStyle.css'
import {NavBar} from './components'
import { AboutMe, Service, Welcome, Footer} from './containers';
function App() {
  var t = false
  
  window.addEventListener("scroll", function(){
    
    if(document.body.scrollTop > 1 || document.documentElement.scrollTop > 1)
    {
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }
   
  }, false);
  return (
    <>
    <>
      <NavBar />
    </>
    <>
      <Welcome />
      <AboutMe />
      <Service />
    </>
    <Footer />
    </>
  );
}

export default App;
