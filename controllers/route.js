var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider) {
	$routeProvider
	
	
	.when('/dashboard', {
			templateUrl: 'views/dashboard.html',
            controller: 'testCtrl',
		})
	.when('/elements', {
			templateUrl: 'views/elements.html'
		})
	.when('/buttons', {
			templateUrl: 'views/buttons.html',
            controller: 'buttonsCtrl',
			
		})
		.when('/content-slider', {
			templateUrl: 'views/content-slider.html'
		})
		.when('/jquery-ui', {
			templateUrl: 'views/jquery-ui.html'
        
		})
		.when('/jqgrid', {
			templateUrl: 'views/jqgrid.html',
            controller: 'jqgridCtrl',
        
		})
		.when('/form-elements', {
			templateUrl: 'views/form-elements.html'
		})
		
		.when('/form-elements-2', {
			templateUrl: 'views/form-elements-2.html'
		})
		.when('/form-wizard', {
			templateUrl: 'views/form-wizard.html'
		})
		
		.when('/dropzone', {
			templateUrl: 'views/dropzone.html'
		})
		.when('/widgets', {
			templateUrl: 'views/widgets.html',
            controller: 'widgetsCtrl',
		})
		.when('/calendar', {
			templateUrl: 'views/calendar.html'
		})
		.when('/inbox', {
			templateUrl: 'views/inbox.html'
		})
		.when('/invoice', {
			templateUrl: 'views/invoice.html',
			controller: 'invoiceCtrl',
		})
		.when('/faq', {
			templateUrl: 'views/faq.html'
		})
		.when('/tables', {
			templateUrl: 'views/tables.html',
			controller: 'tableCtrl',
		})
		.when('/form-wizard', {
			templateUrl: 'views/form-wizard.html'
		})
		.when('/mobile-menu-2', {
			templateUrl: 'views/mobile-menu-2.html'
		})
		.when('/mobile-menu-1', {
			templateUrl: 'views/mobile-menu-1.html'
		})
		.when('/mobile-menu-3', {
			templateUrl: 'views/mobile-menu-3.html'
		})
		.when('/pricing', {
			templateUrl: 'views/pricing.html',
            controller: 'ptableCtrl',
		})
		
		.when('/gallery', {
			templateUrl: 'views/gallery.html',
			controller: 'galleryCtrl',
         
		})
		.when('/nestable-list', {
			templateUrl: 'views/nestable-list.html'
		})
		.when('/timeline', {
			templateUrl: 'views/timeline.html'
		})
		.when('/profile', {
			templateUrl: 'views/profile.html'
		})
		.when('/search', {
			templateUrl: 'views/search.html'
		})
		.when('/error-404', {
			templateUrl: 'views/error-404.html',
			controller: 'errorCtrl',
		})
		.when('/error-500', {
			templateUrl: 'views/error-500.html',
			controller: 'errorsCtrl',
		})
		.when('/email', {
			templateUrl: 'views/email.html',
            controller: 'emailCtrl',
		})
		.when('/typography', {
			templateUrl: 'views/typography.html'
		})
		.when('/wysiwyg', {
			templateUrl: 'views/wysiwyg.html'
		})
		.when('/treeview', {
			templateUrl: 'views/treeview.html'
		})
		.when('/grid', {
			templateUrl: 'views/grid.html'
		});
});


