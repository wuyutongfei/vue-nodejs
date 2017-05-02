
<template>
  <li class="list-group-item">
		<h4 @click="seleceNote">{{this.note.title}}</h4>
    <p>{{this.note.date}} <a href="javascript:void(0)" @click="del(note.id)"><img alt="删除" src="../assets/del.png"/></a> </p>
	</li>
</template>
<script>
import axios from 'axios'
export default{//抛出最普通的对象
  //需要的属性
  name:"Vonteitem",
  data(){//状态
  	return{

  	}
  },
  methods:{
    seleceNote(){
      // title=this.note.title;
      this.$store.commit('seleceNote',this.note)
    },
    //删除笔记
    del(id){
      // alert(id);
      axios.post('http://127.0.0.1:3300/users/del/'+id)
        .then((response)=> {
            console.log("删除成功");   
            console.log(response.data);   
            this.$store.state.notes=response.data;     
        })
        .catch(function(error) {
            console.log(error);
        });
    }
  },
  computed:{},
  components:{},
  props:{
    note:Object
  }
}
</script>

<style scoped >
/* scoped 作用域*/
h4{
  padding: 0;
  margin: 0;
  font-size: 14px;
  height: 20px;
  line-height: 20px;
  overflow: hidden;
  color: #666;
  }
p{
   padding: 0;
  margin: 0;
 text-align: right;
 font-size: 12px;
 color: #999;
}
p a{
  display: inline-block;
  padding: 0 5px;
}
li{
  padding: 5px 0 5px 15px;
}
li:hover{
  cursor: pointer;
  background: #ccc;
  
}
</style>