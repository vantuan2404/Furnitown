
$(document).ready(function(){$(this).on('scroll',function(){let scrollTop=document.documentElement.scrollTop;let nav_menu=$('.header_page');if(scrollTop>270){nav_menu.slideDown();nav_menu.addClass('active')}else{nav_menu.slideUp()}
let backToTop=$('footer .backToTop');backToTop.on('click',function(){window.scrollBy({top:-document.body.offsetHeight,behavior:"smooth",})})})
$('.menu_mobile .close').on('click',function(){menu_mobile.removeClass('show');$('.overplay-mobile').css('display','none');$('.push').removeClass('add')})
let menu_mobile=$('.menu_mobile');$('.menu').on('click',function(){menu_mobile.addClass('show');$('.overplay-mobile').css('display','block');$('.push').addClass('add')})
$('.overplay-mobile').on('click',function(){menu_mobile.removeClass('show');$('.overplay-mobile').css('display','none');$('.push').removeClass('add')})
let overplay=$('.overplay');let popup=$('.tuvan-modal');$('.servicepage .main-content .btn-contact').on('click',function(e){e.preventDefault();popup.addClass('active');overplay.addClass('active')})
$('.main-content .row3  .col-white .btn-product').on('click',function(e){e.preventDefault();popup.addClass('active');overplay.addClass('active')})
$('.tuvan-modal .close').on('click',function(e){e.preventDefault();popup.removeClass('active');overplay.removeClass('active')})
$('.overplay').on('click',function(e){e.preventDefault();popup.removeClass('active');overplay.removeClass('active')})
$('.projectpage .option_current').on('click',function(){$('.select_ul').stop().slideUp();$(this).next().stop().slideToggle();$('.option_current-icon').toggleClass('active')})
$('.select_ul li a').on('click',function(){var current=$(this).html();$('.option_current a').html(current);$('.select_ul').stop().slideUp();$('.option_current-icon').toggleClass('active')})
$('.hambuger').on('click',function(){let menu_mobile=$('.menu_mobile');menu_mobile.addClass('show')})
let btn_submit=()=>{$('.contactpage .row4 .btn').on('click',function(){function isEmail(email){var regex=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;return regex.test(email)}
var vnf_regex=/((09|03|07|08|05)+([0-9]{8})\b)/g;let name=$.trim($(".contactpage .row2 #name").val());let email=$.trim($(".contactpage .row3 #main").val());let phone=$.trim($(".contactpage .row3 #phone").val());var checkname=!0;var checkemail=!0;var checkphone=!0;if(name==""){$(".contactpage .row2 #name").css('border-bottom','1px solid #ff0000');checkname=!1}else{$(".contactpage .row2 #name").css('border-bottom','1px solid #fff');checkname=!0}
if(!isEmail(email)){$(".contactpage .row3 #main").css('border-bottom','1px solid #ff0000');checkemail=!1}else if(email==""){$(".contactpage .row3 #main").css('border-bottom','1px solid #ff0000');checkemail=!1}else{$(".contactpage .row3 #main").css('border-bottom','1px solid #fff');checkemail=!0}
if(phone.length!=10){$(".contactpage .row3 #phone").css('border-bottom','1px solid #ff0000');checkphone=!1}else if(phone==""){$(".contactpage .row3 #phone").css('border-bottom','1px solid #ff0000');checkphone=!1}else if(vnf_regex.test(phone)==!1){$(".contactpage .row3 #phone").css('border-bottom','1px solid #ff0000');checkphone=!1}else{$(".contactpage .row3 #phone").css('border-bottom','1px solid #fff');checkphone=!0}
var myJSON='{"cForm":['+'{"check":"Bạn đã gửi thành công."},'+'{"check":"Thông tin chưa chính xác hoặc thiếu trường quy định."},'+'{"check":"Không được bỏ trống trường quy định."}]}';obj=JSON.parse(myJSON)
if(checkname==!0&&checkemail==!0&&checkphone==!0){$('.send_modal').addClass('show-modal');$('.send_modal .body-modal p').html(obj.cForm[0].check)}else if(checkname==!0||checkemail==!0||checkphone==!0){$('.send_modal').addClass('show-modal');$('.send_modal .body-modal p').html(obj.cForm[1].check)}else{$('.send_modal').addClass('show-modal');$('.send_modal .body-modal p').html(obj.cForm[2].check)}})
$('.send_modal .footer-modal .btn-modal').on('click',function(){$('.send_modal').removeClass('show-modal')})}
btn_submit();let next=$('.main-content .bot .next');let prev=$('.main-content .bot .prev');next.on('click',function(e){e.preventDefault();let item=$('.main-content .list .list-item');item.removeClass('active');item.next().addClass('active')})
prev.on('click',function(e){e.preventDefault();let item=$('.main-content .list .list-item');item.removeClass('active');item.prev().addClass('active')})
let list_tab_project=$('.projectpage .tab-title a')
$('.projectpage .tab-content .row-content').hide();$('.projectpage .tab-content .row-content:first-child').show()
list_tab_project.on('click',function(e){e.preventDefault();$('.projectpage .tab-title .active').removeClass('active');$(this).addClass('active');let current_tab=$(this).attr("data-list");$('.projectpage .tab-content .row-content').hide();$('.'+current_tab).show()})
let list_tab_new=$('.newspage .tab-title a')
$('.newspage .tab-content .row-content').hide();$('.newspage .tab-content .row-content:first-child').show()
list_tab_new.on('click',function(e){e.preventDefault();$('.newspage .tab-title .active').removeClass('active');$(this).addClass('active');let current_tab=$(this).attr("data-list");$('.newspage .tab-content .row-content').hide();$('.'+current_tab).show()})
let menu_li=$('.menu_mobile .mobile_nav li');menu_li.hover(function(){$(this).siblings().addClass('dark')},function(){menu_li.removeClass('dark')})
let $carousel=$('.homepage .slider_list');$carousel.flickity({cellAlign:'left',wrapAround:!0,contain:!0,pageDots:!1,prevNextButtons:!1,}).on('change.flickity',function(event,index){if(index===0){gsap.to('.homepage .slider .slider_list .caption h2',{y:0,opacity:1,duration:0.6,delay:.6})
gsap.to('.homepage .slider .slider_list .caption h2::after',{y:0,opacity:1,duration:0.6,delay:.6})
gsap.to('.homepage .slider .slider_list .caption p',{y:0,opacity:1,duration:0.6,delay:.6})
gsap.to('.homepage .slider .slider_list .caption .btn-main',{opacity:1,duration:0.6,delay:.8,y:0,})}else{gsap.to('.homepage .slider .slider_list .caption h2',{y:20,opacity:0})
gsap.to('.homepage .slider .slider_list .caption h2::after',{opacity:0})
gsap.to('.homepage .slider .slider_list .caption p',{y:-20,opacity:0,})
gsap.to('.homepage .slider .slider_list .caption .btn-main',{opacity:0,})}
if(index===1){gsap.to('.homepage .slider .slider_list .caption h2',{y:0,opacity:1,duration:0.6,delay:.6})
gsap.to('.homepage .slider .slider_list .caption h2::after',{y:0,opacity:1,duration:0.6,delay:.6})
gsap.to('.homepage .slider .slider_list .caption p',{y:0,opacity:1,duration:0.6,delay:.6})
gsap.to('.homepage .slider .slider_list .caption .btn-main',{opacity:1,duration:0.6,delay:.8,y:0,})}else{gsap.to('.homepage .slider .slider_list .caption h2',{y:20,opacity:0})
gsap.to('.homepage .slider .slider_list .caption h2::after',{opacity:0})
gsap.to('.homepage .slider .slider_list .caption p',{y:-20,opacity:0,})
gsap.to('.homepage .slider .slider_list .caption .btn-main',{opacity:0,})}})
setInterval(trigger,5000);function trigger(){let event=new Event("click");document.querySelector(".slider .arrow-prev").dispatchEvent(event)}
$('.slider .arrow-prev').on('click',function(e){e.preventDefault();$('.slider_list').flickity('previous')});$('.slider .arrow-next').on('click',function(e){e.preventDefault();$('.slider_list').flickity('next')})})
$(window).on('load',function(){$('.loader').fadeOut(1500)})