import "../index.css"
import cardData from "../data/cardData"
import { useEffect } from "react"

function Cards({cardData}) {
    useEffect(() => {
        let search = document.querySelector(".search")
        search.addEventListener("keyup", function (event) {
            let enteredValue = event.target.value.toLowerCase()
            let imgCard = document.querySelectorAll(".card")
            imgCard.forEach((card) => {
                let cardName = card.querySelector("h3").textContent
                if (cardName.toLowerCase().indexOf(enteredValue) === -1) {
                    card.style.display = "none"
                }
                else {
                    card.style.display = "block"
                }
            })
        })
    }, [])

    return (
        <div className="card__section" id="gallery">
            {
                cardData.map(function (card) {
                    return (
                        <div className="card" data-category={card.category} key={card.id}>
                            <img src={card.image} alt={card.title} />
                            <div className="card__content">
                                <div>
                                    <span>{card.symbol}</span>
                                </div>
                                <div>
                                    <h3>{card.title}</h3>
                                    <p>{card.desc}</p>
                                </div>
                            </div>
                            <span className="wishlist" onClick={(e) => { e.currentTarget.classList.toggle("active") }}><i className="fa-solid fa-heart"></i></span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards