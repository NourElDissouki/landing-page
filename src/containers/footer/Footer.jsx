import React from 'react'
import './Footer.css'
function Footer() {
  return (
    <footer id= "Footer" className="footer-distributed">
         
        <div className="footer-left">

            <h3>Dr.<span>Nour</span></h3>

            <div className="footerButtons">
                <div className="footerButton" onClick="Home()">الرئيسية</div>
                
                <div className="footerButton" onClick="AboutMe()">من أنا</div>
            
                <div className="footerButton" onClick="Services()">الخدمات</div>
            
                <div className="footerButton" onClick="Ask()">اسألني</div>

                <div className="footerButton" onClick="Gallery()">نتائج العملاء</div>
                </div>
            
            

            <p className="footer-company-name">All Copyrights Reserved © 2021</p>
        </div>

        <div className="footer-center">

            <div>
                <i className="fas fa-map-marker-alt"></i>
                <p><span>7538 Street 28</span> Cairo, Egypt</p>
            </div>

            <div>
                <i className="fas fa-phone" onClick="AddToClipBoard()"></i>
                <p id="phone">+20 102 283 2920</p>
            </div>

            <div>
                <i className="fas fa-envelope"></i>
                <p><a href="email@host.com">email@host.com</a></p>
            </div>

        </div>

        <div className="footer-right">

            <p className="footer-company-about">
                <span>كيف تقوم بالحجز</span>
                Lorem ipsum dolor sit amet, consectateur adispicing elit. Fusce euismod convallis velit, eu auctor lacus vehicula sit amet.
            </p>

            <div className="footer-icons">

                <a href="" className="socialIcon"><i className="fab fa-facebook-f"></i></a>
                <a href="" className="socialIcon"><i className="fab fa-instagram"></i></a>
                <a href="" className="socialIcon"><i className="fab fa-tiktok"></i></a>
                <a href="" className="socialIcon"><i className="fab fa-whatsapp"></i></a>

            </div>

        </div>

    </footer>
  )
}

export default Footer