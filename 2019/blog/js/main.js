window.console && window.console.log("%c\u5a03\u5a03\u56e2\u961f%c Version:" + ThemeVersion + " Copyright \u00a9 2016-%s", "color:#52BAF5; text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em", "font-size:12px;color:#5db8f8;", (new Date).getFullYear());
console.log("%c \u6e29\u99a8\u63d0\u793a\uff1a\u53d1\u73b0Bug\u8bf7\u53ca\u65f6\u8ddf\u6211\u53cd\u9988(\u30fb\u03c9\u30fb)", "font-family:'Helvetica Neue', Helvetica, Arial, sans-serif;font-size:14px;color:#F87D53;");
console.log("%c \u8fd9\u91cc\u6709\u6211\u7684\u8054\u7cfb\u65b9\u5f0f(o^.^o) http://security.wawacm.com/", "color:#00cc00");
if(navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i)){
$(document).ready(function(){$(".indexebox").click(function(){$(this).find(".indexebox").css("margin-top", "-33px");});});
$(document).ready(function(){$(".comment-box").click(function(){$(this).find(".comment-reply-link").css("opacity", "1");});});
}else{
$(document).pjax('a[target!=_blank]', pjax_id, {fragment:pjax_id, timeout:6000});
$(document).on('submit', 'form:not(#commentform,#input,#pay_f)', function (event) {$.pjax.submit(event, pjax_id, {fragment:pjax_id, timeout:6000});}); 
    $(document).on('pjax:send', function() {
          $(".loading,.loading1").css("display", "block");
          $(pjax_id).addClass("xg");
		  tinymce.remove("#editor_content");
          });
    $(document).on('pjax:complete', function() {
          $(".loading,.loading1").css("display", "none");
          $(pjax_id).removeClass("xg");
		  $("a[href$=jpg],a[href$=jpeg],a[href$=gif],a[href$=png]").addClass("swipebox").attr('rel','');
          $(function () { $("[data-toggle='tooltip']").tooltip(); });
	      $('#mySlide').carousel({interval:2000,});
		  $("img.lazy").lazyload({effect: "fadeIn"});
		  if(typeof($('#wowslider-container1')[0])!=='undefined'){$.getScript(''+ pjaxtheme +'js/slider.js');};
		  if($("pre").hasClass('sh_xml')){sh_highlightDocument('../content/plugins/SHJS_for_Emlog/lang/', '.min.js');};
		  tinymce.init({selector:'#editor_content'});
	      pjaxcn();
          });
$(document).on('pjax:success', function(a,b,c,d){
	if(/#comments$/.test(a.currentTarget.URL) && $('.comments-list').length){
		$('html,body').stop(true).animate({
			scrollTop: $('.comments-list').offset().top-120
		}, 300)
	}
});
$(document).ready(function(){
$(".navbar-nav li").click(function(){
   $("li").removeClass("active");
   $(this).addClass("active");
  });
});
}
$( document ).on( 'click', '#mobile-tab-menu > li:not(.disable)', function(){
	$( this ).parent( 'ul' ).children( 'li' ).removeClass( 'current' );
	$( this ).addClass( 'current' );
	var current = $( this ).data( 'tab' ),
		articles = {
			context: '.context,.sbclass,#comments',
			related: '.related-posts-box',
		};
	$.each( articles, function( article, selector ){
		article == current ? $( selector ).removeClass( 'mobile-hide' ) : $( selector ).addClass( 'mobile-hide' );
	} );
} );
$(function() {
  $('button.navbar-toggle').click(function(){ 
    $('body').toggleClass('out');
    $('nav.navbar-fixed-top').toggleClass('out');
    if ($('body').hasClass('out')) {
      $(this).focus();
    } else {
      $(this).blur();
    }
  });
});
$(document).click(function(e) {
  if (!$(e.target).closest('.navbar-collapse, button.navbar-toggle').length && $('body').hasClass('out')) {
    e.preventDefault();
    $('button.navbar-toggle').trigger('click');
  }
}).keyup(function(e) {
  if (e.keyCode == 27 && $('body').hasClass('out')) {
    $('button.navbar-toggle').trigger('click');
  } 
});
$('.J_showAllShareBtn').click(function(){
    $('.bdsharebuttonbox').slideToggle(300);
    $('.panel-reward').toggle(false)
});
$('.pay-author').click(function(){
    $('.panel-reward').slideToggle(300);
    $('.bdsharebuttonbox').toggle(false)
});
$("a[href$=jpg],a[href$=jpeg],a[href$=gif],a[href$=png]").addClass("swipebox").attr('rel','');
$(function () { $("[data-toggle='tooltip']").tooltip(); });
$('#mySlide').carousel({interval:2000,});
function scrollTo(name, add, speed) {
    if (!speed) speed = 300
    if (!name) {
        $('html,body').animate({
            scrollTop: 0
        }, speed)
    } else {
        if ($(name).length > 0) {
            $('html,body').animate({
                scrollTop: $(name).offset().top + (add || 0)
            }, speed)
        }
    }
}
var scroller = $('.rollbar')
$(window).scroll(function() {
    document.documentElement.scrollTop + document.body.scrollTop > 200 ? scroller.fadeIn() : scroller.fadeOut();
})
$(".conment-btn").html($('.comment-respond').length?"<a href=\"javascript:(scrollTo('#comments',-90));\"><i class=\"fa fa-comments\"></i></a><h6>去评论<i></i></h6>":'')

$("#submit").on("click",function(){
	$('.faceshow').hide();
	$("#ajaxloading1").html('<img style="margin-left:5px;" src="'+ pjaxtheme +'img/loading.gif"><a style="font-size:12px;margin-left:5px;">正在提交评论..</a>');
	$.ajax({
		url: $("#commentform").attr("action"),
		type: 'post',
		data: $("#commentform").serialize(),
		success:function(d){
			var reg = /<div class=\"main\">[\r\n]*<p>(.*?)<\/p>/i;
			if(reg.test(d)){
				$("#error1").html(d.match(reg)[1]).show().fadeOut(2500);
				$("#ajaxloading1").hide();
			}else{
				var pid = $('.comment').length ? $('.comment').attr('id').split('-') : 0;
				$("#comments2").html($(d).find("#comments2").html());
				$("section.context").length ? $("section.context").html($(d).find("section.context").html()) : '';
				$(".comment-info").hover(function(){$(this).find(".comment-reply").show();},function(){$(this).find(".comment-reply").hide();});
				if (pid != 0){
					$("html,body").animate(function (){scrollTop:$("#comment-"+pid[1]).offset().top - 260},1000);
				}
			}
		}
	})	
	return false;
});
$(".downbtn").click(function(){$(".down-open").slideDown(300);$(".zhezhao").show()});
$(".down-close a").click(function(){$(".down-open").slideUp(300);$(".zhezhao").hide()});
$('.fly-search-s').click(function () {$('.search-forms').addClass('is-visible')});
$('.search-go,.close-search').click(function(){$(".search-forms").removeClass("is-visible")});
$('.logo').click(function(){$(".navbar-nav li").removeClass("active");$('.navbar-nav li:first').addClass('active');});
$('img[src*="checkcode.php"]').attr('title', '单击刷新验证码').click(function(){this.src = this.src.replace(/\?.*$/, "") +'?'+ new Date().getTime();});
$(".archives").find("ul").hide();
$(".archives").find("ul:first,ul:eq(1),ul:eq(2),ul:eq(3)").show();
$(".archives h4").click(function(){$(this).next("ul").slideToggle("fast")});
$(".toggler").click(function() {"展开归档" == jQuery(this).text() ? ($(".archives").find("ul").show(), jQuery(this).text("折叠归档")) : ($(".archives").find("ul").hide(), jQuery(this).text("展开归档"));return !1});


function tops() {
	$('html,body').animate({scrollTop:0});
}
function embedSmiley() {
    "none" == $(".smiley-box").css("display") ? $(".smiley-box").slideDown(200) : $(".smiley-box").slideUp(200)
}
function grin(a) {
    var b;
    a = " " + a + " ";
    if (document.getElementById("comment") && "textarea" == document.getElementById("comment").type) b = document.getElementById("comment");
    else return !1;
    if (document.selection) b.focus(), sel = document.selection.createRange(), sel.text = a, b.focus();
    else if (b.selectionStart || "0" == b.selectionStart) {
        var c = b.selectionEnd,
            d = c;
        b.value = b.value.substring(0, b.selectionStart) + a + b.value.substring(c, b.value.length);
        d += a.length;
        b.focus();
        b.selectionStart = d;
        b.selectionEnd = d
    } else b.value += a, b.focus()
}
function commentReply(a, b) {
	var c = document.getElementById("comment-post");
	b.style.display = "none";
	document.getElementById("cancel-reply").style.display = "";
	document.getElementById("comment-pid").value = a;
	b.parentNode.parentNode.appendChild(c)
}
function cancelReply() {
	var a = document.getElementById("comment-place"),
		b = document.getElementById("comment-post");
	document.getElementById("comment-pid").value = 0;
	$(".reply i").css({
		display: ""
	});
	document.getElementById("cancel-reply").style.display = "none";
	a.appendChild(b)
}
function guidang() {
	$(".toggler").click(function() {
		"展开归档" == jQuery(this).text() ? ($(".archives").find("ul").show(), jQuery(this).text("折叠归档")) : ($(".archives").find("ul").hide(), jQuery(this).text("展开归档"));
		return !1
	})
$(".archives").find("ul").hide();
$(".archives").find("ul:first,ul:eq(1),ul:eq(2),ul:eq(3)").show();
$(".archives h4").click(function(){$(this).next("ul").slideToggle("fast")});
}
function ajaxcomments(){
$("#submit").off();
$("#submit").on("click",function(){
	$('.faceshow').hide();
	$("#ajaxloading1").html('<img style="margin-left:5px;" src="'+ pjaxtheme +'img/loading.gif"><a style="font-size:12px;margin-left:5px;">正在提交评论..</a>');
	$.ajax({
		url: $("#commentform").attr("action"),
		type: 'post',
		data: $("#commentform").serialize(),
		success:function(d){
			var reg = /<div class=\"main\">[\r\n]*<p>(.*?)<\/p>/i;
			if(reg.test(d)){
				$("#error1").html(d.match(reg)[1]).show().fadeOut(2500);
				$("#ajaxloading1").hide();
			}else{
				var pid = $('.comment').length ? $('.comment').attr('id').split('-') : 0;
				$("#comments2").html($(d).find("#comments2").html());
				$("section.context").length ? $("section.context").html($(d).find("section.context").html()) : '';
				$(".comment-info").hover(function(){$(this).find(".comment-reply").show();},function(){$(this).find(".comment-reply").hide();});
				if (pid != 0){
					$("html,body").animate(function (){scrollTop:$("#comment-"+pid[1]).offset().top - 260},1000);
				}
			}
		}
	})	
	return false;
});
}
function ajaxcheckcode(){
$('img[src*="checkcode.php"]').attr('title', '点击刷新验证码').click(function(){ this.src = this.src.replace(/\?.*$/, "") +'?'+ new Date().getTime();});
}
function pjaxcn() {
	try {
		ajaxcheckcode()
	} catch (a) {}
	try {
	    close_sidebar()
	} catch (a) {}
	try {
		ajaxcomments()
	} catch (a) {}
	try {
	    xueshengka()
	} catch (a) {}
	try {
		jqueryicon()
	} catch (a) {}
	try {
	    guidang()
	} catch (a) {}
	try {
	    qqhaoma()
	} catch (a) {}
}
jQuery(document).ready(function(){
	var scrtime;
$(".bulletin").hover(function(){
	clearInterval(scrtime);
},function(){
scrtime = setInterval(function(){
	var $ul = $(".bulletin ul");
	var liHeight = $ul.find("li:last").height();
	$ul.animate({marginTop : 5 + "px"},300,function(){
	
	$ul.find("li:last").prependTo($ul)
	$ul.find("li:first").hide();
	$ul.css({marginTop:0});
	$ul.find("li:first").fadeIn(1000);
	});
},5000);
}).trigger("mouseleave");
});
jQuery(document).ready(function($){
$('.close-sidebar').click(function(){
    $('.close-sidebar,.sidebar').hide();
    $('.show-sidebar').show();
    $('.content').animate({
        width: "100%"
    },
    1000);})
$('.show-sidebar').click(function(){
    $('.show-sidebar').hide();
    $('.close-sidebar').show();
    setTimeout(function () {$('.sidebar').show();}, 1000);
    $('.content').animate({
        width: "790px"
    },
    1000);})
$(".sidebar-dropdown > a").click(function(){
	    $(".sidebar-submenu").slideUp(250);
    if ($(this).parent().hasClass("active")){
 		$(".sidebar-dropdown").removeClass("active");
 		$(this).parent().removeClass("active");
    }else{
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(250);
        $(this).parent().addClass("active");
    }
});
$("#toggle-sidebar").click(function(){
	$(".page-wrapper").toggleClass("toggled");	    
});
});
function a(a, b, c) {
		if (document.selection) a.focus(), sel = document.selection.createRange(), c ? sel.text = b + sel.text + c : sel.text = b, a.focus();
		else if (a.selectionStart || "0" == a.selectionStart) {
			var l = a.selectionStart,
				m = a.selectionEnd,
				n = m;
			c ? a.value = a.value.substring(0, l) + b + a.value.substring(l, m) + c + a.value.substring(m, a.value.length) : a.value = a.value.substring(0, l) + b + a.value.substring(m, a.value.length);
			c ? n += b.length + c.length : n += b.length - m + l;
			l == m && c && (n -= c.length);
			a.focus();
			a.selectionStart = n;
			a.selectionEnd = n
		} else a.value += b + c, a.focus()
}
var b = (new Date).toLocaleTimeString(),
		c = document.getElementById("comment") || 0;
window.SIMPALED = {};
window.SIMPALED.Editor = {
	daka: function() {
		a(c, "[blockquote]滴！学生卡！打卡时间：" + b, "，请上车的乘客系好安全带~[/blockquote]")
	},
	zan: function() {
		a(c, "[blockquote][F9] 写得好好哟,我要给你生猴子！[/blockquote]")
	},
	cai: function() {
		a(c, "[blockquote][F14] 骚年,我怀疑你写了一篇假的文章！[/blockquote]")
	}
}
function close_sidebar(){
$('.close-sidebar').click(function(){
    $('.close-sidebar,.sidebar').hide();
    $('.show-sidebar').show();
    $('.content').animate({
        width: "100%"
    },
    1000);})
$('.show-sidebar').click(function(){
    $('.show-sidebar').hide();
    $('.close-sidebar').show();
    setTimeout(function () {$('.sidebar').show();}, 1000);
    $('.content').animate({
        width: "790px"
    },
    1000);})
$(".sidebar-dropdown > a").click(function(){
	    $(".sidebar-submenu").slideUp(250);
    if ($(this).parent().hasClass("active")){
 		$(".sidebar-dropdown").removeClass("active");
 		$(this).parent().removeClass("active");
    }else{
        $(".sidebar-dropdown").removeClass("active");
        $(this).next(".sidebar-submenu").slideDown(250);
        $(this).parent().addClass("active");
    }
});
$("#toggle-sidebar").click(function(){
	$(".page-wrapper").toggleClass("toggled");	    
});
$("#links3 .linkli").find("a").attr("href","javascript:;");
$(".downbtn").click(function(){$(".down-open").slideDown(300);$(".zhezhao").show()});
$(".down-close a").click(function(){$(".down-open").slideUp(300);$(".zhezhao").hide()});
$('.J_showAllShareBtn').click(function(){$('.bdsharebuttonbox').slideToggle(300);$('.panel-reward').toggle(false)});
$('.pay-author').click(function(){$('.panel-reward').slideToggle(300);$('.bdsharebuttonbox').toggle(false)});
$(".conment-btn").html($('.comment-respond').length?"<a href=\"javascript:(scrollTo('#comments',-90));\"><i class=\"fa fa-comments\"></i></a><h6>去评论<i></i></h6>":'')
}
function openShare($url) {
	return window.open($url, "newwindow")
}
function shareToWeibo(url, title, cover) {
	var re = /http:[/]{2}[a-zA-Z0-9.%=/]{1,}[.](jpg|png)/g;
	var content = $(".context").html();
	if(re.test(content)){
		cover = content.match(re)[0];
	}
	var url = "http://v.t.sina.com.cn/share/share.php?url=" + url + "&appkey=1148356070&title=" + title + "&searchPic=true&pic=" + cover + "&rnd=" + ((new Date()) * 1) + "";
	openShare(url)
}

function shareToQzone(url, title, cover, desc, summary) {
	var re = /http:[/]{2}[a-zA-Z0-9.%=/]{1,}[.](jpg|png)/g;
	var content = $(".context").html();
	if(re.test(content)){
		cover = content.match(re)[0];
	}
	var url = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=" + url + "&title=" + title + "&desc=" + desc + "&pics=" + cover + "&summary=&site=Finally";
	openShare(url)
}

function shareToQQ(url, title, cover, desc, summary) {
	var re = /http:[/]{2}[a-zA-Z0-9.%=/]{1,}[.](jpg|png)/g;
	var content = $(".context").html();
	if(re.test(content)){
		cover = content.match(re)[0];
	}
	var url = "http://connect.qq.com/widget/shareqq/index.html?url=" + url + "&title=" + title + "&desc=&summary=&site=Finally";
	openShare(url)
}



function shareToWeiXin(qrCode) {
	var html = '<div class="layer-share-weixin f-usn"><div class="inner"><h6>分享到微信朋友圈<a class="close" id="close-share-weixin">X</a></h6><img src="' + qrCode + '"><p>打开微信，点击底部的“发现”，<br/>使用“扫一扫”即可将网页分享至朋友圈。</p></div></div>';
	$('body')["addClass"]("unit-blur")["append"](html);
	$("#close-share-weixin").bind("click", function() {
		$(".layer-share-weixin")["remove"]();
		$('body')["removeClass"]("unit-blur")
	});
	$(".layer-share-weixin").bind("dblclick", function() {
		$(this)["remove"]();
		$('body')["removeClass"]("unit-blur")
	})
}

function xueshengka() {
	function a(a, b, c) {
		if (document.selection) a.focus(), sel = document.selection.createRange(), c ? sel.text = b + sel.text + c : sel.text = b, a.focus();
		else if (a.selectionStart || "0" == a.selectionStart) {
			var l = a.selectionStart,
				m = a.selectionEnd,
				n = m;
			c ? a.value = a.value.substring(0, l) + b + a.value.substring(l, m) + c + a.value.substring(m, a.value.length) : a.value = a.value.substring(0, l) + b + a.value.substring(m, a.value.length);
			c ? n += b.length + c.length : n += b.length - m + l;
			l == m && c && (n -= c.length);
			a.focus();
			a.selectionStart = n;
			a.selectionEnd = n
		} else a.value += b + c, a.focus()
	}
	var b = (new Date).toLocaleTimeString(),
		c = document.getElementById("comment") || 0;
	window.SIMPALED = {};
	window.SIMPALED.Editor = {
		daka: function() {
			a(c, "[blockquote]滴！学生卡！打卡时间：" + b, "，请上车的乘客系好安全带~[/blockquote]")
		},
		zan: function() {
			a(c, "[blockquote][F9] 写得好好哟,我要给你生猴子！[/blockquote]")
		},
		cai: function() {
			a(c, "[blockquote][F14] 骚年,我怀疑你写了一篇假的文章！[/blockquote]")
		}
	}
};
$(document).ready(function() {
	if ($(".sidebar").length && $(".sidebar").find(".widget").length && $(window).width() > 991) {
		var e = $(".sidebar").offset().top,
			i = 0,
			o = 0,
			r = 0,
			d = 0,
			l = $($(".footer_").length ? ".footer_" : "footer.footer");
		$(document).bind("DOMSubtreeModified", function() {
		}), $(window).scroll(function() {
			i = $(".sidebar").outerHeight(), o = $($(".footer_").length ? ".footer_" : "footer.footer").offset().top, r = $(".content-wrap").outerHeight()
			if (!(r <= i)) {
				var t = $(window).scrollTop();
				d = Number($("footer.footer").outerHeight()) + Number($(".footer_").outerHeight())+ 0;
				$(window).height() - e > i ? t + i + e > o ? $(".sidebar").removeClass("fixed").addClass("pins").css({
					bottom: 0,
					top: "auto"
				}) : $(".sidebar").removeClass("pins").addClass("fixed").css({
					bottom: "auto",
					top: e
				}) : t + $(window).height() > o ? $(".sidebar").addClass("pins").removeClass("fixed").css({
					bottom: d + 'px'
				}) : t + $(window).height() > e + i ? $(".sidebar").addClass("fixed").removeClass("pins").css({
					bottom: 0
				}) : $(".sidebar").removeClass("fixed").removeClass("pins")
			}
		})
	}
})
window.stap = {}
$(document).on('click', '[etap]', function(event) {
    if ($(this).hasClass('disabled')) {
        return false
    }
    var params = $(this).attr('etap')
    if (params) {
        var fname = params
        if (fname.indexOf('|') > 0) {
            fname = params.split('|')[0]
            params = params.split('|')[1]
            if (Object.prototype.toString.call(params) == '[object Object]') {
                params = $.parseJSON(params)
            }
        } else {
            params = {}
        }
        params.name 
 = fname
        fname = fname.replace(/-/g, '_')
        if (stap[fname]) {
            stap[fname]($(this), params)
        }
    }
})
$("#links3 .linkli").find("a").attr("href","javascript:;");