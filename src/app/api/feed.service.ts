import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Feed } from '../models/feed.models';

@Injectable({
  providedIn: 'root'
})
export class FeedService {

  constructor(private _http: HttpClient) { }

  getFeed() {
    return this._http.get<Feed[]>(`${environment.feeds}`);
  }
}
