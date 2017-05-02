<template>
	<button class="btn" :class="btnType" @click="clickHandler">
    <slot>按钮</slot>
  </button>
</template>

<script>
export default{//抛出最普通的对象
  //需要的属性
  name:"Vbutton",
  data(){
  	return{

  	}
  },
  methods:{
    clickHandler(){
      this.$emit('click');//设置触发事件
    }
  },
  computed:{//计算属性
    btnType(){
      return{//设置字体颜色属性
        'btn-primary': this.type === 'primary' ? true : false,
        'btn-info': this.type === 'info' ? true : false,
        'btn-danger': this.type === 'danger' ? true : false,
        'btn-success': this.type === 'success' ? true : false
      }
    }
  },
  components:{

  },
  props:{
    type:String
  }
}
</script>

<style>
button{
  outline:none;
}
</style>
