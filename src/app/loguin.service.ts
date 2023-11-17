import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoguinService {
  private apiUrl = 'https://koy60.wiremockapi.cloud/login/';

  constructor(private http: HttpClient) { }

  login(username: string, password: string): Observable<boolean> {
    const body = { user: username, password: password };

  return this.http.post(this.apiUrl, body).pipe(
    map((response: any) => {
      if (response.statusCode === 200) {
        return true;
      } else {
        return false;
      }
    }),
    catchError(() => of(false))
  );
  }
}

