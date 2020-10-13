import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule,routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './buyer/user/user.component';
import { AdminComponent } from './seller/admin/admin.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CartComponent } from './buyer/user/cart/cart.component';
import { ProductComponent } from './product/product.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ProductService } from 'src/services/product.service';
import {LoginService} from 'src/services/login.service';
import {RegistrationService} from 'src/services/registration.service';

import { StartshoppingComponent } from './buyer/user/startshopping/startshopping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";

import { AddComponent } from './seller/admin/add/add.component';
import { ViewComponent } from './seller/admin/view/view.component';
import { EditComponent } from './seller/admin/edit/edit.component';
import { DisplayComponent } from './seller/admin/display/display.component';
import { DisplayuserComponent } from './buyer/user/displayuser/displayuser.component';





import { Routes } from '@angular/router';

import { MatSliderModule} from '@angular/material/slider' ;
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {AgGridModule} from 'ag-grid-angular';
import {MatSortModule} from '@angular/material/sort';


import { MatInputModule } from '@angular/material/input';






import { NgpSortModule } from 'ngp-sort-pipe';

 
 import { NavigateGuard } from './guard/navigate.guard';
 import { MatIconModule } from '@angular/material/icon';
 import {MatDividerModule} from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import {MatToolbarModule} from '@angular/material/toolbar';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CanDeactivateAddGuard, CanDeactivateEditGuard } from 'src/services/can-deactivate.service';
import { InterceptorService } from './interceptor/interceptor.service';
import {  HoverDirective } from './hover.directive';
import { HomeDataService } from 'src/services/HomeDataService';

@NgModule({
  declarations: [
    AppComponent,
    DisplayuserComponent,
    routingComponents,
    HomeComponent,
    UserComponent,
    AdminComponent,
    CartComponent,
    ProductComponent,
    AddComponent,
    ViewComponent,
    EditComponent,
    
    StartshoppingComponent,
    CartComponent,
    DisplayComponent,
    DisplayComponent,
    DisplayuserComponent,
    PagenotfoundComponent,
    HoverDirective

    
   
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatSortModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    NgpSortModule,
    MatTableModule,
    MatDividerModule,
    AgGridModule.withComponents([]),
   
    JwtModule.forRoot({
      config: {
        tokenGetter: () =>{
          return localStorage.getItem('access_token');
        },
        whitelistedDomains: ['localhost:4200','localhost:3000','localhost:8080'],
        blacklistedRoutes:[]
      }
    }),
    BrowserAnimationsModule
  ],
  providers: [HomeDataService,CanDeactivateEditGuard,ProductService,LoginService,RegistrationService,CanDeactivateAddGuard,{provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
