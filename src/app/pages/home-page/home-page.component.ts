import { Component, OnInit } from '@angular/core';
import {ApiService} from '../../services/api.service';
import {Router} from '@angular/router';
import {DialogsService} from '../../services/dialogs.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  allObjects: Array<any>;
  title: string;
  isDataLoading: boolean;
  filteringSearchPTable: any[];

  constructor(private apiService: ApiService,
              private router: Router,
              private dialogService: DialogsService) {
  }

  async ngOnInit() {
    this.isDataLoading = true;
    try {
      this.title = 'List of space objects';
      this.allObjects = await this.apiService.getAllObjects();
    } finally {
      this.isDataLoading = false;
    }
  }


  addNewObject() {
    this.router.navigate(['objects-list', 'new']);
  }

  editObject(id: number, type: string) {
    this.router.navigate(['objects-list', type, id, 'edit']);
  }

  async deleteObject(id: string, type: string, index, name: string) {
    const result = await this.dialogService.deleteDialog(name);
    if (result) {
      this.allObjects.splice(index, 1);
      this.allObjects = [...this.allObjects];
      await this.apiService.deleteObject(id, type.toLowerCase());
    }
  }

  setFilteringSearchPTable(event) {
    this.filteringSearchPTable = event.filteredValue;
  }
}
