import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Learning Resources';

  topics = [
    'What is Angular?',
    'TypeScript 101',
    'Building Components',
    'State Management',
  ];

  makeUpper() {
    this.title = this.title.toUpperCase();
  }

  addItem(what: HTMLInputElement) {
    this.topics = [what.value, ...this.topics];
    what.value = '';
    what.focus();
  }
}
