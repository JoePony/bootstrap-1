requirejs.config({
    // baseUrl:'./',
    paths:{
        jquery:'../bower_components/jquery/jQuery.min',  //指定模块
        bootstrap:'../bower_components/bootstrap/dist/js/bootstrap.min'  //指定模块
        // index:'index'
    },
    shim:{
        bootstrap:'jquery'  //防止bootstrap先于jquery加载导致的错误
    }
});
requirejs(['jquery','bootstrap','index','pageScrollTo'],function($, bootstrap, index, pageScrollTo){
    $(function(){
        new pageScrollTo( $('#toTop'),{dest:0,speed:350} );  //实例化自定义滚动模块，参数可缺省
        new index.execute();  //实例化自定义的index模块，实现一些交互功能
    });
});