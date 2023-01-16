import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  chosenObj: any;
  Data: DataObj[] = [
    { id: 'one', name: 'Food' },
    { id: 'two', name: 'Travel' },
    { id: 'three', name: 'Education' },
    { id: 'four', name: 'Goverment' },
  ];
}
interface DataObj {
  id: string;
  name:string;
}
