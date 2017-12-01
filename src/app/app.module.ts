import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ConsumerSignupComponent } from './consumer-signup/consumer-signup.component';
import { FaqComponent } from './faq/faq.component';
import { HowItWorksComponent } from './how-it-works/how-it-works.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { SellerSignupComponent } from './seller-signup/seller-signup.component';
import { SellersInfoComponent } from './sellers-info/sellers-info.component';
import { TermsComponent } from './terms/terms.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    ConsumerSignupComponent,
    FaqComponent,
    HowItWorksComponent,
    IndexComponent,
    LoginComponent,
    PrivacyPolicyComponent,
    SellerSignupComponent,
    SellersInfoComponent,
    TermsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
