import {computed, Injectable, signal} from '@angular/core';
import {SupabaseService} from "../../shared/data-access/supabase.service";

interface NoteState {
  notes: Note[];
  loading: boolean;
  error: boolean
}

interface Note {
  id: string;
  string: string;
  description: string | null;
  user_id: string;
}

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private supaBaseClient: any;
  private state = signal<NoteState>({
    notes: [], loading: false, error: false
  })

  notes = computed(() => this.state().notes);
  laoding = computed(() => this.state().notes);
  error = computed(() => this.state().notes);

  constructor(private supaBaseService: SupabaseService) {
    this.supaBaseClient = supaBaseService.supabaseClient;

  }

  getAllNotes() {

  }
}
