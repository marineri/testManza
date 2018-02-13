import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UrlService } from "./consumirUrl.service";
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [UrlService],
  bootstrap: [AppComponent]
})
export class AppModule { }
