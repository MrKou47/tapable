var Tapable = require('../lib/Tapable');

var tap = new Tapable();

// tap.plugin('eat', function (food1, food2) {
//   console.log(food1, food2);
// });

// tap.plugin('eat', function (food1, food2) {
//   console.log(food1, food2);
// });

// tap.applyPlugins('eat', 'rice', 'soup');
// tap.applyPlugins0('eat', 'rice', 'soup');
// tap.applyPlugins1('eat', 'rice', 'soup');
// tap.applyPlugins2('eat', 'rice', 'soup');



// tap.plugin('eat', function (result) {
//   console.log(result);
//   return 'first result';
// });

// tap.plugin('eat', function (result) {
//   console.log('final', result);
//   return 'final result';
// });

// tap.applyPluginsAsyncWaterfall('eat', 'rice', function (err, value) {
//   console.log(err, value);
// });


/**
 * applyPluginsWaterfall
 * 循环执行每一个注册的事件 可设置第一个事件的参数
 * 每个注册的事件都会接受上一个 function 的执行结果作为参数，同时此方法同步返回执行结果
 * applyPluginsWaterfall0
 * applyPluginsWaterfall1
 * applyPluginsWaterfall2
 * 调用方式 plugins[i].call(this, current, param1, param2);
 * 如接受三个参数 则第一个参数为上一个的执行结果
 * 
 * 通过指定方法名称 省去了通过 var args = Array.prototype.slice.call(arguments, 1); 来获取参数的方法（可能节省一部分性能？）
 */
// var pluginResult = tap.applyPluginsWaterfall('eat', 'initial val'); 
// console.log(pluginResult);


/**
 * applyPluginsBailResult
 * 循环执行每一个注册的事件，事件注册的参数任意
 * 一旦某个注册事件返回值 typeof !== undefined 则直接返回此值
 * applyPluginsBailResult1
 * applyPluginsBailResult2
 * applyPluginsBailResult3
 * applyPluginsBailResult4
 * applyPluginsBailResult5
 * 调用方式 plugins[i].call(this, param1, param2, param3);
 */

/**
 * applyPluginsAsyncSeries
 * applyPluginsAsync
 * 异步执行所有注册事件
 * function applyPluginsAsyncSeries1(name, param, callback)
 */

tap.plugin('eat', function (cb) {
  cb(null);
});

tap.plugin('eat', function (cb) {
  cb(null);
});


/**
 * applyPluginsAsyncSeriesBailResult
 * applyPluginsAsyncSeriesBailResult1
 * if(arguments.length > 0) return callback.apply(null, arguments);
 * 如果某一次对于注册事件的 callback() 调用含有参数，则不触发其余的 callback
 */


// tap.applyPluginsAsyncSeriesBailResult('eat', function (args) {
//   // some code
// });

/**
 * applyPluginsParallel
 * 并行执行含有回调的注册事件
 */

// tap.applyPluginsParallel('eat', function () {
//   console.log(arguments);
// });

/**
 * applyPluginsParallelBailResult
 * applyPluginsParallelBailResult1
 * 没看到有用到的地方
 * 
 * 每一次执行 callback 的时候 如果包含 参数 则 触发一次注册的回调
 * 				if(done.length === currentPos) {
					callback.apply(null, currentResult);
					currentPos = 0;
				}
 */

tap.applyPluginsParallelBailResult('eat', function () {
  console.log(arguments);
});