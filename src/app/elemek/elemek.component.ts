import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-elemek',
  templateUrl: './elemek.component.html',
  styleUrls: ['./elemek.component.css']
})
export class ElemekComponent {

  @Input() adataim: string = "";
  @Input() index: number = 0;

  @Output()
  kimenoIndex = new EventEmitter();

  mozog = false;
  xPozicio : number = 0;
  yPozicio : number = 0;
  teljesitve = false;

  //Eger mozgasahoz 
  egerFelengedve(){
    this.mozog = false;
  }

    //Eger mozgasahoz 
  egerLenyomva(){
    this.mozog = true;  
  }

    //Eger mozgasahoz 
  egerMozog(e: any){
    if(this.mozog)
    {
      this.xPozicio = e.clientX - 300 / 2;
      this.yPozicio = e.clientY - 180 / 2;
    }
  }

  //Teljesítve gomb lenyomása(Ha kész a task)
  teljesitveEvent(e : any){
    e.preventDefault();
    this.teljesitve = true;
  }

  //Törlés gomb lenyomása(Ha kész a task) -> Kiküldeni az app layerre az infot
  torlesEvent(i: number) {
    this.kimenoIndex.emit(i);
  }

}
