/*** Created by A.J on 2016/10/17.*/$(document).ready(function(){$("#captcha, #resetcaptcha").click(function(){$("#captcha").attr("src",$("#captcha").attr("src")+"?"+Math.random());$("#captchain").val("");});$("#submit").on("click", function(){var subobj = $(this);subobj.attr("disabled",true).children("i").removeClass("d-none");$.post("", subobj.parents("form").serialize(),function(data){subobj.attr("disabled",false).children("i").addClass("d-none");if(data == "ok"){var obj = $.alert({title: "",content: $("#logok").html(),buttons: {confirm: {text: $('#queding').text(),btnClass: 'btn-info',keys: ['enter'],action: function () {window.location.href = $("#ljump").text();}}}});window.location.href = $("#ljump").text();setTimeout(function(){obj.close();},1000);}else{$("#captcha").attr("src",$("#captcha").attr("src")+"?"+Math.random());$("#captchain").val("");var jc = $.alert({title: $('#chucuo').text(),content: data,buttons: {confirm: {text: $('#queding').text(),btnClass: 'btn-info',keys: ['enter']}},onContentReady: function () {var resd = 0;this.$content.find("#resend").on('click', function (e) {if(resd > 0){return false;}$(this).text($("#sendingmail").text());resd ++ ;});}});}});});});