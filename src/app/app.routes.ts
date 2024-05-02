import { Routes } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
  {
    path: '',
    component: HeroComponent,
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
];
