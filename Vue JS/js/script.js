const app = Vue.createApp({
    //data, functions
    // template: '<h2> I am the template</h2>'
    data(){
        return{
            url: 'https://www.thenetninja.co.uk',
            showBooks: true,
            // title: 'The Final Empire',
            // author: 'Brandon Sanderson',
            // age: 45,
            // x: 0,
            // y: 0

            books: [
                { title: 'name of the wind', author: 'patrick rothfuss', img: 'img/cutout.png'},
                { title: 'the way of kings', author: 'brandon sanderson', img: 'img/images.png'},
                { title: 'the final empire', author: 'brandon sanderson', img: 'img/download.png'}
            ]

        }
    },
    methods: {
        toggleShowBooks() {
        this.showBooks = !this.showBooks;
        },
        // handleEvent(e, data) {
        //     console.log(e, e.type);
        //     if (data) {
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e) {
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    }
});

app.mount('#app')