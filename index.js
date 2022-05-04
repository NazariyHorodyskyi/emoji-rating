const starsEl = document.querySelectorAll('.fa-star');
const emojisEl = document.querySelectorAll('.far');
const colors = ['red', 'orange', 'lightblue', 'lightgreen', 'green'];

emojisEl[0].style.color = 'red';

const toChooseRating = (event) => {
    const id = event.target.dataset.id;

    starsEl.forEach((starEl, index) => {
        if(index < +id + 1) {
            starEl.classList.add('active');
        } else {
            starEl.classList.remove('active');
        }
    });

    emojisEl.forEach(emojiEl => {
    
           emojiEl.style.transform = `translateX(${-id * 50}px)`;
           emojiEl.style.color = colors[id];
        
    });
}



