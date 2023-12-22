import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { NotesContainerComponent } from './components/notes-container/notes-container.component';
import { AppModule } from '../app.module';
import { AppRoutingModule } from '../app-routing.module';
import { RouterModule } from '@angular/router';
import { NotePieceComponent } from './components/note-piece/note-piece.component';
import { NoteMenuComponent } from './components/note-menu/note-menu.component';
import {MatMenuModule} from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { NoteComponent } from './components/note/note.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LeftNavComponent,
    NotesContainerComponent,
    NotePieceComponent,
    NoteMenuComponent,
    NoteComponent,
    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    MatMenuModule,
    MatIconModule,
    FormsModule,
    SharedModule
  ],
  exports: [
    LeftNavComponent,
    NotesContainerComponent,
  ]
})
export class CoreModule { }
