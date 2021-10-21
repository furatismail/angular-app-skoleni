import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from './layout/layout.module';
import { MenuComponent } from './menu/menu.component';
import { RouterModule, Routes } from '@angular/router';
import { LayoutBoardComponent } from './layout-board/layout-board.component';
import { BlankBoardComponent } from './blank-board/blank-board.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/containers/cart/cart.component';
import { CartModule } from './cart/cart.module';
import { HttpClientModule } from '@angular/common/http'

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: '',
    component: LayoutBoardComponent,
    children: [
      {
        path: 'films', loadChildren: () => import('./films/films.module').then(
          module => module.FilmsModule
        )
      },
      { path: 'cart', component: CartComponent }
    ]
  },
  {
    path: '',
    component: BlankBoardComponent,
    children: [
      { component: LoginComponent, path: 'login' }
    ]
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    LayoutBoardComponent,
    BlankBoardComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    RouterModule.forRoot(routes),
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }




