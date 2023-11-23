import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MigrationService {
  private apiURL = (environment.apiUrl || '') + '/api/';
  constructor(private http: HttpClient) { }

  getAllDBdata(){
    return this.http.get(this.apiURL + 'get-db-list/');
  }

}
