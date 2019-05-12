(()=>{
    let btnNext = document.querySelector('.slider__next');
    let btnPrev = document.querySelector('.slider__prev');

    let dots = document.querySelectorAll('.slider__dots');

    let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
    let left = 0;
    btnNext.addEventListener('click', ()=>{
        if (left <= -200){
            left = 0
            sliderItems.forEach((e)=>{
                e.style.left = left + '%'
            })
        } else {
            left = left - 100;
            sliderItems.forEach((e)=>{
            e.style.left = left + '%'
        })
        }
        
    })
    btnPrev.addEventListener('click', ()=>{
        if (left >= 0) {
            left = -300 + 100;
            sliderItems.forEach((e)=>{
                e.style.left = left + '%'
            })
        } else {
            left = left + 100;
            sliderItems.forEach((e)=>{
            e.style.left = left + '%'
        })
        }
        
    })

    // console.log(btnNext);
    // console.log(btnPrev);
    // console.log(dots);
    
})()