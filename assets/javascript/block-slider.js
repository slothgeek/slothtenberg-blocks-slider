jQuery(document).ready(function($){

	if ($(".wp-block-sg-block-slider")[0]){
		let elms = document.getElementsByClassName( 'splide' );

		for ( var i = 0; i < elms.length; i++ ) {
			let hasAutoscroll = JSON.parse(elms[ i ].dataset.splide).hasOwnProperty("autoScroll");
			if(hasAutoscroll){
				new Splide( elms[ i ] ).mount(window.splide.Extensions);
			}else{
				new Splide( elms[ i ] ).mount();
			}

		}
	}


});
