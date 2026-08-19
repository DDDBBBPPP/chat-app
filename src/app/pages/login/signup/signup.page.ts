import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonAlert, IonButton, IonText, IonSpinner, IonInputPasswordToggle, IonIcon, IonInput, IonCard, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { lockClosedOutline, mailOutline, personOutline } from 'ionicons/icons';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
  standalone: true,
  imports: [IonAlert,
    IonButton,
    IonText,
    IonSpinner,
    IonInputPasswordToggle,
    IonIcon, IonInput,
    IonCard, IonContent,
    ReactiveFormsModule, IonHeader, IonToolbar, IonButtons, IonBackButton]
})
export class SignupPage implements OnInit {
  form!: FormGroup;
  isSignup = signal<boolean>(false);
  errorMessage = signal<string | null>(null);
  private auth = inject(AuthService);

  constructor() {

    addIcons({
      mailOutline,
      lockClosedOutline,
      personOutline
    });
    this.initForm();

  }

  ngOnInit() {


  }

  initForm() {
    this.form = new FormGroup({
      name: new FormControl(null, {
        validators: [
          Validators.required]
      }),
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


  setIsSignup(value: boolean) {
    this.isSignup.set(value);
  }

  setErrorMessage(message: string | null) {
    this.errorMessage.set(message);

  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return
    }
    console.log(this.form.value);
    this.signup(this.form.value);
  }

  async signup(formValue: { name: string, email: string, password: string }) {

    try {

      this.setIsSignup(true);
      //signup functionality
      const data = await this.auth.signup(formValue.name, formValue.email, formValue.password);

      this.setIsSignup(false);

      //navigate to home screen
      this.auth.navigateByUrl('/tabs');

      this.form.reset();

    } catch (e) {


      this.setIsSignup(false);
      console.log(e);
    }

  }
}
