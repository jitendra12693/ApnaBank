import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-account',
  templateUrl: './add-account.component.html',
  styleUrls: ['./add-account.component.scss']
})
export class AddAccountComponent implements OnInit {
  addAccount = {MiddleName: '', FirstName: '', LastName: '', GFName: '', GMName: '', GLName: '', MobileNo: '',
  NomineeFName: '', NomineeLName: '', NamineeMName: '', DateOfBirth: '', Sex: '', EmailId: '', PanNo: '',
  AadharNo: '', Address1: '', Address2: '', City: '', Pincode: '', CountryId: '', StateId: '', AddressType: '',
  AgentName: '', AgentCode: '', Sinature: ''};
  constructor() { }

  ngOnInit() {
  }

  saveAccount(form) {

  }
}
