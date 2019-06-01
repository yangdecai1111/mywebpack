import Vue from 'vue'
import App from './App.vue'
new Vue({
    el:'#app',
    // data:{
    //     msg:'hello world'
    // },
    // template:`
    //     <div>
    //         <p>{{msg}}</p>
    //     </div>
    // `
    // render(createElement){
    //     return createElement('div',[createElement('h1',[createElement('span','呼呼')])])
    // }
    template:`
        <App />
    `,
    components:{
        App:App
    }
})