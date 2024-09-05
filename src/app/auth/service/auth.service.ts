import {Injectable} from '@angular/core';
import {createClient, SignUpWithPasswordCredentials, SupabaseClient} from "@supabase/supabase-js";
import {SupabaseService} from "../../shared/data-access/supabase.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(public supaBaseService: SupabaseService) {


  }
  signUp(credentials: SignUpWithPasswordCredentials) {
    return this.supaBaseService.signUp(credentials)
  }

  logIn(credentials: SignUpWithPasswordCredentials) {
    return this.supaBaseService.logIn(credentials)

  }

  signOut() {
    return this.supaBaseService.signOut()

  }

  session() {
    return this.supaBaseService.session()
  }

  isAuthenticated() {
    return this.supaBaseService.session()
  }
}

