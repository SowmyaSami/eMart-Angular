import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemListComponent } from './emart/item/item-list/item-list.component';
import { ItemDisplayComponent } from './emart/item/item-display/item-display.component';
import { CartListComponent } from './emart/cart/cart-list/cart-list.component';
import { BillViewComponent } from './emart/bill/bill-view/bill-view.component';
import { BillListComponent } from './emart/bill/bill-list/bill-list.component';
import { LoginComponent } from './emart/signup/login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { BuyerSignupComponent } from './emart/signup/buyer-signup/buyer-signup.component';
import { SellerSignupComponent } from './emart/signup/seller-signup/seller-signup.component';
import { HomepageComponent } from './homepage/homepage.component';


const routes: Routes = [{

  path: 'login',
  component: LoginComponent
},
{
  path: 'item-list',
  component: ItemListComponent
},
{
  path: 'item-display/:iId',
  component: ItemDisplayComponent
},
{
  path: 'cart-list',
  component: CartListComponent
},
{
  path: 'bill-view',
  component: BillViewComponent
},
{

  path: 'bill-list',
  component: BillListComponent
},
{

  path: 'logout',
  component: LogoutComponent
},
{

  path: 'buyer-signup',
  component: BuyerSignupComponent
},
{

  path: 'seller-signup',
  component: SellerSignupComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
