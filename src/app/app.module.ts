import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyComponent } from './body/body.component';
import { DescriptionComponent } from './body/description/description.component';
import { CardContainerComponent } from './body/card-container/card-container.component';
import { CardComponent } from './body/card-container/card/card.component';
import { ButtonComponent } from './header/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    DescriptionComponent,
    CardContainerComponent,
    CardComponent,
    ButtonComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
