import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GridComponent } from './components/grid/grid.component';
import { ButtonComponent } from './components/button/button.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './pages/home/home.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { ProductsComponent } from './pages/products/products.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { SectionComponent } from './components/section/section.component';
import { SectionTitleComponent } from './components/section-title/section-title.component';
import { SectionBodyComponent } from './components/section-body/section-body.component';
import { CartComponent } from './pages/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';

@NgModule({
  declarations: [
    AppComponent,
    GridComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroSectionComponent,
    ProductsComponent,
    ProductCardComponent,
    SectionComponent,
    SectionTitleComponent,
    SectionBodyComponent,
    CartComponent,
    CartItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
