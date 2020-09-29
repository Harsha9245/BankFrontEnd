import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { ShowaccountComponent } from './showaccount/showaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { AccountComponent } from './account/account.component';
import { LoanComponent } from './loan/loan.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoanacceptedComponent } from './loanaccepted/loanaccepted.component';
import { LoanrejectedComponent } from './loanrejected/loanrejected.component';
import { GetallrequestsComponent } from './getallrequests/getallrequests.component';

@NgModule({
  declarations: [
    AppComponent,
    AddaccountComponent,
    ShowaccountComponent,
    DeleteaccountComponent,
    UpdateaccountComponent,
    AccountComponent,
    LoanComponent,
    LoanrequestComponent,
    LoanacceptedComponent,
    LoanrejectedComponent,
    GetallrequestsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
