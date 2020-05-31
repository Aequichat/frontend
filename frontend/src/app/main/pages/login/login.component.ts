import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user.model';

@Component({
  selector: 'aequi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public userForm: FormGroup;
  public signUpForm: FormGroup;
  public isLoading: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private toastr: ToastrService,
    private router: Router
    ) {}

  ngOnInit(): void {
    const userFormValidators = {
      username: ['', Validators.required],
      password: ['', Validators.required]
    };

    const singUpFormValidators = {
      newUsername: ['', Validators.required],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      newEmail: ['', [Validators.required, Validators.email]]
    };

    this.userForm = this.formBuilder.group(userFormValidators);

    this.signUpForm = this.formBuilder.group(
      singUpFormValidators,
      {
        validators: [this.matchPasswords('newPassword', 'repeatPassword')]
      }
    );
  }

  public login(): void {
    const username = this.userForm.get('username').value;
    const password = this.userForm.get('password').value;

    this.isLoading = true;
    this.authService.login(username, password).subscribe(
      (user: User) => {
        this.isLoading = false;
        this.authService.setUser(user);
        this.router.navigate(['/chats']);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(error.error.message);
        this.isLoading = false;
      }
    );
  }

  public signUp(): void {
    const username = this.signUpForm.get('newUsername').value;
    const email = this.signUpForm.get('newEmail').value;
    const password = this.signUpForm.get('newPassword').value;


    this.isLoading = true;
    this.authService.register(username, email, password).subscribe(
      (response: any) => {
        this.toastr.success(response.message);
        this.isLoading = false;
        localStorage.setItem('user', JSON.stringify(response.user));
        this.router.navigate(['/chats']);
      },
      (error: HttpErrorResponse) => {
        this.toastr.error(error.error.message);
        this.isLoading = false;
      }
    );
  }

  private matchPasswords(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.mustMatch) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({ mustMatch: true });
      } else {
        matchingControl.setErrors(null);
      }
    }
  }
}
