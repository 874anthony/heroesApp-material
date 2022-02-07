import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

// 3rd-party modules
import { FlexLayoutModule } from '@angular/flex-layout';

// Compoents
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { HeroeImagePipe } from './pipes/heroe-image.pipe';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HeroDetailsComponent,
    HomeComponent,
    HeroesListComponent,
    HeroeCardComponent,
    HeroeImagePipe,
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    FormsModule,
  ],
})
export class HeroesModule {}
