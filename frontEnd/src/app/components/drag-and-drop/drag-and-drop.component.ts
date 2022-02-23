import { Component, ElementRef, ViewChild,  Output, EventEmitter } from '@angular/core';
import { NgxFileDropEntry, FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';
import { ClasificadorService } from '../../services/clasificador.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.css']
})
export class DragAndDropComponent {
  @ViewChild('dragDrop') dragDropRef!: ElementRef;
  @ViewChild('spinner') spinnerRef!: ElementRef;
  @ViewChild('img') imagenRef!: ElementRef;
  @ViewChild('resultadoAPI') resultadoAPIRef!: ElementRef;
  
  pronostico!:string;
  
  files: NgxFileDropEntry[] = [];

  constructor(private clasificadorService:ClasificadorService){
  }

  dropped(files: NgxFileDropEntry[]) {
    this.files = files;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          this.showHtmlElement(this.spinnerRef,true); this.showHtmlElement(this.dragDropRef,false);
          this.clasificarImagen(file, fileEntry.name);
        });
      }
    }
  }

  showHtmlElement(item:ElementRef,status:boolean){
    const div: HTMLElement = item.nativeElement as HTMLElement;
    if(!status){
      div.style.display="none"
    }else{
      div.style.display="block"
    }
  }

  clasificarImagen(file:any, name:any){
    // Preparamos el formulario
    const formData = new FormData()
    formData.append('image', file, name)

    this.clasificadorService.sendImage(formData).subscribe(({pronostico})=>{
      const url = URL.createObjectURL(file);
      const imagen = this.imagenRef.nativeElement as HTMLImageElement;
      this.pronostico = pronostico; imagen.src = url;

      this.showHtmlElement(this.spinnerRef,false); 
      this.showHtmlElement(this.resultadoAPIRef,true); 
    });
  }

  voverClasificar(){
    this.showHtmlElement(this.resultadoAPIRef,false); 
    this.showHtmlElement(this.dragDropRef,true); 
    
  }
}