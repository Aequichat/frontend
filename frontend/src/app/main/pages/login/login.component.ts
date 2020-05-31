import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from 'src/app/shared/services/auth.service';
import { User } from 'src/app/shared/models/user.model';
import { HttpErrorResponse } from '@angular/common/http';

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
        this.router.navigate(['/chats']);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
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
        alert(response.message);
        this.isLoading = false;
        this.router.navigate(['/chats']);
      },
      (error: HttpErrorResponse) => {
        alert(error.error.message);
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
