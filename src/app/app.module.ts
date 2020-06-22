import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContatoModule } from './contatos/contato.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from 'src/shared/material/material.module';
import { ContatoService } from './contatos/contato.service';

@NgModule({
  declarations: [
    AppComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ContatoModule,
    CoreModule,
    MaterialModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'contatos', pathMatch: 'full'
      },
    ]),
    BrowserAnimationsModule
  ],
  providers: [HttpClientModule, ContatoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
