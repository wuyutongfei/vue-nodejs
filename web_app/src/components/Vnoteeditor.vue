<template>
	<div class="row">
    <div class="col-md-8">   
      <input type="text" class="form-control mb15" placeholder="无标题笔记" v-model="settitle"/>
      <div class="none"> {{tit}}</div>
      <input type="hidden" v-model="bj_id">
      <div class="none"> {{id}}</div>
    </div>
    <div class="col-md-4"> 
      <Vbutton type="info" class="rig" @click="addNote(bj_id)">保存笔记</Vbutton> <Vbutton type="success" class="rig" @click="newFile">新建笔记</Vbutton>
    </div> 
    <div class="col-md-6">      
      <textarea class="form-control style-1" rows="3" v-model="setcontent"></textarea>
      <div class="none">{{ text }}</div><!--隐藏域-->
    </div> 
    <div class="col-md-6">
      <div class="bord pre-scrollable force-overflow style-1" v-html="domarked"></div> 
    </div>      
  </div>  
</template>
<script>
import marked from 'marked'
import Vbutton from './Vbutton'
import axios from 'axios'
var date=new Date();
var M=date.getMonth()+1<10 ? '0'+(date.getMonth()+1):date.getMonth()+1;
export default{//抛出最普通的对象
  //需要的属性
  name:"Vnoteeditor",
  data(){
  	return{
      bj_id:"",
      settitle:"",
      setcontent:""
  	}
  },
  methods:{
    //新建笔记文件
    newFile(){
      this.settitle = "";
      this.setcontent = "";
    },   
    //保存笔记文件
    addNote(bj_id){      
        alert("保存数据"+bj_id);
         //这里显示数据库页面动态添加缓存的信息 到模板  提交申请的方式提交内容
        this.$store.commit('addNote',{
              id: this.bj_id,
              title: this.settitle,
              content: this.setcontent,
              date: date.getFullYear()+"-"+M+"-"+date.getDate()
          })    
      }
  },
  computed:{
    //marked 获取值   
    domarked(){     
      return marked(this.setcontent)
    },
    //标题 获取隐藏域里面的值 赋给input
    tit(){       
      this.settitle = this.$store.state.note.title;
      return this.$store.state.note.title;
    },
    //内容 获取隐藏域里面的值 赋给textarea 双向绑定 会导致接收值出问题 所以我们要做一个隐藏域 来承载里面得数据 在进行触发textarea 里面绑定的值
    text(){  
        this.setcontent = this.$store.state.note.content;
        return this.$store.state.note.content;       
    },
    id(){
        this.bj_id = this.$store.state.note.id;
        return this.$store.state.note.id;  
    }
  },
  components:{
    //button 注册标签
     Vbutton
  },
  props:{}
}
</script>
<style scoped>
.none{
  display: none;
}
.mb15{
  margin-bottom: 15px;
}
textarea{
  height: 360px;
}
.rig{
    margin-left: 10px;
  
}
.bord{
    width: 100%;
    height: 360px;
    padding: 6px 12px;
    font-size: 14px;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    overflow:auto;
    overflow-x: hidden;

}
.force-overflow,.pre-scrollable
{
  height: 360px;
  max-height:360px;
}

.style-1::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

.style-1::-webkit-scrollbar
{
  width: 8px;
  background-color: #F5F5F5;
}

.style-1::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #d0cfcf;
}
</style>
