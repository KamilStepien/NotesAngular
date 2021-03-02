import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NoteService } from 'src/app/shared/note.service';

@Component({
  selector: 'app-note-add',
  templateUrl: './note-add.component.html',
  styleUrls: ['./note-add.component.scss']
})
export class NoteAddComponent implements OnInit {

  constructor(private noteService:NoteService) { }

  noteForm = new FormGroup({
    name:new FormControl('', [Validators.required])
  });

  onSubmit()
  {
    this.noteService.addNote(this.noteForm.value.name)
  }
  ngOnInit(): void {
  }

}
