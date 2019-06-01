<template>
    <div>
        <h1>{{msg}}</h1>
        <hihi></hihi>
    </div>
</template>

<script>
import hihi from './components/hihi.vue'
export default {
    data(){
        return{
            msg: process.env.NODE_ENV==='production' ? 'webpack加vuelksadjfladsjflkjdsafasdf':'我的地'
        }
    },
    components:{
        hihi
    }
}
</script>

<style>

</style>


