import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Phrase } from '../shared/dto/phrase';

@Injectable()
export class ListService {
  constructor(private httpClient: HttpClient) {}

  getPhrases(): Observable<Phrase[]> {
    return this.httpClient.get<Phrase[]>('http://penaliche-1160.appspot.com/phrase');
  }
}
