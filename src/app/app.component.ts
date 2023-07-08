import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';

  adatok :string[] = [];

  //Create
  kijottAdat(adat: string)
  {
    this.adatok.push(adat);
  }

  //Delete
  kimenoIndexTorlese(index:number){
    this.adatok.splice(index, 1);
  }
}
