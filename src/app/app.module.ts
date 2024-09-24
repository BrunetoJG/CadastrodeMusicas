import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MusicTableComponent } from './music-table/music-table.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ButtonDeleteComponent } from '../components/button-delete/button-delete.component';


@NgModule({
  declarations: [
    AppComponent,
    MusicTableComponent,
    ButtonDeleteComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
