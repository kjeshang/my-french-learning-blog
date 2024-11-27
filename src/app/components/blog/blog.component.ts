import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';

export interface BlogData {
  id: number;
  name: string;
  level: string;
  reference: string;
  date: string;
  post: string;
}

@Component({
  selector: 'app-blog',
  imports: [CommonModule, MarkdownModule, MatGridListModule, MatFormFieldModule, MatTableModule, MatCardModule, MatChipsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {

  json_link: string = 'https://raw.githubusercontent.com/kjeshang/MyFrenchLearningBlog_Backend/refs/heads/main/data.json';

  displayedColumns: string[] = [
    // 'id', 
    'name', 
    'level', 
    'reference', 
    'date', 
    // 'post'
  ];

  dataSource: BlogData[] = [];

  selectedCell: any = null;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData(): void {
    const url = this.json_link;
    this.http.get<BlogData[]>(url).subscribe((data) => {
      this.dataSource = data;
    });
  }

  onRowClick(row: any): void {
    this.selectedCell = row;
  }

  showBlogPostList = true;
  toggleBlogPostList_options = {
    "hide":"Masquer les articles de blog",
    "show":"Afficher les articles de blog"
  };

  toggleBlogListContent() {
    this.showBlogPostList = !this.showBlogPostList;
  }  

}