import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Posts } from '../models/posts.models';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private _http: HttpClient) { }

  getPost(postId: number) {
    return this._http.get<Posts>(`${environment.feeds}/${postId}`);
  }
}
