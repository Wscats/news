var mysql = require('mysql');

function curd() {
	this.connection = mysql.createConnection({
			//域名
			host: 'localhost',
			//数据库的用户名
			user: 'winds',
			//数据库的密码
			password: '123456789',
			database: 'ws'
		})
		//数据库进行连接
	this.connection.connect();
}
//取user表所有数据
//进行查询数据
//select 选择所在的列 from 数据库的表 where 选择条件
curd.prototype.findAll = function(table, col, callback) {
		console.log('SQL：' + 'select ' + col + ' from ' + table);
		this.connection.query('select ' + col + ' from ' + table, function(err, rows, filed) {
			callback(err, rows);
		})
	}
	//根据主键获取数据
curd.prototype.findByPk = function(table, col, param, callback) {
		var arrKey = [];
		for(p in param) {
			arrKey.push(p + '="' + param[p] + '"');
		}
		var keys = arrKey.join(" AND ");
		console.log('SQL：' + 'select ' + col + ' from ' + table + ' where ' + keys);
		this.connection.query('select ' + col + ' from ' + table + ' where ' + keys, function(err, rows) {
			callback(err, rows);
		})
	}
	//INSERT INTO 数据库的表 (列名, 列名, 列名) VALUES (值, 值, 值);
curd.prototype.add = function(table, param, callback) {
		//需要存进数据库的列名
		var arrKey = [];
		//需要存进数据库的值
		var arrValue = [];
		//遍历对象
		for(p in param) {
			arrKey.push(p);
			//让值两边都加上单引号
			//因为正确格式应该如下
			//INSERT INTO news (title,source,text) VALUES ('wscat','abc','cba')
			arrValue.push("'" + param[p] + "'");
		}
		//数组转字符串
		var keys = arrKey.join(",");
		var values = arrValue.join(",");
		console.log('SQL：' + 'INSERT INTO ' + table + ' (' + keys + ') VALUES (' + values + ')');
		//进行增加数据
		this.connection.query('INSERT INTO ' + table + ' (' + keys + ') VALUES (' + values + ')', function(err) {
			callback(err);
		})
	}
	//DELETE FROM 数据库的表  WHERE 选择条件
curd.prototype.delete = function(table, param, callback) {
		var arrValue = [];
		for(p in param) {
			arrValue.push(p + "='" + param[p] + "'");
		}
		//支持多个条件删除 AND OR
		var values = arrValue.join(" AND ");
		console.log('SQL：' + 'DELETE FROM ' + table + ' WHERE ' + values);
		//进行删除数据
		this.connection.query('DELETE FROM ' + table + ' WHERE ' + values, function(err) {
			callback(err)
		});
	}
	//UPDATE 数据库的表 SET 列=值,列=值 WHERE 选所在行的条件
curd.prototype.update = function(table, param, callback) {
		var arrKey = [];
		for(p in param) {
			arrKey.push(p + "='" + param[p] + "'");
		}
		var keys = arrKey.join(",");
		console.log('SQL：' + 'UPDATE ' + table + ' SET ' + keys + ' WHERE id =' + param.id)
			//进行改数据 根据主键来修改对应的数据
		this.connection.query('UPDATE ' + table + ' SET ' + keys + ' WHERE id =' + param.id, function(err) {
			callback(err);
		})
	}
	//导出对象，外部引用
exports.curd = new curd();