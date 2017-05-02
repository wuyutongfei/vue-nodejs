<template>
    <div class="panel panel-default">
        <div class="panel-heading">
            <h3 class="panel-title">笔记目录</h3>
        </div>
        <div class="panel-body bord">
            <ul class="list-group force-overflow" id="style-1">
                <Vonteitem v-for="(note,index) in getNotes" :note="note" :key="index"></Vonteitem>
            </ul>
        </div>
    </div>
</template>
<script>
import Vbutton from './Vbutton'
import Vonteitem from './Vonteitem'
export default { //抛出最普通的对象
    //需要的属性
    name: "Vontelist",  
    data() {
        return {

        }
    },
    computed: {//计算属性
        getNotes() {
            //数组
            return this.$store.state.notes
        }
    },
    methods: {
        // addNote() {
        //     //this.$store.state.notes.push({id:10,title:"1111",date:"2017-04-25"})
        //     //必须使用commit()方法
        //     this.$store.commit('addNote', {
        //         id: 10,
        //         title: "1111",
        //         date: "2017-04-25"
        //     })
        // }
    },
    components: {
        Vbutton,
        Vonteitem
    },
    props: {}
}
</script>
<style scoped>
.bord{   
    height: 360px;
}
.force-overflow
{
    height: 330px;
    max-height: 330px;
    overflow:auto;
    overflow-x: hidden;
}
#style-1::-webkit-scrollbar-track
{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
  border-radius: 10px;
  background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar
{
  width: 8px;
  background-color: #F5F5F5;
}

#style-1::-webkit-scrollbar-thumb
{
  border-radius: 10px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #d0cfcf;
}
</style>
