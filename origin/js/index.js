define(['jquery'],function(){
    return {  //返回模块
        execute:function(){
            $('.alertModal').on('click',function(){  //弹出框
                $('#modalAbout').modal('toggle');    //模态窗口
                $('#modalAbout h4').html('\''+$(this).text()+'\''+' 即将上线，敬请期待...');  //内容动态显示
            });
            $('.foldForm').on('click',function(e){ 
                $('form').slideToggle(100,function(){
                    $('.foldForm').toggle();    //显示与隐藏表单
                });
                e.preventDefault();   //防止提交
            });
        }
    }
});