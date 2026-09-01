import { Component, input, OnInit } from '@angular/core';
import { IonGrid, IonRow, IonCol, IonIcon, IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-no-record-found',
  templateUrl: './no-record-found.component.html',
  styleUrls: ['./no-record-found.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonIcon, IonLabel]
})
export class NoRecordFoundComponent  implements OnInit {

  model = input<{icon?: string, title?: string, color?: string}>(
    { icon: 'chatbubbles-outline',
      title: 'No Record Found',
      color: 'primary'
    }
  );

  constructor() { }

  ngOnInit() {}

}
