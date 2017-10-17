import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WeatherService } from './weather.service';

import { SanJoseComponentComponent } from './san-jose-component/san-jose-component.component';
import { SeattleComponentComponent } from './seattle-component/seattle-component.component';
import { BurbankComponentComponent } from './burbank-component/burbank-component.component';
import { DallasComponentComponent } from './dallas-component/dallas-component.component';
import { WashingtonComponentComponent } from './washington-component/washington-component.component';
import { ChicagoComponentComponent } from './chicago-component/chicago-component.component';

@NgModule({
  declarations: [
    AppComponent,
    SanJoseComponentComponent,
    SeattleComponentComponent,
    BurbankComponentComponent,
    DallasComponentComponent,
    WashingtonComponentComponent,
    ChicagoComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule
  ],
  providers: [WeatherService],
  bootstrap: [AppComponent]
})
export class AppModule { }
