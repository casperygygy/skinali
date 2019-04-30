class Dropdown {
    constructor(el, list) {
        this.list = document.querySelector(list);
        this.$el = document.querySelector(el);
        this.$el.addEventListener('click', () =>{
            if( this.$el.classList.contains('open')) {
                this.close()
            } else {
                this.open()
            }
        })
        this.$el.addEventListener('click', (event) =>{
            if (event.target.tagName.toLowerCase() === 'li') {
                let textField= this.$el.querySelector('.dropdown__textfield')
                const textHtml = event.target.textContent
                textField.innerHTML = ''
                textField.insertAdjacentHTML('afterbegin', textHtml)
            }
        })
    }

    open() {
        this.$el.classList.add('open')
    }

    close() {
        this.$el.classList.remove('open')
    }

}



const dropdown = new Dropdown('#dropdown','#list')
