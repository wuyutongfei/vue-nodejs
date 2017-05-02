<template>
<div class="container">
    <div class="row">
      <div class="col-lg-12">             
            <div class="panel panel-default">
                <div class="panel-heading">                       
                    <h3 class="panel-title">Vue+Node.js笔记制作过程</h3>
                </div>
                <div class="panel-body">
                    <div class="row">                            
                        <div class="col-md-6">
                            <div class="panel panel-success">
                              <div class="panel-heading">
                                <h3 class="panel-title">Web前端Vue框架</h3>
                              </div>
                              <div class="panel-body">
                                <div class="list-group">
                                  <a class="list-group-item active">创建Vue工程环境</a>
                                  <a class="list-group-item">1.$ npm install -g vue-cli（全局安装 vue-cli）</a>
                                  <a class="list-group-item">2.$ npm init webpack-simple webapp（创建一个基于 webpack-simple 模板的新项目）</a>
                                  <a class="list-group-item">3.提问环节：项目名称？描述？作者？是否使用sass？</a>
                                  <a class="list-group-item">4.cd webapp（进入webapp目录）</a>
                                  <a class="list-group-item">5.npm install（下载依赖包）</a>
                                  <a class="list-group-item">6.npm run dev (启动工程)</a>
                                  <a class="list-group-item">7.npm run build (生成工程项目在dis目录)</a>
                                </div>
                                <div class="panel-heading">
                                  <h3 class="panel-title">主要代码展示区（Vue发送数据并且得到数据）</h3>
                                </div>
                                <p>
                                <span>main.js发送数据</span><br>
                                  const store = new Vuex.Store({<br>
                                      state: { //存数据<br>
                                          notes: '',<br>
                                          note: {<br>
                                              id: "",<br>
                                              title: "",<br>
                                              content: "",<br>
                                              date: ""<br>
                                          }<br>
                                      },<br>
                                      mutations: { //修改数据  进化<br>
                                          addNote(state, note) {  <br>        
                                             $.ajax({<br>
                                             <span>//url 发送数据到node.js</span><br>        
                                                url:note.id =='' ? 'http://127.0.0.1:3300/users/<br>add/':'http://127.0.0.1:3300/users/edit/'+note.id,<br>
                                                type:"post",<br>
                                                data:{//数据<br>
                                            title:note.title,<br>
                                            content:note.content<br>
                                                },<br>
                                                success:function(data){//成功<br>
                                                  state.notes=data;//得到数据付给 最上边的数组notes<br>
                                                },<br>
                                          error:function(err){//失败<br>
                                            console.log(err);<br>
                                          }<br>
                                             }) <br>                                        
                                          }<br>
                                      }<br>
                                  })<br>
                                </p>
                              </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                           <div class="panel panel-info">
                              <div class="panel-heading">
                                <h3 class="panel-title">Web后端Node.js框架</h3>
                              </div>
                              <div class="panel-body">
                                <div class="list-group">
                                  <a class="list-group-item active">创建express骨架</a>
                                  <a class="list-group-item">1.安装nodejs （Git-2.12.0-32-bit.exe） （node-v6.10.0-x86.msi）</a>
                                  <a class="list-group-item">2.npm install -g cnpm --registry=https://registry.npm.taobao.org（淘宝镜像）</a>
                                  <a class="list-group-item">3.npm install express-generator -g（全局）</a>
                                  <a class="list-group-item">4.npm init （在你创建的目录里面初始化）</a>
                                  <a class="list-group-item">5.express -e app（生成express骨架并且创建app目录）</a>
                                  <a class="list-group-item">6.npm install（下载依赖包）</a>
                                  <a class="list-group-item">7.npm start 启动node.js</a>
                                  <a class="list-group-item">8.创建数据库文件</a>
                                  <a class="list-group-item">9.使用你感觉比较合适的文件作为后台文件输出数据库信息</a>
                                  <a class="list-group-item">10.我使用：app/routes/users.js（增删改查）</a>
                                </div>                             
                                <div class="panel-heading">
                                  <h3 class="panel-title">主要代码展示区（Node.js接收数据并返回数据）</h3>
                                </div> 
                                <p>
                                  var pool=require("../config/config");//链接数据库<br>
                                  router.use(function(req, res, next) {//解决跨域问题代码<br>
                                      // Set permissive CORS header - this allows this server to be used only as<br>
                                      // an API server in conjunction with something like webpack-dev-server.<br>
                                      res.setHeader('Access-Control-Allow-Origin', '*');<br>
                                      // Disable caching so we'll always get the latest comments.<br>
                                      res.setHeader('Cache-Control', 'no-cache');<br>
                                      next();<br>
                                  });<br>
                                  //修改笔记 app/routes/users.js<br>
                                  router.post('/edit/:id', function(req, res, next){<br>
                                      var ids=req.params;<br>
                                      var title=req.body.title;<br>
                                      var content=req.body.content;<br>
                                      pool.getConnection(function (err,connection) {<br>
                                          var sql='update `my_bj` set `title`=?,`content`=? where id='+ids.id;<br>
                                          connection.query(sql,[title,content],function (<br>error,results,fields) {//修改笔记<br>
                                              connection.query('SELECT * FROM my_bj order by id desc', <br>function (error, results, fields) {//读取笔记<br>
                                              connection.release();//释放空间<br>
                                              res.send(results);//回传数据<br>
                                              });<br>
                                          });<br>
                                      });<br>
                                  }); <br>
                                </p> 
                              </div>                           
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>      
    </div>
  </div>
</template>
<script>
export default{//抛出最普通的对象
  //需要的属性
  name:"Vmaking",
  data(){
  	return{
  	}
  },
  props:{}
}
</script>
<style scoped>
p span{
  color: #d9534f;
}
</style>
