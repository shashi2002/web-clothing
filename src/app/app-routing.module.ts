import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './Mycomponent/product/product.component';
import { NavBarComponent } from './Mycomponent/nav-bar/nav-bar.component';
import { ProductItemComponent } from './Mycomponent/product-item/product-item.component';
import { CarouselComponent } from './Mycomponent/carousel/carousel.component';
import { FooterComponent } from './Mycomponent/footer/footer.component';
import { ShoesComponent } from './Mycomponent/shoes/shoes.component';
import { AccessoriesComponent } from './Mycomponent/accessories/accessories.component';
import { AboutComponent } from './Mycomponent/about/about.component';
import { CartComponent } from './Mycomponent/cart/cart.component';

const routes: Routes = [
  {path:'', component:CarouselComponent},
  { path: 'about', component: AboutComponent},
  {path:'clothing',component: ProductComponent},
  {path:'shoes',component: ShoesComponent},
  {path:'accessories',component: AccessoriesComponent},
  {path:'cart',component: CartComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
