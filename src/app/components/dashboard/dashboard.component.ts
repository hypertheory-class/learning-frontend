import { Component, OnInit } from '@angular/core';
import { GiftsDataService } from 'src/app/services/gifts-data.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  giftSummary$ = this.service.getDashboardSummary();
  constructor(private service: GiftsDataService) {}

  ngOnInit(): void {}
}
