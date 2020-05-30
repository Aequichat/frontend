import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'aequi-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public userForm: FormGroup;
  public signUpForm: FormGroup;
  public isLoading: boolean;

  constructor(private formBuilder: FormBuilder) {
    this.userForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpForm = this.formBuilder.group({
      newUsername: ['', Validators.required],
      newPassword: ['', Validators.required],
      repeatPassword: ['', Validators.required],
      newEmail: ['', [Validators.required, Validators.email]]
    }, {
      validators: [this.matchPasswords('newPassword', 'repeatPassword')]
    }
    );
  }

  ngOnInit(): void {}

  public login() {
    console.log(this.userForm.value.username, this.userForm.value.password);
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
  }

  public signUp() {
    console.log('Signing Up...');
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
    }, 3000);
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
