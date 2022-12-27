import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileDetailsService {

  constructor(private httpClient: HttpClient, private router: Router) {}

  getDetails(username: string) {
    return this.httpClient.get<any>("https://api.github.com/users/" + username).pipe(
      catchError(() => this.router.navigate([""], { queryParams: { error: "Could not find user" } }))
    );
  }

  getRepoDetails(repoUrl: string) {
    return this.httpClient.get<any>(repoUrl);
  }
}
