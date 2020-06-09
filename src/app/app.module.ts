import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FooterTemplateComponent } from './footer-template/footer-template.component';
import { LoginComponent } from './login/login.component';
import { FoodComponent } from './food/food.component';
import { CategoryComponent } from './category/category.component';
import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { SlideBarComponent } from './slide-bar/slide-bar.component';
import { FeaturedComponent } from './featured/featured.component';
import { BannerComponent } from './banner/banner.component';
import { LatestProductComponent } from './latest-product/latest-product.component';
import { FormBlogComponent } from './form-blog/form-blog.component';
import { DetailComponent } from './detail/detail.component';
import { BlogComponent } from './blog/blog.component';
import { ContactComponent } from './contact/contact.component';
import { MapComponent } from './map/map.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { DetailBannerComponent } from './detail-banner/detail-banner.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {RouterModule, Routes} from '@angular/router';
import { HomeComponentComponent } from './home-component/home-component.component';
import { ReactiveFormsModule} from '@angular/forms';
import { ShopHomeComponent } from './shop-home/shop-home.component';
import { NavSearchComponent } from './nav-search/nav-search.component';
import {HttpClientModule} from '@angular/common/http';

const routes: Routes = [
  {path: '',
  component: HomeComponentComponent},
  {path: 'register',
  component: CheckOutComponent},
  {path: 'shop-home',
    component: ShopHomeComponent},
  {path: 'shopping-cart',
  component: ShoppingCartComponent},
  {path: 'blog',
    component: BlogComponent},
  {path: 'contact',
    component: ContactComponent},
  {path: 'detail',
    component: ProductDetailComponent},

];

@NgModule({
  declarations: [
    AppComponent,
    FooterTemplateComponent,
    LoginComponent,
    FoodComponent,
    CategoryComponent,
    HeaderComponent,
    SectionComponent,
    SlideBarComponent,
    FeaturedComponent,
    BannerComponent,
    LatestProductComponent,
    FormBlogComponent,
    DetailComponent,
    BlogComponent,
    ContactComponent,
    MapComponent,
    ContactFormComponent,
    ShoppingCartComponent,
    CheckOutComponent,
    DetailBannerComponent,
    ProductDetailComponent,
    HomeComponentComponent,
    ShopHomeComponent,
    NavSearchComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
