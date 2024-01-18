import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  @Output() sendIndexToParent = new EventEmitter<number>();
  @Output() sendNextSignal = new EventEmitter<string>();
  @Output() sendPrevSignal = new EventEmitter<string>();

  sendPageValue(num: number): void {
    this.sendIndexToParent.emit(num);
  }

  nextPage() {
    this.sendNextSignal.emit();
  }

  prevPage() {
    this.sendPrevSignal.emit();
  }
}
