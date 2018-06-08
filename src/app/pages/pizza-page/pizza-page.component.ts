import {Component, OnInit} from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-pizza-page',
  templateUrl: './pizza-page.component.html',
  styleUrls: ['./pizza-page.component.scss']
})
export class PizzaPageComponent implements OnInit {

  allPizzas: any;

  constructor(private api: ApiService) {
  }

  async ngOnInit() {
    this.allPizzas = await this.api.getPizzas();
    this.allPizzas.forEach((x)=> {
      if (!x.image) x['image'] = 'default_pizza';
    });
  }

}
