import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { ReposInterface } from './Interfaces/repos-response.interface';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  constructor(private http: HttpClient) { }

 public getRepos(reposName: string): Observable<ReposInterface>{
  	return this.http.get<ReposInterface>(`https://api.github.com/search/repositories?q=${reposName}`)
      .pipe(
        map((response: ReposInterface) => {
         return response
        }),
        catchError(this.handleError)
      )
  }


  private handleError(error: HttpErrorResponse){
    let errorMessage: string;
    if(error.error instanceof ErrorEvent){
      errorMessage = `MESSAGE : ${error.error.message}`
    }else {
      errorMessage =`STATUS : ${error.status} MESSAGE : ${error.message}`
    }
    return throwError(errorMessage)
  }
}
