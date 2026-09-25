import "../index.css"

function Navbar() {
    return (
        <div className="nav__section">

            <div className="nav__section__left">
                <span><i className="fa-solid fa-camera"></i></span>
                <h2>PicBoard</h2>
            </div>

            <div className="nav__section__right">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                </ul>
            </div>
            
        </div>
    )
}

export default Navbar