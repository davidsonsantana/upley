$(function(){

	var userFeed = new Instafeed({
		get: 'user',
		userId: 421500595,
		accessToken: '174534218.44724b7.4031c040a5cd48089a25759d46801e9a',
		template: '<li class="col-md-3 col-sm-4 col-xs-6"><a href="{{image}}"><img class="img-responsive img-thumbnail" src="{{image}}" /></a></li>',
		resolution: 'standard_resolution',
		limit: '12',
		after: function(){
			$('#instafeed li a').colorbox({
				rel: 'galeria',
				maxWidth: '80%',
				maxHeight: '90%',
				previous: 'Foto Anterior',
				next: 'Próxima Foto',
				close: 'Fechar'
			});
		}
	});
	userFeed.run();
  
});