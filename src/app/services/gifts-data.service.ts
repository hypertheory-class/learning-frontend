import { BehaviorSubject, Observable } from 'rxjs';
import { ThankYouCardCreate, ThankYouCardModel } from '../models';

export class GiftsDataService {
  // subject

  private lastId = 4;
  private _data: ThankYouCardModel[] = [
    { id: '1', to: 'Joe', reason: 'Mowed Lawn', sent: false },
    { id: '2', to: 'Sue', reason: 'Cleaned Car', sent: false },
    {
      id: '3',
      to: 'Mel',
      reason: 'Planted Flowers',
      sent: true,
      when: '2022-01-19T19:04:23.186Z',
    },
  ];
  private _subject = new BehaviorSubject<ThankYouCardModel[]>(this._data);
  // you let other pieces appliation "observe" that subject

  getAll(): Observable<ThankYouCardModel[]> {
    return this._subject.asObservable();
  }

  addItem(item: ThankYouCardCreate): void {
    // send that sucker to the server.
    // when the server returns it (201, Created, with a copy of the data)
    const newItem = {
      ...item,
      sent: false,
      id: (this.lastId++).toString(),
    } as ThankYouCardModel;
    // Add that to the _data array.
    this._data = [newItem, ...this._data];
    // tell the _subject there is new data. It will PUSH that data to all the components that are observing it.
    this._subject.next(this._data);
  }
}
