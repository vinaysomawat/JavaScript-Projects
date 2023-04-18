function submitStarRating(rating) {
    showStarResult(rating);
};

function showStarResult(rating) {
    let starRatingDiv = document.getElementsByClassName('result-star-rating');
    starRatingDiv[0].innerHTML = `Thank you for your ${rating} star rating.`;
};

function hoverStar(rating) {
    let starOne = document.getElementsById('star-one');
    let starTwo = document.getElementsById('star-two');
    let starThree = document.getElementsById('star-three');
    let starFour = document.getElementsById('star-four');
    let starFive = document.getElementsById('star-five');

    if(rating===1) {
        starOne.classList.add('MyClass');
    }
}

