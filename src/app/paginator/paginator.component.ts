import { AfterViewInit, Component, Output, EventEmitter } from '@angular/core';
// import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  // @ViewChild(MatPaginator) paginator!: MatPaginator;

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
