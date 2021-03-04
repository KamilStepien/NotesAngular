import { Component, OnInit, ValueSansProvider } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent   {

  constructor(public noteService:NoteService) { }

  noteForm = new FormGroup({
    name:new FormControl('', [Validators.required])
  });

  onSubmit():void
  {
    this.noteService.addNote(this.noteForm.value.name)
  }
  
  deleteChecked():void
  {
    this.noteService.deleteAllChecked();
  }

}
