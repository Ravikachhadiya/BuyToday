import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './component/cart/cart.component';
import { HomeComponent } from './component/home/home.component';
import { LoginComponent } from './component/login/login.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';
import { ProductsBySearchComponent } from './component/products-by-search/products-by-search.component';
import { ProductsComponent } from './component/products/products.component';
import { RegistrationComponent } from './component/registration/registration.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product/:id', component: ProductDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'signup', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'category/:id', component: ProductsComponent },
  { path: 'search-product/:word', component: ProductsBySearchComponent },
  { path: ':username/cart', component: CartComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
