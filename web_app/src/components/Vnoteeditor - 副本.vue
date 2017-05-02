<template>
	<div class="row">
    <div class="col-md-8">   
      <input type="text" class="form-control mb15" placeholder="无标题笔记" v-model="settitle"/>
    </div>
    <div class="col-md-4"> 
      <Vbutton type="info" class="rig" @click="addNote">保存笔记</Vbutton> <Vbutton type="success" class="rig">新建笔记</Vbutton>
    </div> 
    <div class="col-md-6">      
      <textarea class="form-control style-1" rows="3" v-model="setcontent"></textarea>
    </div> 
    <div class="col-md-6">
      <div class="bord pre-scrollable force-overflow style-1" v-html="domarked"></div> 
      </div>
  </div>
</template>

<script>
import marked from 'marked'
import Vbutton from './Vbutton'
var date=new Date();
var M=date.getMonth()+1<10 ? '0'+(date.getMonth()+1):date.getMonth()+1;
export default{//抛出最普通的对象
  //需要的属性
  name:"Vnoteeditor",
  data(){
  	return{
      // text:"",
      // title:""
      setcontent:""
  	}
  },
  methods:{
    addNote(){
        alert("保存数据");
        this.$store.commit('addNote', {
                id: 10,
                title: this.title,
                content: this.text,
                date: date.getFullYear()+"-"+M+"-"+date.getDate()
            })
      }
  },
  computed:{
    //marked 获取值
    domarked(){
      // return marked(this.$store.state.note.content)
      return marked(this.setcontent)
    },
    //标题获取值
    settitle:{
      get(){//获取后台的值
        return this.$store.state.note.title;
      },
      set(newval){//赋值 newval就是后台传过来的this.$store.state.note.title值， 将传过来的值 直接赋给了当前实时变化的settitle这个绑定值
       // this.title=newval
       newval
      }
      
    },
    //内容获取值
    setcontent:{
       get(){
        return this.$store.state.note.content;
      },
      set(newval){
        newval
      }
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
.mb15{
  margin-bottom: 15px;
}
textarea{
  height: 430px;
}
.rig{
    margin-left: 10px;
  
}
.bord{
    width: 100%;
    height: 430px;
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
  height: 430px;
  max-height:430px;
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
