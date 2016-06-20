(function(module) {
  var adminController = {};

  adminController.index = function() {
    /* TODO: Reveal only the articles section! */
    $('.tab-content').hide();
    $('#admin').fadeIn();
  };

  module.adminController = adminController;
})(window);
