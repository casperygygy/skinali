(()=>{
    let catalogItems = document.querySelectorAll('.catalog__item');
    Array.from(catalogItems, (i)=>{
        i.addEventListener('click', (event) =>{
            event.preventDefault();
            // logic...
        })

        let favorite = i.querySelector('.button--favorites');

        favorite.addEventListener('click', ()=>{
            if (favorite.classList.contains('favorite')) {
                favorite.classList.remove('favorite')
            } else {
                favorite.classList.add('favorite')
            }
        })
    } )
})()
   