import React from "react"
import "./Footer.css"
const Footer= () => {
    return (
        <>
        <div className="footer">
            <div className="list-item">
                <ul>
                    <li className="list-heading">ABOUT</li>
                    <li>Contact Us</li>
                    <li>About Us</li>
                    <li>Site Map</li>
                </ul>
            </div>
            <div className="list-item">
                <ul>
                <li className="list-heading">HELP</li>
                    <li>Payment</li>
                    <li>Shipping</li>
                    <li>Cancellation/Return</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className="list-item">
                <ul>
                <li className="list-heading">POLICY</li>
                    <li>Terms of Use</li>
                    <li>Pricing</li>
                   
                </ul>
            </div>
            <div className="list-item">
                <ul>
                <li className="list-heading">SOCIAL MEDIA</li>
                    <li>Facebook</li>
                    <li>Twitter</li>
                    <li>Linkdin</li>
                    <li>Youtube</li>
                </ul>
            </div>
        </div>
        <div className="footeroffooter">
            Developed by <a style={{color:"white",textDecoration:"underline"}} href="https://karanrandhir.netlify.app/"> Karan Randhir</a>
        </div>
        </>
    )
}
export default Footer;