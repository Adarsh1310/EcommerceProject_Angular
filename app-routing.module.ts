import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import{LoginComponent} from './login/login.component';
import{RegistrationComponent} from './registration/registration.component'
import { HomeComponent } from './home/home.component';

import { UserComponent } from './buyer/user/user.component';
import{AdminComponent} from './seller/admin/admin.component';
import{AddComponent} from './seller/admin/add/add.component';
import{ViewComponent} from './seller/admin/view/view.component';

import{StartshoppingComponent} from './buyer/user/startshopping/startshopping.component';
import{CartComponent} from './buyer/user/cart/cart.component';
import{EditComponent} from './seller/admin/edit/edit.component';
import{GuardService} from './guard.service';
import{LoginService} from 'src/services/login.service';
import { AuthGuard } from './guard/auth.guard';
import {AdminAuthGuard} from './guard/adminauth.guard';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
const routes: Routes = [{path:'login',component:LoginComponent},
{path:'registration',component:RegistrationComponent},
{path:'home',component:HomeComponent},
{path:'' , redirectTo:'/home',pathMatch:'full'},
{
path: 'buyer',
  loadChildren: () => import('src/app/buyer/user/buyer.module').then(m => m.BuyerModule)

 },
{path: 'seller',
   loadChildren: () => import('src/app/seller/admin/seller.module').then(m => m.SellerModule)
  },

 {path:'**' , component:PagenotfoundComponent} ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents=[LoginComponent,RegistrationComponent,HomeComponent,AddComponent,AdminComponent,ViewComponent,UserComponent,StartshoppingComponent,CartComponent,EditComponent]