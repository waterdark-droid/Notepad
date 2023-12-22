import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NoteComponent } from './core/components/note/note.component';
import { NotesContainerComponent } from './core/components/notes-container/notes-container.component';

const routes: Routes = [
  {
    path: 'notes',
    children: [
      {
        path: '',
        component: NotesContainerComponent
      },
      {
        path: ':id',
        component: NoteComponent
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
