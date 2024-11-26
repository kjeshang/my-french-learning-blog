import { Component, NgModule, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MarkdownModule } from 'ngx-markdown';
import { marked } from 'marked';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AboutComponent } from './components/about/about.component';
import { BlogComponent } from './components/blog/blog.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MarkdownModule, HeaderComponent, FooterComponent, AboutComponent, BlogComponent, MatTabsModule, MatButtonToggleModule, FormsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  title = 'my-french-learning-blog';

  blog = {
    "name":"Blog",
    "value":"blog"
  }
  about = {
    "name":"Mon Histoire",
    "value":"about"
  };

  // data = "Data";

  selectedOption: string | null = this.blog.value;
  

}
