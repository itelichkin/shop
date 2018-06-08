import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {HomePageComponent} from './pages/home-page/home-page.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';
import {PageDefaultComponent} from './pages/page-default/page-default.component';
import {SweetsPageComponent} from './pages/sweets-page/sweets-page.component';
import {PizzaPageComponent} from './pages/pizza-page/pizza-page.component';
import {IceCreamPageComponent} from './pages/ice-cream-page/ice-cream-page.component';
import {ModifyObjectComponent} from './pages/home-page/modify-object/modify-object.component';


export const routes: Routes = [
    {path: '', component: PageDefaultComponent},
    {path: 'home', component: HomePageComponent},
    {path: 'objects-list/:type/:id/:action', component: ModifyObjectComponent},
    {path: 'objects-list/:new', component: ModifyObjectComponent},
    {path: 'sweets', component: SweetsPageComponent},
    {path: 'pizza', component: PizzaPageComponent},
    {path: 'ice-cream', component: IceCreamPageComponent},
    {path: '**', component: PageNotFoundComponent}
  ]
;

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

