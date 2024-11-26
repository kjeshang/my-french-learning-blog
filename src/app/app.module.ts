import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule, MarkdownService, MARKED_OPTIONS, provideMarkdown, } from 'ngx-markdown';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule,
    MarkdownModule,
    // MarkdownModule.forRoot({ loader: HttpClient }),
    MarkdownModule.forRoot({
      // loader: HttpClient, // optional, only if you use [src] attribute
      // markedOptions: {
      //   provide: MARKED_OPTIONS,
      //   useValue: {
      //     gfm: true,
      //     breaks: false,
      //     pedantic: false,
      //   },
      // },
    }),
  ],
  providers:[
    provideHttpClient(),
    // provideMarkdown({
    //   markedOptions: {
    //     provide: MARKED_OPTIONS,
    //     useValue: {
    //       gfm: true,
    //       breaks: false,
    //       pedantic: false,
    //     },
    //   },
    // }),
  ]
})
export class AppModule { 

  // constructor(
  //   private markdownService: MarkdownService,
  // ) { }
  
  // update() {
  //   this.markdownService.reload();
  // }

}
