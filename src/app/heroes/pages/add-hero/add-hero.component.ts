import { Component, OnInit } from '@angular/core';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styles: [
    `
      img {
        width: 100%;
        border-radius: 5px;
      }
    `,
  ],
})
export class AddHeroComponent implements OnInit {
  publishers: any[] = [
    {
      id: 'DC Comics',
      desc: 'DC - Comics',
    },
    {
      id: 'Marvel Comics',
      desc: 'Marvel - Comics',
    },
  ];

  heroe: Heroe = {
    superhero: '',
    alter_ego: '',
    characters: '',
    first_appearance: '',
    publisher: Publisher.DCComics,
    alt_img: '',
  };

  constructor(
    private heroesService: HeroesService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    if (!this.router.url.includes('edit')) return;

    this.activatedRoute.params
      .pipe(switchMap(({ id }) => this.heroesService.getHeroById(id)))
      .subscribe((heroe) => (this.heroe = heroe));
  }

  saveHero(): void {
    if (this.heroe.superhero.trim().length === 0) {
      return;
    }

    if (this.heroe.id) {
      this.heroesService
        .updateHero(this.heroe)
        .subscribe((heroe) => this.showSnackbar('Registro actualizado'));
    } else {
      this.heroesService.addHero(this.heroe).subscribe((heroe) => {
        this.router.navigate(['/heroes/edit', heroe.id]);
        this.showSnackbar('Registro actualizado');
      });
    }
  }

  deleteHero(): void {
    this.heroesService.deleteHero(this.heroe.id!).subscribe(() => {
      this.router.navigate(['/heroes']);
    });
  }

  showSnackbar(msg: string): void {
    const config: MatSnackBarConfig = {
      duration: 2500,
    };

    this._snackBar.open(msg, 'OK', config);
  }
}
