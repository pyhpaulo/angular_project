import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListRenderComponent } from './components/list-render/list-render.component';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';
import { DataFormComponent } from './components/data-form/data-form.component';


const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'list/:id', component: ItemDetailComponent},
  {path: 'emitter', component:EmitterComponent},
  {path: 'eventos', component:EventosComponent},
  {path: 'if-render', component:IfRenderComponent},
  {path: 'directives', component:DirectivesComponent},
  {path: 'pipes', component:PipesComponent},
  {path: 'two-way-binding', component:TwoWayBindingComponent},
  {path: 'form', component: DataFormComponent}
  


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
