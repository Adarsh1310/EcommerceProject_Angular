import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { display } from 'src/models/display';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  public messageSource = new BehaviorSubject(null);
  constructor(private http: HttpClient) { }
  

  getmessage(){
    return this.messageSource.asObservable();
  }
 

  changeMessage(message: Observable<display>) {
    this.messageSource.next(message)
  }

}



