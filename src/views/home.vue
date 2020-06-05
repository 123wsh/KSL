
<template>
  <div>
    

    <div class="div01">
      <div v-swiper:mySwiper="swiperOption">
        <div class="swiper-wrapper">
          <div class="swiper-slide" :key="index" v-for="(banner,index) in banners">
            <img class="img01" :src="banner" />
          </div>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>

    <div class="daziti">护理理念</div>
    <div class="test">
      <div class="d55">
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
        <img src="../assets/image/home/154468556623728.png" />
        <div>
          <span>线上活动</span>
          <span>MORE></span>
        </div>
      </div>
      <div class="d82">
        <img src="../assets/image/home/15446855928500.png" />
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
      banners: [
        require("../assets/image/157537903021809.jpg"),
        require("../assets/image/timg1.jpg"),
        require("../assets/image/timg2.jpg"),
        require("../assets/image/timg.jpg"),
      ],
      swiperOption: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        autoplay: {
          delay: 2000
        },
        
      }
    };
  },
  computed: {},
  mounted() {}
};
</script>
<style >
  @import "home.css"
</style>
