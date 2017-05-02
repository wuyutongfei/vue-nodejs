<template>
    <!-- 页面组件当容器用的 -->
    <div class="container">
        <div class="row">
            <div class="col-lg-12">            	
                <div class="panel panel-default">
                    <div class="panel-heading">                       
                        <h3 class="panel-title">基于vue的笔记应用</h3>
                    </div>
                    <div class="panel-body">
                        <div class="row">                            
                            <div class="col-md-3">
                                <Vontelist></Vontelist>
                            </div>
                            <div class="col-md-9">
                                <Vnoteeditor></Vnoteeditor>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// 引入组件
import Vontelist from './Vontelist'
import Vnoteeditor from './Vnoteeditor'
export default { //抛出最普通的对象
    //需要的属性
    name: "Vnote",
    data() {
        return {

        }
    },
    methods: {
    	
    },
    computed: {},
    components: { //注册子组件
        Vontelist,
        Vnoteeditor
    },
    props: {}
}
</script>
<style>
.rig{
	float: right;
	position: relative;
	
}
</style>
