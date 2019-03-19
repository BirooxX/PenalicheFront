import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { Phrase } from '../shared/dto/phrase';

import { LastPhraseService } from './lastphrase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  phrases: Phrase[];
  isLoading: boolean;

  constructor(private lastPhraseService: LastPhraseService) {}

  ngOnInit() {
    this.isLoading = true;
    this.lastPhraseService
      .getLastPhrases()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((res: Phrase[]) => {
        console.log(res);
        this.phrases = res;
      });
  }
}
