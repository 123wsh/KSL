<template>
    <div class="bar">
        <ul class="ul01">
            <li>
                <div class="sousuo">
                     <img src="../assets/image/header/sousuo_white.png" >
                    <input type="text" placeholder="输入搜索内容按Enter确定" >
                </div>
            </li>
            <li>_</li>
            <li>
                <div class="user">
                    <a href="">
                     <img src="../assets/image/header/shouy_07.png">
                    </a>
                     <div class="d2">
                         个人中心
                     </div>
                </div>
            </li>
            <li>_</li>
            <li>
                <div class="heart">
                    <a href=""><img src="../assets/image/header/shouy_15.png">
                    </a>
                     <div class="d3">
                         我的收藏
                     </div>
                </div>
            </li>
            <li>_</li>
        </ul>
        <ul class="ul02">
            <li class="l1">
                <a href="http://www.jd.com" target="_blank">
                    <img src="../assets/image/header/shouye_17.png">
                </a>
                <div class="d4">
                    京东
                </div>
            </li>
            <li class="l2">
                <img src="../assets/image/header/shouye_21.png" >
                <img class="im2" src="../assets/image/header/155228818087724.jpg">
            </li>
            <li class="l3">
                <a href="#">
                <img src="../assets/image/header/shouye_31.png" >
                </a>
                <div class="d5">
                    回到顶部
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import imgsousuo2 from "../assets/image/header/sousuo_white.png"
import imgsousuo1 from "../assets/image/header/shouy_03.png"
import { log } from 'util';
export default {
  data() {
    return {
      imgsousuo:imgsousuo2,
    }
  },
  methods:{
      change(){
          this.imgsousuo=imgsousuo1;
      },
      change1(){
          this.imgsousuo=imgsousuo2
      }
  }
};
</script>



<style >
* {
  margin: 0;
  padding: 0;
}
.bar {
  width: 36px;
  height: 100%;
  background-color: #222222;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 9999;
}
.ul01 {
  list-style: none;
  margin-top: 380px;
}
.ul01 > li {
  margin-top: 13px;
  margin-left: 8px;
}
.sousuo > img {
  width: 80%;
}
.ul01 > li:nth-child(even) {
  width: 50%;
  height: 3px;
  border-bottom: 1px solid #fff;
}
.sousuo > input {
  position: absolute;
  top: 370px;
  right: -220px;
  width: 200px;
  height: 40px;
  padding-left: 10px;
  border: 1px solid #000;
  transition-property: right;
  transition-duration: 0.6s;
}
.sousuo:hover > input {
  right: 35px;
}
.d2,.d3{
    color: #fff;
    font-size: 6px;
    right: -30px;
    position: relative;
    top:-30px;
    background-color:#000;
    width: 77px;
    height: 35px;
    padding: 10px;
    padding-left: 15px;
    transition:right .3s linear;
}
.user:hover>div{
    right: 85px;
}
.heart:hover>div{
    right: 85px;
}
.user,.heart{
    margin-bottom: -40px;
}
.ul02{
    list-style: none;
    margin-top: 300px;

}
.ul02>li{
    margin-top: 15px;
    margin-left: 9px;
}
.d4,.d5{
    color: #fff;
    font-size: 6px;
    position: absolute;
    top:810px;
    right: -77px;
    background-color:#000;
    width: 53px;
    padding: 10px;
    padding-left: 15px;
    transition:right .3s linear;
}
.d5{
    top:870px !important;
}
.l1>div{
    text-align: center;
}
.l3:hover>.d5{
    right:35px;
}
.l1:hover>.d4{
    right:35px;
}
.im2{
    position: absolute;
    bottom: 0px;
    right: 40px;
    display: none;
}
.l2:hover>.im2{
    display:block;
}

</style>





