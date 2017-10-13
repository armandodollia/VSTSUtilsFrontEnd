import { Injectable } from '@angular/core';
import {Bug} from '../models/Bug';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class WorkItemService {

  bugs: Array<Bug>;
  baseUrl = 'http://localhost:34167/api/';
  constructor(private http:  Http) { }

  getAllBugs(): Observable<Bug[]> {
    return this.http
      .get(this.baseUrl + 'bugs/getallbugs')
      .map(response => response.json() as Bug[]);
  }
}
