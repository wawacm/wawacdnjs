/*** Created by A.J on 2019/9/16.*/var poobj;$(document).ready(function(){$(".page-link").addClass("text-info");$(".page-item.disabled .page-link").removeClass("text-info");$(".page-item.active .page-link").removeClass("text-info").addClass("bg-info border-info");$(".zhengwen img").addClass("img-fluid");var jianyupid = 0;if($("#feedback").length > 0 && parseInt($("#feedback").text()) == 1){jianyupid = $("#postid").text();}$.post($("#feedbackurl").text(), {pid: jianyupid}, function(data){});$.popoverimg();$(".denglu").on("click", function(){if($("#isLogin").text() != 1 && $('#jianyudenglu').length > 0){$('#jianyudenglu').modal('show');}});if($("#captcha").length > 0){$("#captcha, #resetcaptcha").click(function(){$("#captcha").attr("src",$("#captcha").attr("src")+"?"+Math.random());});}$("#denglu").click(function(){var obj = $(this);obj.children("i:last").removeClass("d-none");$.post($("#dengluurl").text(), $("#dengluform").serialize(),function(data){obj.children("i:last").addClass("d-none");if(data == 'ok'){window.location.reload();}else{if($("#captcha").length > 0){$('input[name="captcha"]').val("");$("#captcha").attr("src",$("#captcha").attr("src")+"?"+Math.random());}$.alert({title: '提示',content: data,buttons: {confirm: {text: '确定',btnClass: 'btn-info',keys: ['enter']}}});}});});});$.extend({"popoverimg": function(){$('img[data-toggle="popover"]').popover({container: 'body',html: true,content: '<div class="popoverdiv p-3"></div>'}).on("mouseenter", function(){poobj = $(this);poobj.popover('show');$(".popover").addClass("shadow");$(".popoverdiv").html(poobj.parent().children("div:last").html());$(".popoverdiv").on("mouseleave", function(){poobj.popover('hide');});}).on("mouseleave", function(){if(!$(".popover:hover").length){poobj.popover('hide');}});}});