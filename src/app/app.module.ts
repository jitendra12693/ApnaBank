import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { NgbModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddAccountComponent } from './add-account/add-account.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { AccountListComponent } from './account-list/account-list.component';
import { UploadKycComponent } from './upload-kyc/upload-kyc.component';
import { AddAddressComponent } from './add-address/add-address.component';
import { EmiCalculatorComponent } from './emi-calculator/emi-calculator.component';
import { TransactionComponent } from './transaction/transaction.component';
import { BalanceTransferComponent } from './balance-transfer/balance-transfer.component';
import { FooterComponent } from './footer/footer.component';
import { LoanAccountComponent } from './loan-account/loan-account.component';
import { AgentCommissionComponent } from './agent-commission/agent-commission.component';
import { LoanReportComponent } from './loan-report/loan-report.component';
import { TransactionReportComponent } from './transaction-report/transaction-report.component';
import { LoanAcctListComponent } from './loan-acct-list/loan-acct-list.component';
import { AgentListComponent } from './agent-list/agent-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    AddAccountComponent,
    AddCustomerComponent,
    CustomerListComponent,
    AccountListComponent,
    UploadKycComponent,
    AddAddressComponent,
    EmiCalculatorComponent,
    TransactionComponent,
    BalanceTransferComponent,
    LoanAccountComponent,
    AgentCommissionComponent,
    LoanReportComponent,
    TransactionReportComponent,
    LoanAcctListComponent,
    AgentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    FormsModule,
    NgbDatepickerModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }