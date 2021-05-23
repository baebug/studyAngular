import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './header/header.component';
import { SectionComponent } from './section/section.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';

import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    SideComponent
  ],
  imports: [
    CommonModule,
    MatIconModule
  ],
  exports:[
    HeaderComponent,
    SectionComponent,
    FooterComponent,
    SideComponent
  ]
})
export class LayoutModule { }
