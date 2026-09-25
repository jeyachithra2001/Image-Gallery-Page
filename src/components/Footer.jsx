import "../index.css"

function Footer(){
    return(
        <div className="footer">
        <div className="footer__top">
            <div>
                <h3>Quick Links</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
            </div>
            <div className="footer__top__right">
                <h3>Follow Us</h3>
                <div>
                    <span><i className="fa-brands fa-facebook"></i></span>
                    <span><i className="fa-brands fa-square-instagram"></i></span>
                    <span><i className="fa-brands fa-square-x-twitter"></i></span>
                    <span><i className="fa-brands fa-youtube"></i></span>
                </div>
            </div>
        </div>
         <p className="footer__bottom">&copy; 2025 PicBoard, All rights reserved.</p>
        </div>
    )
}

export default Footer