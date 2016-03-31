import {Component} from 'angular2/core';
import {Hero} from './services/hero';

@Component({
    selector: 'my-app',
    templateUrl: './views/main.html'
})

export class AppComponent { 
	title: string;
	favoriteHero: string;
	allHeros: array;

	constructor(){
		this.title = 'Marvel Heros';
		this.allHeros = [ 
			new Hero( 1, 'Ironman' ), 
			new Hero( 2, 'Thor' ), 
			new Hero( 3, 'Spiderman' ), 
			new Hero( 4, 'Incredible Hulk' ), 
			new Hero( 5, 'Captain America' )
		];
		this.favoriteHero = this.allHeros[0];
	}

	addHero( hero: HTTPInputElement ){
		if( hero.value ){
			this.allHeros.push( new Hero( this.allHeros.length + 1, hero.value ) );
			hero.value = null;
		}
	}
}