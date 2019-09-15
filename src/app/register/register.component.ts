import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  addAgent = { FirstName:'', LastName: '', Mobile:'', EmailId:'', Password: '', ConfirmPassword: '', Address: '',
            AadharNo: '', PanNo: '', AadharNumber: '', MobileNo: ''}
  constructor() { }

  ngOnInit() {
  }

}
