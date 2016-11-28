(function (app) {

    var heroes = [];

    app.DashboardComponent = ng.core
        .Component({
            selector: "my-dashboard",
            templateUrl: 'app/dashboard.component.html'
        })
        .Class({
            constructor: [
                app.HeroService,
                function (heroService) {
                    this.title = "Top heroes";
                    this.getHeroes = function () {
                        heroService.getHeroes()
                            .then(result => this.heroes = result.slice(1, 5));
                    };
                }
            ]
        });

    app.DashboardComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
})(window.app || (window.app = {}));
