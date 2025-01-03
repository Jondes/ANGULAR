import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';

export const routes: Routes = [
    {
        path:'home-component',
        component: HomeComponent
    },
    {
        path:'about-component',
        // component: AboutComponent
        loadComponent:()=>
            import('./about/about.component').then((c) => c.AboutComponent),
    },
];
