import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteNoteDialogComponent } from 'src/app/shared/dialogs/delete-note-dialog/delete-note-dialog.component';
import { NoteModel } from 'src/app/shared/models/note.model';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent {

  constructor(public noteService:NoteService,public dialog: MatDialog) { }


  setChceked(note: NoteModel):void
  {
    this.noteService.setChecked(note.id, note.checked);
  }

  deleteNote(note: NoteModel):void
  {
    this.dialog.open(DeleteNoteDialogComponent, {  data:{note:note} })
    
  }

  drop(event: CdkDragDrop<NoteModel[]>) {
    console.log("aaa")
    moveItemInArray(this.noteService.notesTab, event.previousIndex, event.currentIndex);
  }
  
}
