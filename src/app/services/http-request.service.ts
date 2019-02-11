import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import { HttpClient,HttpHeaders } from'@angular/common/http';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable()
export class httpReqeustService {
  constructor(private _router: Router, private http: HttpClient){}
  
  post(url,data,header={}) : Observable<any[]>{
    let bodyString = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type','application/json ');
    return this.http.post<any[]>(environment.apiUrl+url,bodyString,{headers});
    
  }

  put(url,data,header={}) : Observable<any[]>{
    let bodyString = JSON.stringify(data);
    let headers = new HttpHeaders().set('Content-Type','application/json ');
    return this.http.put<any[]>(environment.apiUrl+url,bodyString,{headers});
    
  }


  get(url,data={},header={}) : Observable<any[]>{
    let headers = new HttpHeaders().set('Content-Type','application/json ');
    return this.http.get<any[]>(environment.apiUrl+url);
  }

}