import { AfterViewInit, Component, Output, EventEmitter } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { ViewChild } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [MatPaginatorModule],
  templateUrl: './paginator.component.html',
  styleUrl: './paginator.component.css',
})
export class PaginatorComponent {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  @Output() sendIndexToParent = new EventEmitter<number>();

  // pageIndex: string = '';
  getCurrentPageIndex(): number {
    return this.paginator.pageIndex;
  }

  handlePaginatorClick(event: any): void {
    this.sendIndexToParent.emit(event.pageIndex + 1);
  }
}
