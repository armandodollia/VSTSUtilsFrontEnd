import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BugComponent } from './bug/bug.component';
import {WorkItemService} from './services/work-item.service';
import {AppRoutingModule} from './app-routing/app-routing.module';
import {HttpModule} from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    BugComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule
  ],
  providers: [WorkItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
