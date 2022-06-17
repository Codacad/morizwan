document.addEventListener("DOMContentLoaded", function(){
    const mpaaRating = document.querySelectorAll('p.mpaa-rating em')
    mpaaRating.forEach(rating => {
        if(rating.textContent == "PG-13"){
            rating.style.width = "50px"
        }else{
            rating.style.width = "30px"
        }
    })
    
    let ratingNumber = Number(document.querySelector('.rating-number').textContent)
    
    document.querySelectorAll('.review').forEach(review => {
        console.log(review)
        let ratingNumber = Number(review.querySelector('.rating-number').textContent)
        for(let i = 0; i < ratingNumber; i++){
            review.querySelectorAll('.star')[i].setAttribute('src', '../images/rating-star-colored.svg');
        }
    })
})