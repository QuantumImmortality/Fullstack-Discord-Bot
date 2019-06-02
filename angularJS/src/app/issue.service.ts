import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class IssueService {
	
  uri = 'http://104.196.181.109:8080/api';

  constructor(private http: HttpClient) { }

  getMemes() {
    return this.http.get(`${this.uri}/memes`);
  }
  getMemeByName(id) {
    return this.http.get(`${this.uri}/memes/${id}`);
  }
}


