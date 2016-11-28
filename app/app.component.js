(function (app) {

   app.AppComponent = ng.core
      .Component({
         selector : "my-app",
         templateUrl : 'app/app.component.html'
      })
      .Class({
         constructor: function () {
            this.title = "Tour of Heroes w/ nav";
         }
      });

})(window.app || (window.app = {}));
