import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicTableComponent } from './music-table/music-table.component';
import { TypesComponent } from './types/types.component';

@NgModule({
  declarations: [
    AppComponent,
    MusicTableComponent,
    TypesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
