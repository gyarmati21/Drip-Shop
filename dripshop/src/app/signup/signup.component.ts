import { HotToastModule, HotToastService } from '@ngneat/hot-toast';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl, ValidationErrors } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

export function passwordMathchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
      const password = control.get('password')?.value;
      const confirmPassword = control.get('confirmPassword')?.value;

      if(password && confirmPassword && password !== confirmPassword){
        return {
          passwordsDontMatch: true
        }
      }

      return null;
  };
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [ Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordMathchValidator() })

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private toast: HotToastService,
    private afs: AngularFirestore
  ) {}

  ngOnInit(): void {
  }

  get name(){
    return this.signUpForm.get('name')
  }
  get email(){
    return this.signUpForm.get('email')
  }
  get password(){
    return this.signUpForm.get('password')
  }
  get confirmPassword(){
    return this.signUpForm.get('confirmPassword')
  }
  submit() {
    if (!this.signUpForm.valid) {
      return;
    }

    let data =
    {
      'address': "not set",
      'email': this.signUpForm.value.email,
      'firstName': "not set",
      'isAdmin': false,
      'lastName': "not set",
      'phoneNumber': "not set"
    };

    this.afs.collection('user').add(data);

    const { name, email, password } = this.signUpForm.value;
    this.authService.signUp(name as string, email as string, password as string).pipe(
      this.toast.observe({
        success: 'Regisztráció sikeres!',
        loading: 'Bejelentkezés...',
        error: ({ message }) => `${message}`
      })
    ).subscribe(() => {
      this.router.navigate(['/products'])
    })
  }

}
