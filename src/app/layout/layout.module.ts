import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './containers/layout/layout.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
