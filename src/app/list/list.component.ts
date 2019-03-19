import { Component, OnInit } from '@angular/core';
import { ListService } from './list.service';
import { Phrase } from '../shared/dto/phrase';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  isLoading: boolean;

  constructor(private listService: ListService) {}
  phrases: Phrase[];

  ngOnInit() {
    this.isLoading = true;
    console.log('Récupération des phrases');

    this.listService
      .getPhrases()
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
