import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {initFlowbite} from 'flowbite';
import {NavComponent} from "./layout/nav/nav.component";
import {NoteListComponent} from "./notes/features/note-list/note-list.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NoteListComponent, NavComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'note-App';

  ngOnInit(): void {
    initFlowbite();
  }
}

