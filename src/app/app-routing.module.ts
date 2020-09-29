import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountComponent } from './account/account.component';
import { AddaccountComponent } from './addaccount/addaccount.component';
import { ShowaccountComponent } from './showaccount/showaccount.component';
import { DeleteaccountComponent } from './deleteaccount/deleteaccount.component';
import { UpdateaccountComponent } from './updateaccount/updateaccount.component';
import { LoanComponent } from './loan/loan.component';
import { LoanrequestComponent } from './loanrequest/loanrequest.component';
import { LoanacceptedComponent } from './loanaccepted/loanaccepted.component';
import { LoanrejectedComponent } from './loanrejected/loanrejected.component';
import { GetallrequestsComponent } from './getallrequests/getallrequests.component';


const routes: Routes = [
{ path: 'app-addaccount', component: AddaccountComponent },
{ path: 'app-updateaccount',component: UpdateaccountComponent },
{ path: 'app-showaccount', component: ShowaccountComponent},
{ path: 'app-deleteaccount', component: DeleteaccountComponent},
{ path: 'app-account', component: AccountComponent},
{ path: 'app-loan', component:LoanComponent},
{ path: 'app-loanrequest', component:LoanrequestComponent},
{ path: 'app-loanaccepted', component:LoanacceptedComponent},
{ path: 'app-loanrejected', component:LoanrejectedComponent},
{ path: 'app-getallrequests', component:GetallrequestsComponent}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
