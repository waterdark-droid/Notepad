import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NotesDataService } from '../../services/notes-data.service';
import { Note } from '../../services/types/note.interface';

@Component({
  selector: 'app-notes-container',
  templateUrl: './notes-container.component.html',
  styleUrls: ['./notes-container.component.css'],
})
export class NotesContainerComponent {
  notes!: Note[];

  constructor(private notesDataService: NotesDataService, private router: Router){
    this.notes = notesDataService.notes;
  }

  onAddClick(){
    let newId = this.notesDataService.notes.length + 1;
    this.router.navigate(['/notes', newId]);
  }
  

  goToNote(noteId: number){
    this.router.navigate(['/notes', noteId]);
    
  }
}
