
<template>
  <div class="header">
    <div>
      <div>
        <img src="../assets/image/header/top.png">
      </div>
      <div>
        <div class="top_logo">
          <img src="../assets/image/header/logo.png">
          <span>
            <a href="#">订阅品牌咨询</a>
          </span>
          <span>
            <a href="#">登录/</a>
            <a href="#">注册</a>
          </span>
        </div>
        <div class="nav_ul">
          <ul>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">活动专题</a><img src="../assets/image/header/19_05.png">
              <ul>
                <li>
                  <a href="">线上活动</a>
                </li>
                <li>
                  <a href="">线下活动</a>
                </li>
              </ul>
            </li>
            <li id="long_li">
              <a href="#">全线产品</a><img src="../assets/image/header/19_05.png">
              <ul>
                <li>
                  <a href="">妍展青春系列</a>
                </li>
                <li>
                  <a href="">香薰海藻身体系列</a>
                </li>
                <li>
                  <a href="">新生焕采系列</a>
                </li>
                <li>
                  <a href="">男士护肤系列</a>
                </li>
                <li>
                  <a href="">特效抗皱系列</a>
                </li>
                <li>
                  <a href="">明星修护系列</a>
                </li>
                <li>
                  <a href="">防晒系列</a>
                </li>
                <li>
                  <a href="">凝时极效塑颜系列</a>
                </li>
                <li>
                  <a href="">晶莹眼眸系列</a>
                </li>
                <li>
                  <a href="">时光逆转鱼子系列</a>
                </li>
                <li>
                  <a href="">清爽净肤系列</a>
                </li>
                <li>
                  <a href="">妍亮丽护肤化妆系列</a>
                </li>
                <li>
                  <a href="">柔肌防敏感系列</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">明星单品</a><img src="../assets/image/header/19_05.png">
            </li>
            <li>
              <a href="#">独家套装</a><img src="../assets/image/header/19_05.png">
            </li>
            <li>
              <a href="#">品牌故事</a><img src="../assets/image/header/19_05.png">
              <ul>
                <li>
                  <a href="">品牌历程</a>
                </li>
                <li>
                  <a href="">品牌荣誉</a>
                </li>
                <li>
                  <a href="">销售网络</a>
                </li>
                <li>
                  <a href="">顾客信赖</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">魅力课堂</a><img src="../assets/image/header/19_05.png">
              <ul>
                <li>
                  <a href="">微视频</a>
                </li>
                <li>
                  <a href="">成分词典</a>
                </li>
                <li>
                  <a href="">护肤须知</a>
                </li>
                <li>
                  <a href="">特别报导</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="search">
            <input type="text" placeholder="输入搜索内容按Enter确定">
            <button>
              <img src="../assets/image/header/shouy_03.png">
            </button>
          </div>
        </div>
      </div>
    </div>
   
  </div>

</template>
  
<style scoped>
*{
  margin:0;
  padding:0;
  outline:none;
  box-sizing: border-box;
}
/* 头部通用样式 */
/* LOGO */
.header{
  z-index: 999;
}
.header>div{
  background-color: #111111;
  height: 138px;
  padding-top: 10px;
  display: flex;
}
.header>div::before{
  display: table;
  content: none;
}
.header>div>div:first-child{
  margin-left: 227px;
  margin-top: 3px;
}
.top_logo>img{
  padding-left: 559px;
  margin-top: 15px;
}
.top_logo>span{
  position: relative;
  left:364px;
  top:-24px;
  display:inline-block;
  border: 1px solid #fff;
  padding: 0px 10px;
  padding-bottom: 2px;
}
.top_logo>span>a{
  text-decoration: none;
  color:#fff;
  font-size: 12px;
  padding: 0px 0px;
}
/* 顶部导航栏 */
.nav_ul{
  display:flex;
}
.nav_ul>ul{
  display: flex;
  list-style: none;
  margin-left: 65px;
  margin-top: 20px;
}
.nav_ul>ul>li{
  margin-right: 58px;
  position: relative;
}
.nav_ul>ul>li>a{
  color: #999;
  text-decoration: none;
  font-size: 14px;
  transition: color 0.5s linear;
}
.nav_ul>ul>li>a:hover{
  color: #fff;
}
.nav_ul>ul>li>ul{
  display: none;
  width: 110px;
  position: absolute;
  top:20px;
  left: -25px;
}
.nav_ul>ul>li>ul{
  border-top: 10px solid #111;
}
.nav_ul>ul>li:hover>ul{
  display: block;
  background-color: #fff;
  z-index:999;
}
/* 二级下拉li样式  */
.nav_ul>ul>li>ul>li{
  list-style: none;
  margin: 10px 25px 10px 25px;
}
.nav_ul>ul>li>ul>li>a{
  text-decoration: none;
  color: #999;
  font-size: 14px;
  transition: color 0.3s linear;

}
.nav_ul>ul>li>ul>li>a:hover{
  color:#111;
}
/* 横向显示的下拉菜单 */
#long_li>ul{
  width: 380px;
}
#long_li>ul>li{
  float: left;
}
#long_li>ul>li:nth-child(odd){
  width: 140px;
}


/* 登录/注册 */
.search{
  margin-top: 12px;
  margin-left: 40px;
}
.search>input{
  width: 280px;
  height: 28px;
  padding-left: 10px;
  border-top: 0px;
  border-left: 0;
  border-right: 0
}
.search>button{
  border: 0;
  background-color: #fff;
  position: absolute;
  height: 28px;
  width: 28px;
  top: 100px;
}
</style>
  

