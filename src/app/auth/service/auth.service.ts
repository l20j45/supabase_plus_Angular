import {Injectable} from '@angular/core';
import {createClient, SignUpWithPasswordCredentials, SupabaseClient} from "@supabase/supabase-js";
import {SupabaseService} from "../../shared/data-access/supabase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  superBaseClient: SupabaseClient;

  constructor(public supaBaseService: SupabaseService) {
    this.superBaseClient = supaBaseService.supabaseClient;
  }

  signUp(credentials: SignUpWithPasswordCredentials) {
    return this.superBaseClient.auth.signUp(credentials);
  }

  logIn(credentials: SignUpWithPasswordCredentials) {
    return this.superBaseClient.auth.signInWithPassword(credentials);
  }

  signOut() {
    return this.superBaseClient.auth.signOut();
  }

  session() {
  }
}

