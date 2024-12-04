import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, OnInit, ViewChild, ChangeDetectorRef } from '@angular/core';
import { MarkdownModule } from 'ngx-markdown';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule } from '@angular/material/sort';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormsModule} from '@angular/forms';

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
  imports: [CommonModule, MarkdownModule, MatGridListModule, MatFormFieldModule, MatTableModule, MatCardModule, MatChipsModule, MatPaginatorModule, MatFormFieldModule, MatInputModule, MatSortModule, MatSort, MatCheckboxModule, FormsModule],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit, AfterViewInit {

  // VARIABLES ---------------------------------------------------------------------------------

  json_link: string = 'https://raw.githubusercontent.com/kjeshang/MyFrenchLearningBlog_Backend/refs/heads/main/data.json';

  displayedColumns: string[] = [
    // 'id', 
    'name', 
    'level', 
    'reference', 
    'date', 
    // 'post'
  ];

  dataSource!: MatTableDataSource<any>;
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  selectedCell: any = null;

  showBlogPostList = true;

  toggleBlogPostList_options = {
    "hide":"Masquer les articles de blog",
    "show":"Afficher les articles de blog"
  };

  blog_filter = {
    "label":"Filtre le tableau",
    "placeholder":"Cherche le tableau par nom, niveau, référence, date, etc."
  };

  // FUNCTIONS ----------------------------------------------------------------------------------

  constructor(private http: HttpClient, private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.fetchData();
  }

  ngAfterViewInit() {
    // this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
    this.sort.sort({
      id:'date',
      start:'desc',
      disableClear:false
    });
    this.cdr.detectChanges();
  }

  fetchData(): void {
    const url = this.json_link;
    this.http.get<any[]>(url).subscribe(data=> {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.data = data.map(item => {
        if(item.date){
          item.date = new Date(item.date);
        }
        return item;
      });
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  toggleBlogListContent() {
    this.showBlogPostList = !this.showBlogPostList;
  }

  applySearchFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onRowClick(row: any): void {
    this.selectedCell = row;
  }

    

}