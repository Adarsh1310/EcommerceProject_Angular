import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { AuthGuard } from 'src/app/guard/auth.guard';
import { UserComponent } from './user.component';
import { StartshoppingComponent } from './startshopping/startshopping.component';
import { CartComponent } from './cart/cart.component';
import { NavigateGuard } from 'src/app/guard/navigate.guard';
import { DisplayuserComponent } from 'src/app/buyer/user/displayuser/displayuser.component';



const routes: Routes = [
    {
        path: '', component:DisplayuserComponent, canActivate:[NavigateGuard,AuthGuard],canActivateChild:[NavigateGuard,AuthGuard],
          children:[
            {
              path:'',component:UserComponent
            },
            {
              path:'cart', component:CartComponent
             },
            {
              path:'startshopping', component:StartshoppingComponent
            },
             
            
        ]




    }];
    @NgModule({
        imports: [RouterModule.forChild(routes)],
        exports: [RouterModule]
    })
    export class BuyerRoutingModule { }