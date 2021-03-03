import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NotesComponent } from './notes/notes.component';
import { NoteAddComponent } from './notes/note-add/note-add.component';
import { NotesListComponent } from './notes/notes-list/notes-list.component';
import { NoteListElementComponent } from './notes/note-list-element/note-list-element.component';
import { NoteService } from './shared/note.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import { DeleteNoteDialogComponent } from './shared/dialogs/delete-note-dialog/delete-note-dialog.component';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [
    AppComponent,
    NotesComponent,
    NoteAddComponent,
    NotesListComponent,
    NoteListElementComponent,
    DeleteNoteDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule,
    MatDialogModule,
    DragDropModule
  ],
  providers: [NoteService],
  bootstrap: [AppComponent]
})
export class AppModule { }
