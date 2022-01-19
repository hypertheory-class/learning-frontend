import { Component, Input, OnInit } from '@angular/core';
import { ThankYouDashboardSummary } from 'src/app/models';

@Component({
  selector: 'app-dashboard-thank-you-summary',
  templateUrl: './dashboard-thank-you-summary.component.html',
  styleUrls: ['./dashboard-thank-you-summary.component.css'],
})
export class DashboardThankYouSummaryComponent implements OnInit {
  @Input() summary: ThankYouDashboardSummary | null = null;
  constructor() {}

  ngOnInit(): void {}
}
