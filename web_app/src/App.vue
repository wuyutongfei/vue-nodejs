<template>
    <div id="app">       
        <nav class="navbar navbar-default"> 
            <div class="container">
                <div class="container-fluid">
                    <div class="navbar-header">
                        <a class="navbar-brand" href="#">
                            <img alt="Brand" src="./assets/logo.png" height="30">
                        </a>
                    </div>
                    <!-- Collect the nav links, forms, and other content for toggling -->
                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav ula">
                            <!--  <li :class="{active:isActive}" @click="doSomething(1)"><router-link to="/">主页 </router-link></li>
                <li @click="doSomething(2)"><router-link to="/note">笔记</router-link></li>  v-bind:class="{active:isActive}"-->
                            <!-- <li class="active"><router-link to="/">首页</router-link></li> -->
                            <li v-for="(item,index) in items" @click="seleActive(index)" :class="{'active':isActive==index}" key="index">
                                <router-link :to="item.url">{{item.title}}</router-link>
                            </li>
                            <li><a href="https://wuyutongfei.github.io/" target="_blank">博客</a></li>
                        </ul>
                    </div>
                    <!-- /.navbar-collapse -->
                </div>
            </div>
            <!-- /.container-fluid -->
        </nav>

        <!--<Vbutton type="danger" @click="say">按钮</Vbutton>
    <Vbutton type="info" @click="saya">信息按钮</Vbutton>-->
        <!--这里会切换两个页面 主页和笔记页面-->
        <transition name="slide">
            <router-view></router-view>
        </transition>
    </div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.min.css'
import $ from 'jquery'
import Vbutton from './components/Vbutton'
import axios from 'axios'



export default {
    name: 'app',
    data() {
        return {
            isActive: 0,
            items: [{
                title: "首页",
                url: "/"
            }, {
                title: "笔记",
                url: "/note"
            }, {
                title: "关于笔记",
                url: "/making"
            }, {
                title: "联系",
                url: "/about"
            }]
        }
    },
    methods: {
        seleActive(index) {
            this.isActive = index
        }
    },
    computed: {

    },
    components: {
        Vbutton
    },
    mounted(){//生命周期 钩子函数
        //读取信息到页面
        axios.get('http://127.0.0.1:3300/users/shuju/')
          .then((response)=>{
              // console.log(response.data);
              this.$store.state.notes=response.data;
          })
          .catch(function(error) {
              console.log(error);
          });
    }
}
</script>
<style>
.active {
    color: red;
}

.unactive {
    color: #000;
}

.icon {
    float: right;
    font-size: 12px;
}

.slide-enter-active {
    /*进入等3秒钟*/
    transition: all .3s .3s ease;
}

.slide-leave-active {
    transition: all .3s ease;
}

.slide-enter {
    transform: translateY(-30px);
    opacity: 0;
}

.slide-leave-active {
    transition: all .5s ease;
    transform: translateY(30px);
    opacity: 0;
}
</style>
