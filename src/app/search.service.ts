import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ReposInterface } from './Interfaces/repos-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

  public getRepos(reposName: string, stars?: number, language?: string): Observable<ReposInterface> {
    let url = ''
    if (reposName && stars && language) {
      url = `https://api.github.com/search/repositories?q=${reposName}+stars:>=${stars}+language:${language}`
    } else if (!stars && language) {
      url = `https://api.github.com/search/repositories?q=${reposName}+language:${language}`
    }
    else if (!language && stars) {
      url = `https://api.github.com/search/repositories?q=${reposName}+stars:>=${stars}`
    } else if (!(stars && language)) {
      url = `https://api.github.com/search/repositories?q=${reposName}`
    }
    return this.http.get<ReposInterface>(url)
      .pipe(
        map((response: ReposInterface) => {
          return response
        }),
        catchError(this.handleError)
      )
  }


  private handleError(error: HttpErrorResponse) {
    let errorMessage: string;
    if (error.error instanceof ErrorEvent) {
      errorMessage = `MESSAGE : ${error.error.message}`
    } else {
      errorMessage = `STATUS : ${error.status} MESSAGE : ${error.message}`
    }
    return throwError(errorMessage)
  }
}
