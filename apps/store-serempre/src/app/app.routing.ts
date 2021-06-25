import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './view/product/product.component';

const default_product = '/product/2';

const routes: Routes = [
  { path: '', redirectTo: default_product, pathMatch: 'full' },
  { path: 'product', redirectTo: default_product, pathMatch: 'full' },
  { path: 'product/:id', component: ProductComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
