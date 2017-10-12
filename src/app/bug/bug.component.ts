///<reference path="../../../node_modules/@angular/core/src/metadata/directives.d.ts"/>
import { Component, OnInit } from '@angular/core';
import {WorkItemService} from '../services/work-item.service';
import {Bug} from '../models/Bug';
import {Router} from '@angular/router';

@Component({
  selector: 'app-bug',
  templateUrl: './bug.component.html',
  styleUrls: ['./bug.component.css']
})
export class BugComponent implements OnInit {

  bugs: Bug[];

  constructor(private router: Router, private workItemService: WorkItemService) { }

  ngOnInit(): void {
    this.getAllBugs();
  }


  getAllBugs(): void {
    this.workItemService.getAllBugs().subscribe(response => this.bugs = response);
    console.log(this.bugs);
  }
}
