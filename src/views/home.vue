
<template>
  <div>
    <div>
      <my-header></my-header>
    </div>
    <div>
      <right-bar></right-bar>
    </div>
    

    <div class="div01">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide>
          <img src="../assets/image/157537903021809.jpg" class="img01" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/157537903021809.jpg" class="img01" />
        </swiper-slide>
        <swiper-slide>
          <img src="../assets/image/157537903021809.jpg" class="img01" />
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>

    <div class="daziti">护理理念</div>
    <div class="test">
      <div class="d5">
        <div class="sangetu">
          <div class="dd1">skin·肌肤</div>
          <div class="dd2">MORE></div>
          <img src="../assets/image/home/154468676739225.png" />
        </div>
        <div class="sangetu">
          <div class="dd1">science·科学</div>
          <div class="dd2">MORE></div>
          <img src="../assets/image/home/154468679372106.png" />
        </div>
        <div class="sangetu">
          <div class="dd1">senses·感官</div>
          <div class="dd2">MORE></div>
          <img src="../assets/image/home/154468685121268.png" />
        </div>
      </div>
    </div>
    <div class="daziti">精品推荐</div>
    <div class="d6">
      <img src="../assets/image/home/157537898637840.jpg" />
    </div>
    <div class="d7">
      <div class="d71">
        <img src="../assets/image/home/154468463618714.png" />
      </div>
      <div class="d72">
        <div class="xiaosan1">
          <img src="../assets/image/home/15457938702838.png" />
          <div class="xiao1">修护菁华肌底液</div>
          <div class="xiao2">修护菁华肌底液</div>
          <div class="xiao3">¥ 1085.00</div>
          <div class="xiao4">立即购买></div>
        </div>
        <div class="xiaosan2">
          <img src="../assets/image/home/154573324140467.png" />
          <div class="xiao1">美肌补湿抗皱霜</div>
          <div class="xiao2">美肌补湿抗皱霜</div>
          <div class="xiao3">¥ 954.00</div>
          <div class="xiao4">立即购买></div>
        </div>
        <div class="xiaosan3">
          <img src="../assets/image/home/154648636198633.jpg" />
          <div class="xiao1">青春美肌霜</div>
          <div class="xiao2">青春美肌霜</div>
          <div class="xiao3">¥ 793.00</div>
          <div class="xiao4">立即购买></div>
        </div>
      </div>
    </div>
    <div class="daziti">超值活动</div>
    <div class="d8">
      <div class="d81">
        <img src="../assets/image/home/154468556623728.png">
        <div>
          <span>线上活动</span>
          <span>MORE></span>
        </div>
      </div>
      <div class="d82">
        <img src="../assets/image/home/15446855928500.png">
        <div>
          <span>线下活动</span>
          <span>MORE></span>
        </div>
      </div>
    </div>
    <div class="daziti">热门评论</div>

    <div>
      <footer-bar></footer-bar>
    </div>
  </div>
</template>
<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import "swiper/css/swiper.css";

export default {
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  },
  name: "carrousel",
  data() {
    return {
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination"
        }
      },
    };
  },
  computed: {},
  mounted() {}
};
</script>

<style >
.img01 {
  height: 600px;
}
.daziti {
  text-align: center;
  font-size: 30px;
  color: #000000;
  margin: 40px 0px;
}
.d5 {
  display: flex;
  padding-left: 320px;
}
.sangetu {
  margin: 0px 20px;
  position: relative;
  cursor: pointer;
  overflow: hidden;
  width: 380px;
  height: 280px;
}
.sangetu > div {
  position: absolute;
}
.dd1 {
  top: 110px;
  left: 125px;
  color: #fff;
  font-weight: bold;
  font-size: 1.5rem;
  z-index: 999;
}
.dd2 {
  top: 150px;
  left: 142px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 0.5rem;
  padding: 8px 22px;
  z-index: 999;
}
.sangetu:hover > .dd2 {
  background-color: #fff;
  color: #000000;
}
.sangetu > img {
  overflow: hidden;
  transition: 0.6s;
}
.sangetu:hover > img {
  transform: scale(1.1);
}
.d6 > img {
  width: 65%;
  margin: 0 auto;
  padding-left: 330px;
}
.d7 {
  width: 1200px;
  height: 534px;
  margin: 20px auto;
  display: flex;
}
.d71 > img {
  width: 441px;
  height: 504px;
  transition: 0.6s;
}
.d71:hover > img {
  transform: scale(1.1);
  cursor: pointer;
}
.d72 {
  display: flex;
  margin: 20px 30px;
  position: relative;
}
.d72 img {
  width: 250px;
}
.xiaosan1,
.xiaosan2,
.xiaosan3 {
  position: relative;
}
.xiao1,
.xiao2,
.xiao3,
.xiao4 {
  position: absolute;
  left: 80px;
  cursor: pointer;
}
.xiao1 {
  top: 260px;
  font-size: 18px;
  color: #8677b3;
  font-weight: bold;
  left: 68px;
}
.xiao2 {
  top: 290px;
  font-size: 14px;
}
.xiao3 {
  top: 310px;
  font-size: 14px;
  left: 90px;
}
.xiao4 {
  top: 360px;
  color: #333333;
  font-size: 12px;
  border: 1px solid #000000;
  padding: 10px 20px;
  transition-property: color background-color;
  transition-duration: 0.6s;
}
.xiaosan1:hover > .xiao1 {
  color: #f3ae00;
}
.xiaosan2:hover > .xiao1 {
  color: #f3ae00;
}
.xiaosan3:hover > .xiao1 {
  color: #f3ae00;
}

.d72 img {
  transition: 0.5s;
}
.xiaosan1:hover > img {
  transform: scale(1.1);
}
.xiaosan2:hover > img {
  transform: scale(1.1);
}
.xiaosan3:hover > img {
  transform: scale(1.1);
}
.xiaosan1:hover > .xiao4 {
  color: #fff;
  background-color: #000;
}
.xiaosan2:hover > .xiao4 {
  color: #fff;
  background-color: #000;
}
.xiaosan3:hover > .xiao4 {
  color: #fff;
  background-color: #000;
}
.d8{
  display: flex;
  width: 1200px;
  margin: 0 auto;
  cursor: pointer;
}
.d81{
  margin: 10px;
  overflow: hidden;
  width: 593px;
  height: 369px;
  position: relative;
}
.d82{
  margin: 10px;
  overflow: hidden;
  width: 593px;
  height: 369px;
  position: relative;
}
.d81>div,.d82>div{
  position: absolute;
  top:310px;
  background-color: #eee;
  width: 590px;
  height: 30px;
  line-height: 30px;
  padding: 10px;
  font-size: 14px;
  color: #333333;
}
.d81>div>span:nth-child(2),.d82>div>span:nth-child(2){
  padding-left: 450px;
}
.d81>img,.d82>img{
  width: 100%;
  transition:0.6s;
}
.d81:hover>img,.d82:hover>img{
  transform: scale(1.1);
}

</style>