import {Injectable} from '@angular/core';
import {SignUpWithPasswordCredentials, SupabaseClient} from "@supabase/supabase-js";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public supabaseCliente: SupabaseClient) {
  }

  signUp(credentials: SignUpWithPasswordCredentials) {
    return this.supabaseCliente.auth.signUp(credentials);
  }

  logIn(credentials: SignUpWithPasswordCredentials) {
    return this.supabaseCliente.auth.signInWithPassword(credentials);
  }

  signOut() {
    return this.supabaseCliente.auth.signOut();
  }

  session() {
  }
}

