import { useEffect } from "react"
import "../index.css"

function Category() {
    useEffect(() => {
        let categories = document.querySelectorAll(".category__item")
        let cards = document.querySelectorAll(".card")

        categories.forEach(function (category) {
            category.addEventListener("click", function () {
                let selectedCategory = category.getAttribute("data-category")
                cards.forEach(function (card) {
                    let cardCategory = card.getAttribute("data-category")
                    if (selectedCategory === "All" || selectedCategory === cardCategory) {
                        card.style.display = "block"
                    }
                    else {
                        card.style.display = "none"
                    }
                })
            })
        })
    }, [])

    return (
        <div className="category">

            <div className="category__item" data-category="All">
                <span><i className="fa-solid fa-table-cells-large"></i></span>
                <span>All</span>
            </div>

            <div className="category__item" data-category="Nature">
                <span><i className="fa-brands fa-pagelines"></i></span>
                <span>Nature</span>
            </div>

            <div className="category__item" data-category="Travel">
                <span><i className="fa-solid fa-plane"></i></span>
                <span>Travel</span>
            </div>

            <div className="category__item" data-category="City">
                <span><i className="fa-solid fa-city"></i></span>
                <span>City</span>
            </div>

            <div className="category__item" data-category="Animals">
                <span><i className="fa-solid fa-paw"></i></span>
                <span>Animals</span>
            </div>

            <div className="category__item" data-category="Flowers">
                <span><i className="fa-solid fa-spa"></i></span>
                <span>Flowers</span>
            </div>
            
        </div>
    )
}

export default Category