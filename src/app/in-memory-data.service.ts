import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 25, name: 'Inacio' },
      { id: 4, name: 'Coates' },
      { id: 10, name: 'Edwards' },
      { id: 24, name: 'Porro' },
      { id: 28, name: 'Pote' },
      { id: 17, name: 'Trincao' },
      { id: 13, name: 'Neto' },
      { id: 1, name: 'Adan' },
      { id: 2, name: 'M. Reis' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}