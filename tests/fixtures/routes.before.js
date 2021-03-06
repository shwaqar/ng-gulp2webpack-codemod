function config($stateProvider, $urlMatcherFactoryProvider) {

  $stateProvider
    .state('foo', {
      url: '/foo',
      onEnter: function($state) {
        $state.transition.finally(function() {
          $state.go('foobar');
        });
      }
    })
    .state('bar', {
      url: '/bar',
      templateUrl: 'app/error-page/error-page.html',
      controller: 'BarController',
      controllerAs: 'vm',
      resolve: {
        resolve: function(resolver) {
          return resolver.resolve('foobar');
        }
      }
    });

}