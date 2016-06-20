(function(module) {
  var articleController = {};

  articleController.index = function() {
    /* TODO: Reveal only the articles section! */
    $('.tab-content').toggle();
    $('#articles').fadeIn();
  };

  module.articleController = articleController;
})(window);
