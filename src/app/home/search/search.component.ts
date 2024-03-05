import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private route: ActivatedRoute){}

  ngOnInit() {
  this.route.params.subscribe(params => {
    const searchQuery = params['search'];
  })
  }

}
