console.log(Cast);

// wait for the document to be loaded



$(document).ready(function() {
  
  var userFeed = new Instafeed ({
  get: 'user',
  userId: '3037422987',
  limit: 9,
  resolution: 'standard_resolution',
  accessToken: '3037422987.1677ed0.9d76fafa397544e3b9b09f9014adfde2',
  sortBy: 'most-recent',
  template: '<div class="gallery'><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',

   });
    
  userFeed.run();
   
});