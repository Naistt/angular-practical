import { Routes } from '@angular/router';
import { ListsComponent } from './lists/lists.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ReusableComponent } from './reusable/reusable.component';

export const routes: Routes = [
    {
        path: '',
        title: 'Home',
        component: HomeComponent,
    },
    {
        path: 'lists',
        title: 'Generic Lists',
        component: ListsComponent,
    },
    {
        path: 'reusable',
        title: 'Reusable Components',
        component: ReusableComponent,
    }
];
