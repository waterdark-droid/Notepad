import { Component, ElementRef, Input, ViewChild, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-note-piece',
  templateUrl: './note-piece.component.html',
  styleUrls: ['./note-piece.component.css'],
})
export class NotePieceComponent {
  @Input('pieceColor') pieceColor!: string;
  @Input('title') title!: string;
  @Input('content') content!: string;

  @ViewChild('noteContent') noteContent!: ElementRef;
  @ViewChild('noteTitle') noteTitle!: ElementRef;

  ngAfterViewInit(){
    let contentText = this.noteContent.nativeElement.innerText;
    let titleText = this.noteTitle.nativeElement.innerText;

    if(contentText.length > 250){
      contentText = contentText.slice(0, 250);
      contentText = contentText.padEnd(253, "...");
      this.noteContent.nativeElement.innerText = contentText;
    }

    if(titleText.length > 30){
      titleText = titleText.slice(0, 30);
      titleText = titleText.padEnd(33, "...");
      this.noteTitle.nativeElement.innerText = titleText;
    }
  }
}
