import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StoreComponent } from './store/store.component';
import { CartDetailComponent } from './cart-detail/cart-detail.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { StoreFirstGuard } from './store-first-guard';
 
const routes: Routes = [
//  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // { path: 'store', component: StoreComponent, canActivate:[StoreFirstGuard] },
  // { path: 'cart', component: CartDetailComponent, canActivate:[StoreFirstGuard] },
  // { path: 'checkout', component: CheckoutComponent, canActivate:[StoreFirstGuard] },
  // { path: '**', redirectTo: '/store' }

  { path: 'store', component: StoreComponent },
  { path: 'cart', component: CartDetailComponent },
  { path: 'checkout', component: CheckoutComponent },
  { path: '**', redirectTo: '/store' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
