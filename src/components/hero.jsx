import "../index.css"
import hero from "../assets/hero-img.webp"

function HeroSection() {

    return (
        <div className="hero">

            <div className="hero__content">
                <span>CAPTURE</span>
                <span>●</span>
                <span>EXPLORE</span>
                <span>●</span>
                <span>FEEL</span>
                <h1>Explore Our <span>Gallery</span></h1>
                <p>Beautiful moments, thoughtfully displayed. <br />Discover a collection of stunning images that tell <br /> stories, inspire dreams and spark joy.</p>
                <input type="text" className="search" placeholder="🔍︎   Search for Nature, Travel, City..." />
            </div>

            <div className="heroImg">
                <img src={hero} alt="img" />
            </div>
            
        </div>
    )
}

export default HeroSection