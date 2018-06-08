import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-sweets-page',
  templateUrl: './sweets-page.component.html',
  styleUrls: ['./sweets-page.component.scss']
})
export class SweetsPageComponent implements OnInit {
  allSweets: any;

  constructor(private api: ApiService) {
  }

  async ngOnInit() {
    this.allSweets = await this.api.getSweets();
    this.allSweets.forEach((x)=> {
      if (!x.image) x['image'] = 'default_sweets';
    });
  }
}
