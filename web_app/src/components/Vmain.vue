<template>
<!-- 页面组件当容器用的 -->
<div class="container-fluid bjt">
	<div class="row">
		<div class="wpb_wrapper">
			<p>
				<span class="span1">Vue+Node.js</span>
			</p>
		</div>
		<div class="wpb_wrapper">
			<p>
				<span class="span2">让开发更简单</span>
			</p>
		</div>
	</div>
</div>
</template>
<script>
//引入 axios
export default{//抛出最普通的对象
  //需要的属性
  name:"Vmain",
  data(){
  	return{

  	}
  },
  mounted:function(){//组件载入  钩子 生命周期
	// axios.get('url',{}).then(function(response){}).catch(function(error){})
	axios.get('url',{})
	.then((response)=>{
		response.data
	})
	.catch((error)=>{
		console.log(err)
	})
  },
  methods:{},
  computed:{},
  components:{},
  props:{}
}
</script>

<style>
.bjt{
background-image: url('../assets/bj.png'); 
background-repeat:no-repeat; 
background-size:cover; 
background-attachment:scroll; 
background-position:0 0%;
padding-top:10%;
padding-bottom: 20%;
}
.wpb_wrapper p{
text-align: center
}
.wpb_wrapper p .span1{
	color:#A9A9A9;
	font-size: 28px;
	font-family: arial;
	letter-spacing: 1px;
}
.wpb_wrapper p .span2{
	color:#696969;
	font-family: 微軟正黑體;
	font-size: 48px;
	letter-spacing: 1px;
}
</style>
