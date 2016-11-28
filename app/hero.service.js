(function (app) {

    app.HeroService =
        ng.core.Class({
            constructor: function () {
                console.log("in service");
                this.getHeroes = function () {
                    return new Promise( function (resolve, reject) {
                        try {
                            setTimeout(resolve(HEROES), 500);
                        } catch (e) {
                            reject(e.message);
                        }
                    });
                };
            }
        });

})(window.app || (window.app = {}));
