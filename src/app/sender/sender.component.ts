import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SenderService } from './sender.service';
import { Phrase } from '../shared/dto/phrase';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {
  categories = [
    { id: 0, name: 'Pensées et Réflexions', enum: 'PENSEES_REFLEXIONS' },
    { id: 1, name: 'Expressions', enum: 'EXPRESSIONS' },
    { id: 2, name: 'Non Sens', enum: 'NON_SENS' },
    { id: 3, name: 'Allusion Sexuelle', enum: 'ALLUSIONS_SEXUELLES' },
    { id: 4, name: 'Comparaison Débile', enum: 'COMPARAISONS_DEBILES' },
    { id: 5, name: "Retourne à l'école", enum: 'RETOURNE_A_L_ECOLE' }
  ];

  names = [''];
  isLoading: boolean;

  constructor(private senderService: SenderService, private pipe: DatePipe, private router: Router) {}

  ngOnInit() {
    this.isLoading = false;
    this.loadPeople();
  }

  sendPhrase(auteur: string, categorie: number, phrase: string) {
    this.isLoading = true;
    console.log(auteur + this.categories[categorie].name + phrase);

    var phraseToSend: Phrase = {
      auteur: auteur,
      denonceur: 'Elie',
      phraseLabel: phrase,
      categorie: this.categories[categorie].enum
    };

    this.senderService
      .postPhrase(phraseToSend)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.router.navigate(['/list']);
        })
      )
      .subscribe((res: string) => {
        console.log(res);
      });
  }

  loadPeople() {
    this.senderService.loadPeople().subscribe((res: string[]) => {
      console.log(res);
      this.names = res;
    });
  }
}
