import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { WatchlistCounterService } from '../watchlist-counter.service';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public isCollapsed = true;
  counter = 0
  constructor( public WatchlistCounterService :WatchlistCounterService){}
  ngOnInit(){
    // this.WatchlistCounterService.getCounter().subscribe((value) => this.counter = value)
  }
}
