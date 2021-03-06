(function () {
  'use strict';

  angular
    .module('app.core')
    .directive('gtSeasonBg', gtSeasonBg);

  /** @ngInject */
  function gtSeasonBg(moment) {
    var currentMonth = angular.lowercase(moment().format('MMMM'));

    return {
      restrict: 'A',
      link: function (scope, element) {
        element.css('background-image', 'url("/assets/images/backgrounds/' + currentMonth + '.jpg")');
        element.css('background-size', 'cover');
        element.css('background-position', '0% 0%');
        element.css('background-repeat', 'no-repeat');
      }
    };
  }
})();
