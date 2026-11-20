import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-list',
  imports: [FormsModule],
  templateUrl: './list.html',
  styleUrl: './list.css',
})
export class List {
  readonly text = signal('');
  readonly elements = signal<string[]>([]);

  add(): void {
    const value = this.text().trim();
    if (!value) {
      return;
    }
    this.elements.update((elements) => [...elements, value]);
    this.text.set('');
  }

  remove(index: number): void {
    this.elements.update((elements) => elements.filter((_, i) => i !== index));
  }
}
