import { Component } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styles: [],
})
export class SearchHeroComponent {
  field: string = '';
  heroes: Heroe[] = [];

  selectedHero: Heroe | undefined;

  constructor(private heroesService: HeroesService) {}

  search() {
    this.heroesService
      .getSuggestions(this.field.trim())
      .subscribe((heroes) => (this.heroes = heroes));
  }

  selectedOption(event: MatAutocompleteSelectedEvent) {
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }

    const heroe: Heroe = event.option.value;
    this.field = heroe.superhero;

    this.heroesService
      .getHeroById(heroe.id!)
      .subscribe((hero) => (this.selectedHero = hero));
  }
}
