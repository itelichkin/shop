import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';

@Component({
  selector: 'app-ice-cream-page',
  templateUrl: './ice-cream-page.component.html',
  styleUrls: ['./ice-cream-page.component.scss']
})
export class IceCreamPageComponent implements OnInit {
  allIceCreams: any;

  constructor(private api: ApiService) {
  }

  async ngOnInit() {
    this.allIceCreams = await this.api.getIceCreams();
    this.allIceCreams.forEach((x)=> {
      if (!x.image) x['image'] = 'default_ice_cream';
    });
  }
}
