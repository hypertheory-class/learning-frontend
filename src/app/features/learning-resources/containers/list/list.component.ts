import { Component, OnInit } from '@angular/core';
import { LearningResourceSummaryItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  model: LearningResourceSummaryItem[] = [];
  constructor() {}

  ngOnInit(): void {}
}
