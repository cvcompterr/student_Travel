<template>
  <div class="login">
    <div class="loginContain">
      <h1 class="loginHeader">登录</h1>
      <form action="#">
        <div class="userName">
          <input
            class="userInput"
            type="text"
            v-model.trim="LoginData.username"
            placeholder="用户名"
          />
          <p style="visibility: hidden">用户名为必填选项</p>
        </div>

        <div class="password">
          <input
            class="PasswordInput"
            type="password"
            v-model.trim="LoginData.password"
            placeholder="密码"
          />
          <p style="visibility: hidden">密码为必填选项</p>
        </div>
        <div class="LoginBottom">
          <input
            type="submit"
            @click="Tologin"
            value="立即登录"
            class="BtnToLogin"
          />
          <button @click="ToRegister" class="Toregister">去注册</button>
        </div>
      </form>
      <form action="#">
        <div>
          <input
            type="text"
            placeholder="用户名"
            v-model.trim="registerData.username"
            class="registerName"
          />
          <input
            type="text"
            placeholder="密码"
            v-model.trim="registerData.password"
            class="registerPassword"
          />
          <input
            type="text"
            placeholder="确认密码"
            v-model="registerData.repassword"
          />
          <button @click="ToResister">注册</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from "axios";
import qs from "qs";
import router from "@/router/index.js";
const LoginData = {
  username: "",
  password: "",
};
const registerData = {
  username: "",
  password: "",
  repassword: "",
  telephone: "",
  emial: "",
};
const Tologin = function (e) {
  e.preventDefault(); //阻止默认事件  登录后直接跳转
  if (LoginData.username != "" && LoginData.password != "") {
    axios({
      url: "http://127.0.0.1:7220/api/login",
      method: "get",
      params: {
        username: LoginData.username,
        password: LoginData.password,
      },
    }).then((res) => {
      console.log(res.data);
      router.push("/mainpage");
    });
  } else {
    alert("用户名或密码不能为空");
  }
};
const ToResister = function (e) {
  e.preventDefault();
  if (registerData.username === "" || registerData.password === "") {
    alert("账号或密码不能为空");
  } else if (registerData.password !== registerData.repassword) {
    alert("两次输入密码不一致");
  } else {
    axios
      .post("http://127.0.0.1:7220/api/register", {
        username: qs.stringify(registerData.username),
        password: qs.stringify(registerData.password),
        telephone: qs.stringify(registerData.telephone),
      })
      .then(function (res) {
        console.log(res);
        if (res.data.status === 0) {
          alert("账号已存在");
        } else if (res.status === 1) {
          router.push("/mainpage");
        } else if (res.status === 2) {
          alert("账号密码不能为空");
        } else {
          alert("注册失败");
        }
      })
      .catch((err) => {
        alert("注册异常");
      });
  }
};
</script>

<style>
.login {
  width: 100%;
  height: 100%;
  position: relative;
}
.loginContain {
  height: 310px;
  width: 400px;
  border: 3px solid black;
  position: absolute;
  top: 200px;
  left: 600px;
}
.loginHeader {
  margin-top: 10px;
  font-size: 35px;
  text-align: center;
}
.userInput {
  height: 30px;
  width: 250px;
  margin: 30px 68px;
  outline: none;
  border: none;
  padding: 10px;
  border-bottom: 1px solid;
  background: transparent;
}
.PasswordInput {
  height: 30px;
  width: 250px;
  margin: 15px 68px;
  outline: none;
  border: none;
  padding: 10px;
  border-bottom: 1px solid;
  background: transparent;
}
.BtnToLogin {
  width: 100px;
  background-color: pink;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  margin: 10px 60px;
  cursor: pointer;
  transition: 0.5s;
}

.Toregister {
  width: 100px;
  background-color: pink;
  border: none;
  outline: none;
  height: 40px;
  border-radius: 49px;
  color: #fff;
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
  margin-left: 10px;
  transition: 0.5s;
}
</style>