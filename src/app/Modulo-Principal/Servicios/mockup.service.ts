import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockupService {

  constructor(private http:HttpClient) { }

  public GetArticleCodes():Observable<HttpResponse<string[]>>{
    return this.http.get<HttpResponse<string[]>>("http://demo8532352.mockable.io/codigos");
  }
}
