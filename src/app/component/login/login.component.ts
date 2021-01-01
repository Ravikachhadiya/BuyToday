import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  checkLoginDetails = true;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit(): void {
    if (localStorage.getItem("login") == "true") {
      this.router.navigate(['/home']);
    }
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }
  get form() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }

    // display form values on success
    const loginFormDetails = JSON.parse(JSON.stringify(this.loginForm.value));
    this.checkLoginDetails = this.userService.login(loginFormDetails.email, loginFormDetails.password);
    if (this.checkLoginDetails) {
      this.openSnackBar("Login Successfully");
      // localStorage.setItem(‘name’,’Nixon’);
      const user: User = this.userService.getUserInfoByEmail(loginFormDetails.email);
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("login", "true");
      this.router.navigate(['/home']);
      window.location.reload();
    }
    else {
      this.openSnackBar("Check username or password!");
      this.submitted = false;
    }
  }

  openSnackBar(message: string) {
      this._snackBar.open(message, null, {
         duration: 2000,
      });
  } 

}
