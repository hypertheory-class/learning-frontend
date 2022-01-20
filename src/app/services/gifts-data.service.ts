import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { environment } from '../../environments/environment'; // never import any other environment file.
import {
  ThankYouCardCreate,
  ThankYouCardModel,
  ThankYouDashboardSummary,
} from '../models';

@Injectable()
export class GiftsDataService {
  // subject
  private readonly apiUrl = environment.apiUrl;
  constructor(private client: HttpClient) {
    this.loadData();
  }

  private loadData() {
    this.client
      .get<{ data: ThankYouCardModel[] }>(this.apiUrl)
      .pipe(map((results) => results.data))
      .subscribe((results) => {
        this._data = results;
        this._subject.next(this._data);
      });
  }
  private _data: ThankYouCardModel[] = [];
  private _subject = new BehaviorSubject<ThankYouCardModel[]>(this._data);
  // you let other pieces appliation "observe" that subject

  cardSent(card: ThankYouCardModel) {
    this.client.post(this.apiUrl + 'sent', card).subscribe(() => {
      this._data.filter((x) => x.id == card.id)[0].sent = true;
      this._subject.next(this._data);
    });
  }

  getAll(): Observable<ThankYouCardModel[]> {
    return this._subject.asObservable();
  }

  addItem(item: ThankYouCardCreate): void {
    this.client.post<ThankYouCardModel>(this.apiUrl, item).subscribe((r) => {
      this._data = [r, ...this._data];
      this._subject.next(this._data);
    });
  }

  getDashboardSummary(): Observable<ThankYouDashboardSummary> {
    return this._subject.asObservable().pipe(
      map((data) => {
        return {
          sent: data.filter((item) => item.sent).length,
          needSent: data.filter((item) => !item.sent).length,
        } as ThankYouDashboardSummary;
      })
    );
  }
}
