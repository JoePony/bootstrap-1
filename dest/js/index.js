define(["jquery"],function(){return{execute:function(){$(".alertModal").on("click",function(){$("#modalAbout").modal("toggle"),$("#modalAbout h4").html("'"+$(this).text()+"'"+" 即将上线，敬请期待...")}),$(".foldForm").on("click",function(a){$("form").slideToggle(100,function(){$(".foldForm").toggle()}),a.preventDefault()})}}});