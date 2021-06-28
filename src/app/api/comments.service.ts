import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Comments } from '../models/comments.models';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private _http: HttpClient) { }

  getComments(postId: number) {
    return this._http.get<Comments[]>(`${environment.feeds}/${postId}/comments`);
  }
}
