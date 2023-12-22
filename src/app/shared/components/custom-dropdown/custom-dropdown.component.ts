import { Component, ElementRef, EventEmitter, Input, Output, Renderer2, ViewChild } from '@angular/core';
import { NotesDataService } from 'src/app/core/services/notes-data.service';

@Component({
  selector: 'app-custom-dropdown',
  templateUrl: './custom-dropdown.component.html',
  styleUrls: ['./custom-dropdown.component.css']
})
export class CustomDropdownComponent {
  showDropdown: boolean = false;

  @ViewChild('arrow') arrow!: ElementRef;

  @Output() sendColorToNote = new EventEmitter<string>();

  colors: string[] = this.notesDataService.colors;

  constructor(private renderer: Renderer2, private notesDataService: NotesDataService){}



  @Input('defaultColor') defaultColor!: string;

  ngOnInit(){

  }
  
  toggleDropdown(){

    if(!this.showDropdown){
      this.renderer.setStyle(this.arrow.nativeElement, 'rotate', '0deg');
      this.renderer.setStyle(this.arrow.nativeElement, 'transition', '0.3s');
      this.showDropdown = true;
    }
    else{
      this.renderer.setStyle(this.arrow.nativeElement, 'rotate', '-90deg');
      this.renderer.setStyle(this.arrow.nativeElement, 'transition', '0.3s');
      this.showDropdown = false;
    }
  }

  onColorClicked(color: string){
    this.defaultColor = color;
    this.renderer.setStyle(this.arrow.nativeElement, 'rotate', '-90deg');
    this.renderer.setStyle(this.arrow.nativeElement, 'transition', '0.3s');
    this.showDropdown = false;
    console.log('Selected color : ' + color);
    this.sendColorToNote.emit(color);
  }


}
