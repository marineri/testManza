import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { Url } from "./modelUrl";

@Injectable()
export class UrlService  {

   constructor(private http: Http) {
   }

   getUrl(): Observable<Url[]> {
      return this.http.get("http://jsonplaceholder.typicode.com/posts")
         .map((res: Response) => res.json())
         .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
   }
}