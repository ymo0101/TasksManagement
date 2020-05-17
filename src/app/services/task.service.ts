import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  apiURL ="http://localhost:5000/tasks";
  constructor(private http :HttpClient) { }
  findall(){
    return this.http.get<Task[]>(this.apiURL);
  }

  delete(id){

    return this.http.delete(`http://localhost:5000/tasks/${id}`);
  }
}