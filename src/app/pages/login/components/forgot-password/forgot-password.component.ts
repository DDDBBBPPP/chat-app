import { Component, inject, OnInit, output, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonContent, IonList, IonListHeader, IonRow, IonCol, IonInput, IonIcon, IonButton, IonSpinner } from "@ionic/angular/standalone";
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  standalone: true,
  imports: [IonContent,
    IonList,
    IonListHeader,
    ReactiveFormsModule,
    IonRow,
    IonCol, IonInput, IonIcon, IonButton, IonSpinner]
})
export class ForgotPasswordComponent  implements OnInit {

  fpForm!: FormGroup;
  isFp = signal<boolean>(false);
  errorMessage = output<string>();
  closeModal = output<boolean>();
  private auth = inject(AuthService);

  constructor() {

    this.initForm();
  }

  ngOnInit() {}

  setIsFp(val: boolean) {
    this.isFp.set(val);
  }

  initForm() {
    this.fpForm = new FormGroup({
      email: new FormControl(null,{
        validators: [Validators.required, Validators.email],
      }),
    });
  }

   onSubmit(){
    //console.log('submit');

    if (this.fpForm.invalid) {
      this.fpForm.markAllAsTouched();
      return
    }
    console.log(this.fpForm.value);
    this.resetPassword(this.fpForm.value.email);
  }

  async resetPassword(email:string){
      try{
        this.setIsFp(true);

        //reset password functionality
       const data = await this.auth.resetPassword(email);
       console.log(data);

        this.setIsFp(false);
        this.closeModal.emit(true);


      }catch(e: any){
        this.setIsFp(false);
        console.log(e);
        this.errorMessage.emit(e.error.error.message || 'Error! Please try again');
      }
  }

}
