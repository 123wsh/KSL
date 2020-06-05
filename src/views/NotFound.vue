<template>
    <div class="notfound">
        <h1>404</h1>
        <h1>页面未找到</h1>
        <h1>{{n}}秒后自动返回首页</h1>
    </div>
</template>
<script>
export default {
    data(){
        return{
            n:5,
            timer:0
        }
    },
    mounted(){
        this.timer=setInterval(() => {
            this.n--;
            if(this.n==0){
                this.$router.push("/")
                clearInterval(this.timer)
            }
        }, 1000);
    }
}
</script>script  
<style>
 .notfound{
     width:500px;
     height: 500px;
     margin: 0 auto;
     margin-top: 200px;
 }
 h1{
     color: silver;

 }
</style>