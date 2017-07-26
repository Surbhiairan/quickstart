import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent  { 
  appTitle : string = 'Welcome'; 
  appStatus : boolean = true;
  appList : any[] = [
    {
      "id": "1",
      "name": "one"
    },
    {
      "id": "2",
      "name": "two"
    }
  ]

  
}
