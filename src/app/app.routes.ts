import { RouterModule, Routes } from '@angular/router';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { BuyNowComponent } from './buy-now/buy-now.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
        { path: '', component: FlipkartComponent },
        { path: 'buy-now', component: BuyNowComponent }
      ];
      
      @NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
      })
      export class AppRoutingModule { }
