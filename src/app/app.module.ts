import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UsersComponent } from './Components/users/users.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { DetailsComponent } from './Components/details/details.component';
import { FormsModule } from '@angular/forms';
import { CacheInterceptor } from './Cashing/cache.interceptor';
import { LoadingComponent } from './Components/loading/loading.component';
import { LoadingService } from './Services/loading.service';

import { HoverHighlightDirective } from './Customes/hover-highlight.directive';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    DetailsComponent,
    LoadingComponent,
    HoverHighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatProgressSpinnerModule,
   
],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: CacheInterceptor, multi: true },
  
    LoadingService,
        provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
