import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Meme } from '../../meme.model';
import { animate, state, style, transition, trigger } from '@angular/animations';
//import { YT } from '../../youtubeFilter';

@Component({
  selector: 'list.component',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: 'auto'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListComponent implements OnInit {

  memes: Meme[];
  columnsToDisplay = ['_id', 'name', 'source'];

  expandedElement: Meme | null;

  constructor(private issueService: IssueService, private router: Router, private sanitizer: DomSanitizer) { }


  ngOnInit() {
    this.fetchMemes();
  }

  fetchMemes(){
    this.issueService
    .getMemes()
    .subscribe(data => {
      this.memes = data["data"];
      console.log('Data requested ... ');
      console.log(data["data"]);
      for(var i = 0; i < this.memes.length; i++) {
	console.log(this.getId(this.memes[i].source));        
      }	    
   });
  }

  sanitizeURL(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
          isolateId(url) {
                var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
                var match = url.match(regExp);

                if (match && match[2].length == 11) {
                    return match[2];
                } else {
                    return 'error';
                }
            }

            getId(url) {
                return this.isYoutube(url) ? 'https://www.youtube.com/embed/' + this.isolateId(url) : url;
            }
	
	   isYoutube(url){
	        return url.includes("youtu");
	   }
}
