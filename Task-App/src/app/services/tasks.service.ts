import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from "../task";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type' : 'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  private baseUrl : string = "http://localhost:5000/tasks";

  constructor(private http: HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.http.get<Task[]>(this.baseUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = this.baseUrl+"/"+task.id;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.baseUrl}/${task.id}`;
    return this.http.put<Task>(url,task,httpOptions);
  }

  addTask(task:Task) : Observable<Task> {
    return this.http.post<Task>(this.baseUrl,task,httpOptions);
  }

}
