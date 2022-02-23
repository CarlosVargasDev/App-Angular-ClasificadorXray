import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent{
  
  constructor() { }

  showHtmlElement(item:ElementRef,status:boolean){
    const div: HTMLElement = item.nativeElement as HTMLElement;
    if(!status){
      div.style.display="none"
    }else{
      div.style.display="block"
    }
  }
  
  

}
