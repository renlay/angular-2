System.register(['angular2/core', './services/hero'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, hero_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (hero_1_1) {
                hero_1 = hero_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.title = 'Marvel Heros';
                    this.allHeros = [
                        new hero_1.Hero(1, 'Ironman'),
                        new hero_1.Hero(2, 'Thor'),
                        new hero_1.Hero(3, 'Spiderman'),
                        new hero_1.Hero(4, 'Incredible Hulk'),
                        new hero_1.Hero(5, 'Captain America')
                    ];
                    this.favoriteHero = this.allHeros[0];
                }
                AppComponent.prototype.addHero = function (hero) {
                    if (hero.value) {
                        this.allHeros.push(new hero_1.Hero(this.allHeros.length + 1, hero.value));
                        hero.value = null;
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: './views/main.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map