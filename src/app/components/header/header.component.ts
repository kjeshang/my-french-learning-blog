import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';
import { MarkdownModule } from 'ngx-markdown';

@Component({
  selector: 'app-header',
  imports: [CommonModule, MarkdownModule, MatButtonModule, MatTooltipModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  title = "My French Learning Blog";

  purpose = {
    "name":"Objectif",
    "tooltip":"L'objectif principal de créer cette site Web",
    "modal_title":"Bonjour et Bienvenue!",
    "modal_content":"J'ai construit cette site Web de sauvegarder ma progression en apprendre le français. Je l'ai construit aussi pour montrer quoi j'ai appris jusqu'à présent.",
    "modal_image":"https://github.com/kjeshang/MyFrenchLearningBlog_Backend/blob/main/Images/purpose_image.jpg?raw=true"
  };

  technical_portfolio = {
    "name":"Portefeuille Technique",
    "tooltip":"Une collection de projets professionnels et techniques",
    "link":"https://kjeshang.github.io"
  };

  more_links = {
    "title":"Plus Links",
    "tooltip":"Allez ici à savoir mon expérience professionel et voyez d'autres links Web",
    "url_list":[
      {"name":"LinkedIn","url":"https://www.linkedin.com/in/kunaljeshang/"},
      {"name":"GitHub","url":"https://github.com/kjeshang"},
      {"name":"WordPress","url":"https://kunaljeshang.wordpress.com/"},
    ]
  };

}
