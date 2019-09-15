import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/auth/auth.servicce';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  loginDeatails = {Username: '', Password: ''};
  private formSubmitAttempt: boolean;
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  makeLogin(form) {
    debugger;
    console.log(JSON.stringify(form.value));
  }


  onSubmit() {
    if (this.loginDeatails) {
      this.authService.login(this.loginDeatails); // {7}
    }
    this.formSubmitAttempt = true;             // {8}
  }
}
