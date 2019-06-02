import { Component, OnInit } from '@angular/core';
import { IssueService } from '../../issue.service';

import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { Meme } from '../../meme.model';
import { animate, state, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'list.component',
  templateUrl: 'list.component.html',
  styleUrls: ['list.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})

export class ListComponent implements OnInit {

  memes: Meme[];
  columnsToDisplay = ['_id', 'name', 'source'];

  //isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('source');
  expandedElement: Meme | null;

  constructor(private issueService: IssueService, private router: Router) { }

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
      //const rows = [];
      //data.forEach(element => rows.push(element, { detailRow: true, element }));
      //console.log(rows);
    });
  }
}
