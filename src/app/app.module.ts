import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './Mycomponent/product/product.component';
import { ProductItemComponent } from './Mycomponent/product-item/product-item.component';
import { RouterModule, Routes } from '@angular/router';
import { NavBarComponent } from './Mycomponent/nav-bar/nav-bar.component';
import { CarouselComponent } from './Mycomponent/carousel/carousel.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { ShoesComponent } from './Mycomponent/shoes/shoes.component';
import { AccessoriesComponent } from './Mycomponent/accessories/accessories.component';
import { HomeAcceComponent } from './Mycomponent/home-acce/home-acce.component';
import { CartComponent } from './Mycomponent/cart/cart.component';
import { DataTransferService } from './data-transfer.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductItemComponent,
    NavBarComponent,
    CarouselComponent,
    FooterComponent,
    ShoesComponent,
    AccessoriesComponent,
    HomeAcceComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataTransferService],
  bootstrap: [AppComponent]
})
export class AppModule { }