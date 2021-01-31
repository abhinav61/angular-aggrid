import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTabsModule} from '@angular/material/tabs';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { TabComponent } from './tab/tab.component';
import { AgGridModule } from 'ag-grid-angular';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';

@NgModule({
  declarations: [
    AppComponent,
    TabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    MatButtonModule,
    MatIconModule,
    AgGridModule.withComponents([]),
    GridModule, PagerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
