import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-uj-elemek',
  templateUrl: './uj-elemek.component.html',
  styleUrls: ['./uj-elemek.component.css']
})
export class UjElemekComponent {

  @Output()
  kimenet = new EventEmitter();

  vanTartalom = true;

  //Kiküldeni az app layerre az infot
  kikuldottAdat(e: any){
    e.preventDefault();
    const textBox = e.target.elements.textBox.value;

    if(textBox === "")
    {
      this.vanTartalom = false;
      
    }else{
      this.vanTartalom = true;
      this.kimenet.emit(textBox);
      e.target.reset();
    }
      
  }

}
