import { ChangeDetectorRef, Component, DoCheck, ElementRef, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { NotesDataService } from '../../services/notes-data.service';
import { Note } from '../../services/types/note.interface';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnDestroy{
  id!: number;

  routeCatch!: Subscription;
  noteObj!: Note | undefined;
  title!: string;
  content!: string;
  currentNoteObj!: Note;

  oldState!: {title: string, content: string, color: string};


  @ViewChild('clearBtn') clearBtn!: ElementRef;
  @ViewChild('saveBtn') saveBtn!: ElementRef;
  clearBtnDisabled!: boolean;
  saveBtnDisabled!: boolean;


  @ViewChild('titleAlert') titleAlert!: ElementRef;
  @ViewChild('contentAlert') contentAlert!: ElementRef;

  colors = this.notesDataService.colors;

  selectedColor!: string;
  
  constructor(private route: ActivatedRoute, 
    private notesDataService: NotesDataService, 
    private renderer: Renderer2,
    private cdref: ChangeDetectorRef,
    private router: Router){
    this.routeCatch = this.route.params.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
    });

    this.noteObj = notesDataService.notes.find(obj => {
      return obj.id == this.id;
    });


    if(this.noteObj == undefined){
      this.title = '';
      this.content = '';
      this.selectedColor = this.colors[Math.floor(Math.random() * 4)];
    }
    else{
      this.currentNoteObj = this.noteObj;
      this.title = this.noteObj!.title;
      this.content = this.noteObj!.content;
      this.selectedColor = this.noteObj!.color;
    }

    this.oldState = {
      title: this.title,
      content: this.content,
      color: this.selectedColor  //
    };

  }

  ngAfterViewInit(){
    //For clear button and save button
    this.onInputChange();
    this.titleAlert.nativeElement.hidden = true;
    this.contentAlert.nativeElement.hidden = true;


    this.cdref.detectChanges();
  }



  //When Input changes the clear and save button is enabled
  onInputChange(){

    if(this.title.length == 0 && this.content.length == 0){
      this.renderer.addClass(this.clearBtn.nativeElement, 'clear-disable');
      this.renderer.removeClass(this.clearBtn.nativeElement, 'clear');
      this.clearBtnDisabled = true;
    }
    else{
      this.renderer.addClass(this.clearBtn.nativeElement, 'clear');
      this.renderer.removeClass(this.clearBtn.nativeElement, 'clear-disable');
      this.clearBtnDisabled = false;
    }

    if(this.oldState.title != this.title || this.oldState.content != this.content || this.oldState.color != this.selectedColor){
      
      this.renderer.addClass(this.saveBtn.nativeElement, 'save');
      this.renderer.removeClass(this.saveBtn.nativeElement, 'save-disable');
      this.saveBtnDisabled = false;
    }
    else{
      this.renderer.addClass(this.saveBtn.nativeElement, 'save-disable');
      this.renderer.removeClass(this.saveBtn.nativeElement, 'save');
      this.saveBtnDisabled = true;
    }

  }


  ngOnDestroy(): void {
    this.routeCatch.unsubscribe();
  }

  saveNote(){
    const oneWordRegEx = new RegExp('\\w');
    const twoWordRegEx = new RegExp('\\w \\w');

    console.log(oneWordRegEx.test(this.title));
    console.log(twoWordRegEx.test(this.content));


    if(!oneWordRegEx.test(this.title)){
      this.titleAlert.nativeElement.hidden = false;
      console.log('if')
      return;
    }
    else{
      this.titleAlert.nativeElement.hidden = true;
    }

    if(!twoWordRegEx.test(this.content)){
      this.contentAlert.nativeElement.hidden = false;
      return;
    }
    else{
      this.contentAlert.nativeElement.hidden = true;
    }


    let currentDate = new Date();
    let newNote = {
      id: this.id,
      title: this.title,
      content: this.content,
      color: this.selectedColor,
      createdAt: currentDate
    };

    if(this.currentNoteObj != undefined){
      Object.assign(this.currentNoteObj, newNote);
    }
    else{
      this.notesDataService.notes.push(newNote);
    }


    this.router.navigate(['/notes']);

    console.log(this.notesDataService.notes);
  }

  clearNote(){
    this.title = '';
    this.content = '';
    this.onInputChange();
  }

  getColor(color: string){
    this.selectedColor = color;
    this.onInputChange();
    console.log('color changed');
  }

}
