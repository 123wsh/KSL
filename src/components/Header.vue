
<template>
  <div class="header">
    <div>
      <div>
        <img src="../assets/image/header/top.png" />
      </div>
      <div>
        <div class="top_logo">
          <img src="../assets/image/header/logo.png" />
          <span>
            <a href="#">订阅品牌咨询</a>
          </span>
          <span v-if="isLogin==false">
            <a href="#" @click="open">登录/</a>
            <a href="#" @click="dozhuce">注册</a>
          </span>
          <span v-else>
            <span class="zhuxiao">
              个人中心
              <button @click="zhuxiao">注销</button>
            </span>
          </span>
        </div>
        <div class="nav_ul">
          <ul>
            <li>
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">活动专题</a>
              <img src="../assets/image/header/19_05.png" />
              <ul>
                <li>
                  <a href>线上活动</a>
                </li>
                <li>
                  <a href>线下活动</a>
                </li>
              </ul>
            </li>
            <li id="long_li">
              <a href="#">全线产品</a>
              <img src="../assets/image/header/19_05.png" />
              <ul>
                <li>
                  <a href>妍展青春系列</a>
                </li>
                <li>
                  <a href>香薰海藻身体系列</a>
                </li>
                <li>
                  <a href>新生焕采系列</a>
                </li>
                <li>
                  <a href>男士护肤系列</a>
                </li>
                <li>
                  <a href>特效抗皱系列</a>
                </li>
                <li>
                  <a href>明星修护系列</a>
                </li>
                <li>
                  <a href>防晒系列</a>
                </li>
                <li>
                  <a href>凝时极效塑颜系列</a>
                </li>
                <li>
                  <a href>晶莹眼眸系列</a>
                </li>
                <li>
                  <a href>时光逆转鱼子系列</a>
                </li>
                <li>
                  <a href>清爽净肤系列</a>
                </li>
                <li>
                  <a href>妍亮丽护肤化妆系列</a>
                </li>
                <li>
                  <a href>柔肌防敏感系列</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">明星单品</a>
              <img src="../assets/image/header/19_05.png" />
            </li>
            <li>
              <a href="#">独家套装</a>
              <img src="../assets/image/header/19_05.png" />
            </li>
            <li>
              <a href="#">品牌故事</a>
              <img src="../assets/image/header/19_05.png" />
              <ul>
                <li>
                  <a href>品牌历程</a>
                </li>
                <li>
                  <a href>品牌荣誉</a>
                </li>
                <li>
                  <a href>销售网络</a>
                </li>
                <li>
                  <a href>顾客信赖</a>
                </li>
              </ul>
            </li>
            <li>
              <a href="#">魅力课堂</a>
              <img src="../assets/image/header/19_05.png" />
              <ul>
                <li>
                  <a href>微视频</a>
                </li>
                <li>
                  <a href>成分词典</a>
                </li>
                <li>
                  <a href>护肤须知</a>
                </li>
                <li>
                  <a href>特别报导</a>
                </li>
              </ul>
            </li>
          </ul>
          <div class="search">
            <input type="text" placeholder="输入搜索内容按Enter确定" v-model="searchContent" />
            <button>
              <img src="../assets/image/header/shouy_03.png" />
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- 登录模块 -->
    <div class="login" v-show="logindisplay">
      <div>
        <img src="../assets/image/header/logo1.png" alt />
      </div>
      <div>登录</div>
      <div>
        <input type="text" placeholder="用户名称" v-model="username" />
      </div>
      <div>
        <input type="password" placeholder="登录密码" v-model="password" />
      </div>
      <div>
        <input type="checkbox" v-model="autologin" class="ch" />
        <span>自动登录</span>
        <span>忘记密码？</span>
      </div>
      <div>
        <button @click="login">确定</button>
      </div>
      <div>
        <a href>
          <img src="../assets/image/header/2_18.png" alt />
          <p>QQ登录</p>
        </a>
        <a href>
          <img src="../assets/image/header/2_15.png" alt />
          <p>微信登录</p>
        </a>
      </div>
      <div>
        <span>还没有账号？</span>
        <a href>立即注册</a>
      </div>
      <a @click="shut">×</a>
    </div>

    <!-- 注册模块 -->
    <div class="zhuce" v-show="zhuce">
      <div>
        <button @click="shutzhuce">关闭</button>
      </div>
      <div>
        <input type="text" placeholder="用户名6-12位" v-model="username" />
        <span>{{usernamecontent}}</span>
      </div>
      <div>
        <input type="password" placeholder="密码6-12包含字母，数字" v-model="password" />
        <span>{{passwordcontent}}</span>
      </div>
      <div>
        <input type="password" placeholder="确认密码" v-model="password2" />
        <span>{{issame}}</span>
      </div>
      <div>
        <input v-model="tongyi" type="checkbox" />我同意条款
      </div>
      <div>
        <button @click="register">注册</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isLogin: false,
      logindisplay: false,
      searchContent: "",
      autologin: "",
      zhuce: false,
      tongyi: false,
      username: "",
      password: "",
      time: null,
      time1: null,
      usernamecontent: "×",
      passwordcontent: "×",
      password2: "",
      issame: "×",
      register1: false,
      register2: false,
      register3: false,
      register0: false
    };
  },
  methods: {
    shut() {
      this.logindisplay = false;
    },
    open() {
      this.logindisplay = true;
    },
    zhuxiao() {
     let a=confirm("确定要注销吗？")
      a?this.isLogin=false:"";
    },
    dozhuce() {
      this.zhuce = true;
    },
    shutzhuce() {
      this.zhuce = false;
    },
    register() {
      if (
        this.register1 == true &&
        this.register2 == true &&
        this.register3 == true
      ) {
        this.axios
          .post(
            "/register?",
            "uname=" + this.username + "&upwd=" + this.password
          )
          .then(res => {
            let code = res.data.code;
            if (code == 1) {
              alert("注册成功");
              this.logindisplay = false;
            }
          });
      } else {
        alert("格式不正确");
      }
    },
    login() {
      if (this.username !== "") {
        this.axios
          .post("/login?", "uname=" + this.username + "&upwd=" + this.password)
          .then(res => {
            let code = res.data.code;
            if (code == 1) {
              alert("登录成功");
              this.logindisplay = false;
              this.username = "";
              this.password = "";
              this.isLogin=true
            }
          });
      } else {
        alert("用户名或密码错误");
        console.log(this.username, this.password);
        this.username = "";
        this.password = "";
      }
    }
  },
  watch: {
    username() {
      let reg = /^[a-zA-Z0-9]{6,12}$/;
      clearTimeout(this.time);
      this.time = setTimeout(() => {
        let a = reg.test(this.username);
        this.usernamecontent = "×";
        if (a !== "") {
          if (a) {
            this.usernamecontent = "√";
            this.register1 = true;
          } else {
            this.usernamecontent = "×";
          }
        } else {
          this.usernamecontent = "×";
        }
      }, 300);
    },
    password() {
      let reg = /^[a-zA-Z0-9]{6,12}$/;
      clearTimeout(this.time1);
      this.time1 = setTimeout(() => {
        let a = reg.test(this.password);
        if (a !== "") {
          if (a) {
            this.passwordcontent = "√";
            this.register2 = true;
          } else {
            this.passwordcontent = "×";
          }
        } else {
          this.passwordcontent = "×";
        }
      }, 300);
    },
    password2() {
      if (this.password2 == this.password) {
        this.issame = "√";
        this.register3 = true;
      } else {
        this.issame = "×";
      }
    }
  },
  mounted() {}
};
</script>
  
<style>
@import "header.css";
</style>
  

