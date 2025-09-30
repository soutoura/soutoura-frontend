import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonicModule } from "@ionic/angular";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
  imports: [IonicModule],
})
export class SearchBarComponent  implements OnInit {
 @Input() placeholder: string = 'Rechercher...';
  @Output() search = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

   

  onSearch(event: any) {
    const value = event.target.value;
    this.search.emit(value);
  }

}
