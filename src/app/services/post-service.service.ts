import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostServiceService {

  baseUrl = "https://jsonplaceholder.typicode.com"
  constructor(private http: HttpClient) { }


  all_posts(){
    return this.http.get(`${this.baseUrl}/posts`)
  }

  add_post(body:any){
    return this.http.post(`${this.baseUrl}/posts`,body)
  }

  singlePost(postId:number){
    return this.http.get(`${this.baseUrl}/posts/${postId}`)
  }
  user_comments(postId:number){
    return this.http.get(`${this.baseUrl}/posts/${postId}/comments`)

  }
}
