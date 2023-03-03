import React from 'react'
import './NavBar.css'

function NavBar() {
    var t = false;
    document.getElementById("Welcome-Poster")
    function Home()
    {
        document.getElementById("Welcome-Poster").scrollIntoView({behavior: 'smooth'});
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }
    function AboutMe()
    {
        document.getElementById("About-Me").scrollIntoView({behavior: 'smooth'});
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }

    function Services()
    {
        document.getElementById("Services").scrollIntoView({behavior: 'smooth'});
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }

    function Ask() {
        document.getElementById("ASK").scrollIntoView({behavior: 'smooth'});
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }

    function Gallery(){
        document.getElementById("Gallery").scrollIntoView({behavior: 'smooth'});
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }

    function ContactMe() {
        document.getElementById("Footer").scrollIntoView({behavior: 'smooth'});
        document.getElementById("Header-Menu").style.top = "-300px";
        document.getElementById("Header-Menu").style.opacity = "0";
        if(t)
            document.getElementsByClassName("change")[0].classList.toggle("change");
        t= false;
    }
    
    function HeaderMenu(){
        var x = document.getElementById('Menu-Button')
        x.classList.toggle("change");
        if(!t)
        {
            document.getElementById("Header-Menu").style.top = "70px";
            document.getElementById("Header-Menu").style.opacity = "1";
        }
        else
        {
            document.getElementById("Header-Menu").style.top = "-300px";
            document.getElementById("Header-Menu").style.opacity = "0";
        }
        t = !t;
    }
    

  return (
    <div className="Header-Container">
        <div className="Header">
            <div className="Logo" onClick={Home}>
                <div className="first">Dr.</div><div className="second">Nour</div>
            </div>
            <div className="Header-Buttons">
            <div className = "Header-Button" onClick={Home}>
                    <div className="HeaderButtonDecoration"></div> 
                    <div className = "Header-Button-Text">الرئيسية</div>
                </div>
            <div className = "Header-Button" onClick={AboutMe}>
                    <div className="HeaderButtonDecoration"></div>
                    <div className = "Header-Button-Text">من أنا</div>
            </div>
            <div className = "Header-Button" onClick={Services}>
                    <div className="HeaderButtonDecoration"></div>
                    <div className = "Header-Button-Text">خدملت</div>
            </div>
            <div className = "Header-Button" onClick={Ask}>
                <div className="HeaderButtonDecoration"></div>
                <div className = "Header-Button-Text">أسألني</div>
            </div>
            <div className = "Header-Button" onClick={Gallery}>
                <div className="HeaderButtonDecoration"></div>
                <div className = "Header-Button-Text">نتائج العملاء</div>
            </div>
            <div className = "Header-Button" onClick={ContactMe}>
                    <div className="HeaderButtonDecoration"></div>
                    <div className = "Header-Button-Text">تواصل معي</div>
            </div>
            </div>
            <div className="Header-Button-Menu" id='Menu-Button' onClick={HeaderMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div id="Header-Menu">
                    <div className="Header-Menu-Button" onClick={Home}>
                        الرئيسية
                    </div>
                    <div className="Header-Menu-Button" onClick={AboutMe}>
                        من أنا
                    </div>
                    <div className="Header-Menu-Button" onClick={Services}>
                        خدملت
                    </div>
                    <div className="Header-Menu-Button" onClick={Ask}>
                        أسألني
                    </div>
                    <div className="Header-Menu-Button" onClick={Gallery}>
                        نتائج العملاء
                    </div>
                    <div className="Header-Menu-Button" onClick={ContactMe}>
                        تواصل معي
                    </div>
                </div>
        </div>
  
    </div>
  )
}

export default NavBar