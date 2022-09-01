import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ShareService } from './services/share.service';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [FormsModule,ReactiveFormsModule],
    RouterModule.forRoot([
      {path: 'sign-up', component: SignUpComponent},
      {path: '', redirectTo: 'sign-up', pathMatch: 'full'}
    ]),
    HttpClientModule,
  ],
  providers: [ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
