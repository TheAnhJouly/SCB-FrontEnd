$(document).ready(function(){
	$('.bar').on('click',function(){
		$(this).css({'display':'none'})
		$('.close').css({'display':'block'})
		$('.menu_responsive').slideToggle(500)
	})
	$('.close').on('click',function(){
		$(this).css({'display':'none'})
		$('.bar').css({'display':'block'})
		$('.menu_responsive').slideToggle(500)
	})
	$('.plus').on('click',function(){
		$(this).css({'display':'none'})
		$(this).next().css({'display':'block'})
		$(this).siblings('.text_sp').slideToggle(500)
	})
	$('.minus').on('click',function(){
		$(this).css({'display':'none'})
		$(this).prev().css({'display':'block'})
		$(this).siblings('.text_sp').slideToggle(500)
	})

	$("#formDemo").validate({
		rules:{
			email: {
				required:true,
				email:true
			}
		},
		messages:{
		 	email:{
				required:"Vui long nhap email",
				email:"Nhap email dung dinh dang"
			}
		}
	});
})
var slideIndex=1;
slideShow();

setInterval(function(){
	slideIndex=slideIndex+1;
	slideShow();
},3000)
function slideShow(){

	var slides = document.getElementsByClassName('slider8');
	if(slideIndex > slides.length){
		slideIndex=1;
	}
	if(slideIndex < 1){
		slideIndex= slides.length;
	}
	for(var i=0; i<slides.length; i++){
		slides[i].classList.remove('active');
	}
	slides[slideIndex-1].classList.add('active');

	var dots=document.getElementsByClassName('dot');
	for(var j=0; j<dots.length; j++){
		dots[j].classList.remove('dot_active');
	}
	dots[slideIndex-1].classList.add('dot_active');
}
function activeDot(n){
	slideIndex=n;
	slideShow();
}