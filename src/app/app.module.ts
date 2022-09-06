import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AngularOtpLibModule } from 'angular-otp-box';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgOtpInputModule } from 'ng-otp-input';
import { IonicStorageModule } from '@ionic/storage-angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularTypewriterEffectModule } from 'angular-typewriter-effect';
import { AddadsPage } from './pages/market/addads/addads.page';
import { MaterialModule } from './material.module';
@NgModule({
  declarations: [AppComponent, AddadsPage],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AngularOtpLibModule,
    NgOtpInputModule,
    IonicStorageModule.forRoot(),
    AngularTypewriterEffectModule,
    MaterialModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AddadsPage,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
