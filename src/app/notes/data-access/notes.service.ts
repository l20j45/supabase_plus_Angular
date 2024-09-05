import {computed, Injectable, signal} from '@angular/core';
import {SupabaseService} from "../../shared/data-access/supabase.service";
import {SupabaseClient} from "@supabase/supabase-js";
import {AuthService} from "../../auth/service/auth.service";
import {note, noteState} from "../../shared/models/models";


@Injectable({
  providedIn: 'root'
})
export class NotesService {

  supaBaseClient: SupabaseClient;

  constructor(private supaBaseService: SupabaseService, private authService: AuthService) {
    this.supaBaseClient = supaBaseService.supabaseClient;

  }

  private state = signal<noteState>({
    notes: [],
    loading: false,
    error: false,
  });

  // selectors
  notesSignalComputed = computed(() => this.state().notes);
  loadingSignalComputed = computed(() => this.state().loading);
  errorSignalComputed = computed(() => this.state().error);

  async getUserNotes() {
    try {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        loading: true,
      }));

      const {data: {session}} = await this.authService.session();

      const {data} = await this.supaBaseClient
        .from('notes')
        .select()
        .eq('user_id', session?.user.id)
        .returns<note[]>();

      if (data) {
        this.state.update((stateUpdate) => ({
          ...stateUpdate,
          notes: data,
        }));
      }
    } catch (error) {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        error: true,
      }));

    } finally {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        loading: false,
      }));

    }
  }

  async getAllNotes() {
    try {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        loading: true,
      }));

      const {data: {session}} = await this.authService.session();
            const {data} = await this.supaBaseClient
        .from('notes')
        .select()
        .returns<note[]>();

      if (data) {
        this.state.update((stateUpdate) => ({
          ...stateUpdate,
          notes: data,
        }));
      }
    } catch (error) {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        error: true,
      }));

    } finally {
      this.state.update((stateUpdate) => ({
        ...stateUpdate,
        loading: false,
      }));

    }
  }

  async insertNote(Note: { title: string; description: null | string }) {

    const {data: {session}} = await this.authService.session();
    try {
      const response = await this.supaBaseClient.from('notes').insert({
        user_id: session?.user.id,
        title: Note.title,
        description: Note.description,
        created_at: new Date(),
      });
      await this.getUserNotes();
    } catch (error) {
      console.log(error)
    }


  }
}
