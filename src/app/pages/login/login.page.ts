import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonCard, IonInput, IonIcon, IonInputPasswordToggle, IonButton, IonText, IonSpinner, IonAlert, IonModal } from '@ionic/angular/standalone';
import { checkmarkOutline, lockClosedOutline, mailOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';
import { RouterLink } from '@angular/router';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonContent,
    IonCard,
    ReactiveFormsModule,
    IonInput,
    IonIcon,
    IonInputPasswordToggle,
    IonButton,
    IonText,
    RouterLink,
    IonSpinner,
    IonAlert,
    IonModal,
    ForgotPasswordComponent]
})
export class LoginPage implements OnInit {

  form!: FormGroup;
  isLogin = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  isFpModal = signal<boolean>(false);
  private auth = inject(AuthService);

  constructor() {

    addIcons({
      mailOutline,
      lockClosedOutline,
      checkmarkOutline
    });
    this.initForm();

  }

  ngOnInit() {


  }

  initForm() {
    this.form = new FormGroup({
      email: new FormControl(null, {
        validators: [
          Validators.required, Validators.email
        ]
      }),

      password: new FormControl(null, {
        validators: [
          Validators.required, Validators.minLength(8)
        ]
      }),
    });
  }


  setIsLogin(value: boolean) {
    this.isLogin.set(value);
  }

  setErrorMessage(message: string | null){
    this.errorMessage.set(message);

  }

  setFp(val: boolean){
    this.isFpModal.set(val);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    console.log(this.form.value);
    this.login(this.form.value);
  }

  async login(formValue: { email: string, password: string }) {

    try {

      this.setIsLogin(true);
      //login functionality
      const data = await this.auth.login(formValue.email,formValue.password);
      console.log(data);


      this.setIsLogin(false);

      //navigate to home screen
      this.auth.navigateByUrl('/tabs');

      this.form.reset();

    } catch (e) {


      this.setIsLogin(false);
      console.log(e);
    }

  }

}
