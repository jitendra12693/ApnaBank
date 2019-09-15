import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { UploadKycComponent } from './upload-kyc/upload-kyc.component';
import { AccountListComponent } from './account-list/account-list.component';
import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { TransactionComponent } from './transaction/transaction.component';
import { LoanAccountComponent } from './loan-account/loan-account.component';
import { AgentListComponent } from './agent-list/agent-list.component';
import { LoanAcctListComponent } from './loan-acct-list/loan-acct-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'add-account', component: AddAccountComponent },
  { path: 'account-list', component: AccountListComponent },
  { path: 'upload-kyc', component: UploadKycComponent },
  { path: 'fund-transfer', component: BalanceTransferComponent},
  { path: 'emi-calculator', component: EmiCalculatorComponent},
  { path: 'transaction', component: TransactionComponent},
  { path: 'loan-account', component: LoanAccountComponent},
  { path: 'agent-list', component: AgentListComponent},
  { path: 'loan-acct-list', component: LoanAcctListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
