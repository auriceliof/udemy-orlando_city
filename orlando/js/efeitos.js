/*	EFEITOS JAVASCRIPT */


$(document).ready(function(){


	/* PASSAR O MOUSE NA LOGO */

	$("#logo").on("mouseover",function(){

		$("#banner h1").addClass("efeito");

	}).on("mouseout",function(){

		$("#banner h1").removeClass("efeito");

		});


	/* CLICAR DENTRO DO MENU SEARCH */

	$("#input-search").on("focus",function(){

		$("li.search").addClass("ativo");

	}).on("blur",function(){

		$("li.search").removeClass("ativo")

		});


	/* PASSAR NOTÍCIAS */

	$(".thumbnails").owlCarousel({
			
		autoPlay: 4000,
		items : 4,
	});


	/* BOTÕES DE NAVEGAÇÃO DAS NOTICIAS NOS SMARTPHONES */

	var owl = $(".thumbnails").data('owlCarousel');

	$('#btn-news-prev').on("click", function(){

		owl.prev();
	});


	$('#btn-news-next').on("click", function(){

		owl.next();
	});


	/* MENU */

	$("#btn-bars").on("click", function(){

		$("header").toggleClass("open-menu");

	});

	/* SEARCH */

	$("#btn-search").on("click", function(){

		$("header").toggleClass("open-search");

	});



	/* PASSAR PRODUTOS */

	$("#destaque-produtos").owlCarousel({
			
		autoPlay: 6000,
		items : 1,		
	});


	/* BOTÕES DE NAVEGAÇÃO DOS PRODUTOS */

	var owlDestaque = $("#destaque-produtos").data('owlCarousel');

	$('#btn-destaque-prev').on("click", function(){

		owlDestaque.prev();
	});


	$('#btn-destaque-next').on("click", function(){

		owlDestaque.next();
	});


	/* ESTRELAS DO PRODUTO */
	$('.estrelas').each(function(){
		$(this).raty ({
			starHalf : 'lib/raty/lib/images/star-half.png',
			starOff : 'lib/raty/lib/images/star-off.png',
			starOn : 'lib/raty/lib/images/star-on.png',
			score : parseFloat($(this).data("score"))
		});		
	});

});


