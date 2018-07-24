import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AsyncPipesComponent } from './async-pipes/async-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { BuiltInPipesComponent } from './built-in-pipes/built-in-pipes.component';
import { DefaultPipe } from './default.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AsyncPipesComponent,
    CustomPipesComponent,
    BuiltInPipesComponent,
    DefaultPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
