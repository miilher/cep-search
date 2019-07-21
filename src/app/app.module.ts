import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { NgxMaskModule } from 'ngx-mask'
import { AppComponent } from './app.component';
import { PagesComponent } from './pages/pages.component';
import { SearchZipComponent } from './pages/search-zip/search-zip.component';
import { FormsModule } from '@angular/forms';
import { DetailZipComponent } from './pages/search-zip/detail-zip/detail-zip.component';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    SearchZipComponent,
    DetailZipComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
