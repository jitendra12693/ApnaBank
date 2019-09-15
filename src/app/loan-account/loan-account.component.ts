import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loan-account',
  templateUrl: './loan-account.component.html',
  styleUrls: ['./loan-account.component.scss']
})
export class LoanAccountComponent implements OnInit {
  addLoanAccount = {FromDate: '', ToDate: ''};
  constructor() { }

  ngOnInit() {
  }

}
