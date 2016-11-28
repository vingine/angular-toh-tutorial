(function (app) {

    var heroes = [];

    app.HeroesComponent =
        ng.core.Component({
            selector: 'my-heroes',
            templateUrl: 'app/heroes.component.html',
            styleUrls: ['app/heroes.component.css'],
            directives: [app.HeroDetailComponent]
        })
        .Class({
            constructor: [
                app.HeroService,
                function (heroService) {
                    this.getHeroes = function () {
                        heroService.getHeroes()
                            .then(heroes => this.heroes = heroes);
                    };
                }
            ]
        });

    app.HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };

    app.HeroesComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
})(window.app || (window.app = {}));