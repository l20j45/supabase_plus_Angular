import {Injectable} from '@angular/core';
import {createClient, SignUpWithPasswordCredentials, SupabaseClient} from "@supabase/supabase-js";
import {SupabaseService} from "../../shared/data-access/supabase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  supaBaseClient: SupabaseClient;

  constructor(public supaBaseService: SupabaseService) {
    this.supaBaseClient = supaBaseService.supabaseClient;
    this.supaBaseClient.auth.onAuthStateChange(session => {
      console.log(session)
    })
  }

  signUp(credentials: SignUpWithPasswordCredentials) {
    return this.supaBaseClient.auth.signUp(credentials);
  }

  logIn(credentials: SignUpWithPasswordCredentials) {
    return this.supaBaseClient.auth.signInWithPassword(credentials);
  }

  signOut() {
    return this.supaBaseClient.auth.signOut();
  }

  session() {
    return this.supaBaseClient.auth.getSession();
  }
}

