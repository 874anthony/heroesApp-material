import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Main Components
import { HomeComponent } from './pages/home/home.component';
// Components
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroesListComponent } from './pages/heroes-list/heroes-list.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { HeroDetailsComponent } from './pages/hero-details/hero-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'list',
        component: HeroesListComponent,
      },
      {
        path: 'add',
        component: AddHeroComponent,
      },
      {
        path: 'edit/:id',
        component: AddHeroComponent,
      },
      {
        path: 'search',
        component: SearchHeroComponent,
      },
      {
        path: ':id',
        component: HeroDetailsComponent,
      },
      {
        path: '**',
        redirectTo: 'list',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
