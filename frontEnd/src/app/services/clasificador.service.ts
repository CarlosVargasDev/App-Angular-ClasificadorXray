import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClasificadorService {
  private readonly URL = "http://localhost:4000";

  constructor(private http: HttpClient) {
  }

  verificaAPI(): Observable<any>{
    return this.http.get(`${this.URL}/ping`)
                .pipe( 
                  catchError(error => {
                    console.log(error);
                    return error
                  })
                );
  }  

  sendImage(data:FormData):Observable<any>{
    return this.http.post(`${this.URL}/xray_image`,data)
                .pipe( 
                  catchError(error => {
                    console.log(error);
                    return error
                  })
                );
  }

}
