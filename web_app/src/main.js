import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import $ from 'jquery'
// import marked from 'marked'
//1.引入Vuex
import Vuex from 'vuex'
//开启状态管理器
//将vuex 挂在vue实例里面
//2.使用 Vuex
Vue.use(Vuex)
    //3.创建全局大仓库
    //const 常数
const store = new Vuex.Store({
    state: { //存数据
        notes: '',
        note: {
            id: "",
            title: "",
            content: "",
            date: ""
        }
    },
    mutations: { //修改数据  进化         
        //addnote(数据,载荷)
        //第二参数是回传
        addNote(state, note) {
            //push 放到数组的最后边
            //unshift 放到数组的最前边
            //pop删除数组的最后一项（不用传参数）
            //shifty移除数组的第一项（不用传参数）
            // state.notes.push(note);//最新的信息添加到页面的最前边
        //     axios.post('http://192.168.1.141:7428/api/comments', {
        //             id: 10,
        //             title: 'settitle',
        //             content: 'setcontent',
        //             date: new Date()
        //         },).then((response) => {
        //             console.log(response);
        //         })
        //         .catch(function(error) {
        //             console.log(error);
        //         });

        // },
         
           $.ajax({
	           	url:note.id =='' ? 'http://127.0.0.1:3300/users/add/':'http://127.0.0.1:3300/users/edit/'+note.id,
	           	type:"post",
	           	data:{
					title:note.title,
					content:note.content
	           	},
	           	success:function(data){
	           		console.log("进入成功模式");
	           		state.notes=data;
	           	},
				error:function(err){
					console.log(err);
				}
           }) 
			
        },
        seleceNote(state, note) {
            state.note = note
                // alert(state.note.title)
                // alert(state.note.content)
        }
    }
})
Vue.config.productionTip = false
    //4.实例对象的时候 注册这个大仓库

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})