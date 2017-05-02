<template>
  <div class="container">
  <iframe frameborder="0" scrolling="no" allowtransparency="yes"  name="Iframe1" src="http://www.bjmhzl.com/wyf/map.html" width="100%" height="330">
    您的浏览器不支持嵌入式框架，或者当前配置为不显示嵌入式框架。
  </iframe>
  <div class="row">
    <div class="col-md-12 bjjl">
      <div class="col-md-1"></div>
      <div class="col-md-3">
        <dl>
          <dt>联系我们</dt>
          <dd><span>联系人：</span>王盈霏</dd>
          <dd><span>电话：</span>13466473971</dd>
          <dd><span>微信：</span>傲雪霏</dd>
          <dd><span>Q Q：</span>2232442661</dd>
          <dd><span>邮箱：</span>2232442661@qq.com</dd>
        </dl>
      </div>
      <div class="col-md-7">
        <form action="http://www.bjmhzl.com/wyf/email/" method="post">
          <div class="form-group">
            <input type="text" class="form-control" id="name" name="name" placeholder="姓名">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="phone" name="phone" placeholder="电话">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="weixin" name="weixin" placeholder="微信">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" id="comment" name="comment" placeholder="问题">
          </div>
          <input type="hidden" name="url" value="http://127.0.0.1:8080/#/about">
          <input type="submit" class="btn btn-primary" value="提交">
        </form>    
      </div>
      <div class="col-md-1"></div>
    </div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'about',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
.bjjl{
  padding: 3% 0 10% 0;
}
dl{}
dl dt{
  font-size: 30px;
  line-height: 35px;
  padding-bottom: 10px;
}
dl dd{
  line-height: 28px;
  font-size: 16px;
}
dl dd span{
  width: 70px;
  display: inline-block;
  text-align: right;
}
</style>
