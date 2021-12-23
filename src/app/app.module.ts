import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDialogModule } from '@angular/material/dialog';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BannerComponent } from './banner/banner.component';
import { ProductTemplateComponent } from './product-template/product-template.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PolicyComponent } from './policy/policy.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SubscribeInformComponent } from './subscribe-inform/subscribe-inform.component';
import { NavigationListComponent } from './navigation-list/navigation-list.component';
import { IntroPageComponent } from './intro-page/intro-page.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomePageComponent,
    BannerComponent,
    ProductTemplateComponent,
    ProductDetailComponent,
    ProductListComponent,
    SignInComponent,
    SpinnerComponent,
    NavigationListComponent,
    ContactComponent,
    IntroPageComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatBadgeModule,
    MatTabsModule,
    MatDialogModule,
    RouterModule.forRoot([
      { path: '', component: HomePageComponent },
      { path: 'product-detail', component: ProductDetailComponent },
      { path: 'product-list', component: ProductListComponent },
      { path: 'checkout', component: CheckoutComponent },
      { path: 'policy', component: PolicyComponent },
      { path: 'contact-us', component: ContactComponent }
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
