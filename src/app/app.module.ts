import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MaterializeComponentModule } from './materialize.module';

@NgModule({
  imports: [
    BrowserAnimationsModule, 
    FormsModule,
    MaterializeComponentModule.forRoot(),
  ],
  declarations: [AppComponent],
  bootstrap:    [AppComponent]
})
export class AppModule { }
