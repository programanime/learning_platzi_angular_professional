import { Component,OnChanges,OnInit,Input } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    titleHeader="this is the header";
    nameFooter="this is footer's name";
  @Input() titulo;
  title = 'platzistore';
  d = {nombre:"daniel", apellido:"molina"}
  lista = [{nombre:'daniel', edad:18}, {nombre:'mario', edad:23}, {nombre:'laura', edad:55}]
  names = ["daniel", "alejandro", "alejo", "felipe", "bryan"];
  
  addItem(){
    this.names.push("asfasdf") 
  }
  
  removeItem(index:number){
    this.names.splice(index,1);
    
  }
  
}
