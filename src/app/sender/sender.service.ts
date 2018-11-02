import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Phrase } from '../shared/dto/phrase';

@Injectable()
export class SenderService {
  constructor(private httpClient: HttpClient) {}

  postPhrase(phrase: Phrase): Observable<string> {
    return this.httpClient.post('penaliche-01.appspot.com/phrase', phrase).pipe(
      map((body: any) => body.value),
      catchError(e => of('Error, could post phrase :-('))
    );
  }
}
