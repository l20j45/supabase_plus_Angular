import {Injectable} from '@angular/core';
import {createClient, SignUpWithPasswordCredentials, SupabaseClient} from "@supabase/supabase-js";
import {environment} from "../../../environments/environment.development";

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabaseClient: SupabaseClient;


  constructor() {
    this.supabaseClient = createClient(environment.SUPABASE_URL, environment.SUPABASE_KEY)
  }
  getClient(): SupabaseClient {
    return this.supabaseClient;
  }

  //Auth

  signUp(credentials: SignUpWithPasswordCredentials) {
    return this.supabaseClient.auth.signUp(credentials);
  }

  logIn(credentials: SignUpWithPasswordCredentials) {
    return this.supabaseClient.auth.signInWithPassword(credentials);
  }

  signOut() {
    return this.supabaseClient.auth.signOut();
  }

  session() {
    return this.supabaseClient.auth.getSession();
  }
}
