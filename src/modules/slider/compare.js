class Compare {
    constructor (el) {
        let is_active = false;
        this.$el = document.querySelector(el);
        this.control = this.$el.querySelector('#slider__control');
        this.afterImage = this.$el.querySelector('#slider__after');
        this.$el.addEventListener('mousemove', (event) => {

            if(event.target.className === 'slider__image') {
                let x = event.offsetX;
                event.preventDefault()
                this.control.addEventListener('mousedown', ()=>{
                    event.preventDefault()
                    is_active = true;
                })
                this.$el.addEventListener('mouseup', ()=>{
                    is_active = false;
                })
        
                if ( is_active === true ) {
                    this.afterImage.style.width = x + 'px'
                    this.control.style.left = this.afterImage.style.width
                }
            }
        })
    }
}

const compare = new Compare('#slider__item')
const compare2 = new Compare('#slider__item__2')
const compare3 = new Compare('#slider__item__3')

