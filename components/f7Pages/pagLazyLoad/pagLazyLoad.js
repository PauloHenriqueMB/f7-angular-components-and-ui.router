app.angular.component('pagLazyLoad', {

  templateUrl: 'components/f7Pages/pagLazyLoad/pagLazyLoad.html',

  controller: function () {
    app.f7.initImagesLazyLoad('#page-lazy-load');
  }

});