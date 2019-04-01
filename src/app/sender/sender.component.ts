import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { SenderService } from './sender.service';
import { Phrase } from '../shared/dto/phrase';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import { CONTEXT_NAME } from '@angular/compiler/src/render3/view/util';

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

  constructor(private senderService: SenderService, private pipe: DatePipe, private router: Router) {
    this.loadPeople();
  }

  ngOnInit() {
    this.isLoading = false;
  }

  sendPhrase(auteur: string, categorie: number, phrase: string, contexte: string) {
    this.isLoading = true;
    console.log(auteur + this.categories[categorie].name + phrase);

    const phraseToSend: Phrase = {
      auteur: auteur,
      denonceur: 'Elie',
      phraseLabel: phrase,
      categorie: this.categories[categorie].enum,
      contexte: contexte
    };

    this.senderService
      .postPhrase(phraseToSend)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.router.navigate(['/home']);
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
