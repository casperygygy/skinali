(()=>{
    let btnNext = document.querySelector('.slider__next');
    let btnPrev = document.querySelector('.slider__prev');

    let dots = document.querySelector('.slider__dots');

    let sliderItems = Array.from(document.querySelectorAll('.slider__item'));
    let left = 0;
    let current = 0;


    btnNext.addEventListener('click', ()=>{
        if (left <= -200 && current == 2){
            left = 0
            current = 0
            console.log(current)
            sliderItems.forEach((e)=>{
                e.style.left = left + '%'
            })
        } else {
            left = left - 100;
            current++
            console.log(current)
            sliderItems.forEach((e)=>{
            e.style.left = left + '%'
        })
        }
        for (let i = 0; i < sliderItems.length; i++) {
            dots.childNodes[i].classList.remove('slider__dot--active')
            dots.childNodes[current].classList.add('slider__dot--active')
            
        }
    })
    btnPrev.addEventListener('click', ()=>{
        if (left >= 0 && current == 0) {
            left = -300 + 100;
            current = 2
            console.log(current)
            sliderItems.forEach((e)=>{
                e.style.left = left + '%'
            })
        } else {
            left = left + 100;
            current--
            console.log(current)
            sliderItems.forEach((e)=>{
            e.style.left = left + '%'
        })
        }
        for (let i = 0; i < sliderItems.length; i++) {
            dots.childNodes[i].classList.remove('slider__dot--active')
            dots.childNodes[current].classList.add('slider__dot--active')
            
        }
    })
    
    dots.addEventListener('click', (e)=>{
        current = current;
        left = left
        if(event.target.tagName.toLowerCase() === 'a') {
            for (let i = 0; i < dots.childNodes.length; i++) {
                dots.childNodes[i].classList.remove('slider__dot--active')
                event.target.classList.add('slider__dot--active')                
            }
            if (event.target.dataset.name === '1') {
                left = 0
                current = 0
            
            } else if ( event.target.dataset.name === '2') {
                left = -100
                current = 1
            } else {
                left = - 200
                current = 2
            }
    
            sliderItems.forEach((e)=>{
                e.style.left = left + '%'
            })
           
        }
        
    })
})()