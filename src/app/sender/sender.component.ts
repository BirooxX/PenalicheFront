import { Component, OnInit } from '@angular/core';

import { environment } from '@env/environment';

@Component({
  selector: 'app-sender',
  templateUrl: './sender.component.html',
  styleUrls: ['./sender.component.scss']
})
export class SenderComponent implements OnInit {

  categories = [
    { id: 0, name: "Pensées et Réflexions" },
    { id: 1, name: "Expressions" },
    { id: 2, name: "Non Sens" },
    { id: 3, name: "Allusion Sexuelle" },
    { id: 4, name: "Comparaison Débile" },
    { id: 5, name: "Retourne à l'école" }  
  ];

  constructor() {}

  ngOnInit() {}

  sendPhrase(auteur: string, categorie: number, phrase: string) {
    console.log(auteur + this.categories[categorie].name + phrase);
  }
}
