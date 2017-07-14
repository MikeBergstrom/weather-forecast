import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SeattleComponent } from './seattle/seattle.component';
import { SanjoseComponent } from './sanjose/sanjose.component';
import { BurbankComponent } from './burbank/burbank.component';
import { DallasComponent } from './dallas/dallas.component';
import { WashingtondcComponent } from './washingtondc/washingtondc.component';
import { ChicagoComponent } from './chicago/chicago.component';
import { AppRoutingModule } from './app-routing.module'; // <--- Routing rules imported
import { FormsModule } from '@angular/forms'; // <-- Import FormsModule
import { HttpModule } from '@angular/http'; // <-- Import HttpModule
import { HttpService } from './http.service';

@NgModule({
  declarations: [
    AppComponent,
    SeattleComponent,
    SanjoseComponent,
    BurbankComponent,
    DallasComponent,
    WashingtondcComponent,
    ChicagoComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule, // <-- Include module in our AppModules
    AppRoutingModule, // <--- Our routing rules
    HttpModule
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
