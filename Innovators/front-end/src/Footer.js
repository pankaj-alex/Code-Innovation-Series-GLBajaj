import React from 'react'
import "./Footer.css";
import insta from "./image/insta.png";
import fb from "./image/fb.png";
import twitter from "./image/twitter.png";
import youtube from "./image/youtube.png";
import Newsletter from "./Newsletter";

function Footer() {
    return (
        <div className="Footer">
            <div className="Footer-body">
                    <div className="Footer-body-upper">
                        <div className="Footer-body-team">
                        <h3>Our Team</h3>
                            <h5>Designing</h5>
                            <h5>Programming</h5>
                            <h5>Animation</h5>
                        </div>
                        <div className="Footer-body-policy">
                            <h5>Term & Condition</h5>
                            <h5>FAQ</h5>
                            <h5>Privacy Policy</h5>
                        </div>
                        <div className="Footer-body-newsletter">
                            <Newsletter />
                        </div>
                    </div>
                    <div className="Footer-body-lower">
                        <div className="Footer-body-follow-text">
                        <h5>Follow Us</h5>
                            <div className="Footer-body-follow">
                                <img src={insta} alt='-'></img>
                                <img src={fb} alt='-'></img>
                                <img src={youtube} alt='-'></img>
                                <img src={twitter} alt='-'></img>
                            </div>
                        </div>
                        <h5>Copyright ©</h5>
                    </div>
            </div>
        </div>
    )
}

export default Footer;
