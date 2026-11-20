import { Component, inject, input, signal } from '@angular/core';
import { Random as RandomService } from '../random';

@Component({
  selector: 'app-random',
  imports: [],
  templateUrl: './random.html',
  styleUrl: './random.css',
})
export class Random {
  private readonly randomService = inject(RandomService);

  readonly max = input(10);
  readonly drawn = signal<number | null>(null);

  draw(): void {
    this.drawn.set(this.randomService.randomNumber(this.max()));
  }

  isLowerHalf(): boolean {
    const drawn = this.drawn();
    return drawn !== null && drawn < 0.5 * this.max();
  }
}
