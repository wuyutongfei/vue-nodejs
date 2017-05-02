/**
 * Created by 王盈霏 on 2017/4/28.
 */
var mysql = require('mysql');
var database_config={
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'my_bj'
}
var pool=mysql.createPool(database_config);
module.exports=pool;



