import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';
import {ApiService} from '../../../services/api.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-modify-object',
  templateUrl: './modify-object.component.html',
  styleUrls: ['./modify-object.component.scss']
})
export class ModifyObjectComponent implements OnInit {
  objectId: string;
  objectType: string;
  modifyAction: string;
  selectedObject: any;
  formObject: FormGroup;
  typeArray: string[];
  isDataLoading: boolean;

  constructor(private apiService: ApiService,
              private route: ActivatedRoute,
              private router: Router,
              public formBuilder: FormBuilder) {
    this.route.params.subscribe((params: any) => {
      if (params) {
        if (params.id) {
          this.objectId = params.id;
        }
        if (params.type) {
          this.objectType = params.type;
        }
        this.modifyAction = params.action ? 'Edit object' : 'New object';
      }
    });
  }

  async ngOnInit() {
    this.isDataLoading = true;
    try {

      if (!this.objectId) {
        this.selectedObject = {};
        this.createNewForm();
      } else {
        this.selectedObject = await this.apiService.getObject(this.objectId, this.objectType.toLowerCase());
        if (!this.selectedObject) return;
        this.createEditForm();
      }
      this.typeArray = ['pizza', 'sweet', 'ice-cream'];
      this.formObject.get('name').updateValueAndValidity();
      this.formObject.get('name').markAsUntouched();
    } finally {
      this.isDataLoading = false;
    }
  }

  createNewForm() {
    this.formObject = this.formBuilder.group({
      name: new FormControl({value: '', disabled: false}, [Validators.required]),
      type: new FormControl({value: '', disabled: false}, [Validators.required]),
      price: new FormControl({value: '', disabled: false}, [Validators.required]),
    });
  }

  createEditForm() {
    this.formObject = this.formBuilder.group({
      id: new FormControl({value: this.selectedObject.id, disabled: false}),
      name: new FormControl({value: this.selectedObject.name || '', disabled: false}),
      type: new FormControl({value: this.selectedObject.type || '', disabled: true}),
      price: new FormControl({value: this.selectedObject.price || '', disabled: false}, [Validators.required])

    });
    this.formObject.get('name').setValidators([Validators.required]);
  }


  setType() {
    const type = this.formObject.get('type').value;
    this.formObject.get('name').updateValueAndValidity();
  }


  async submitForm() {
    this.isDataLoading = true;
    try {
      const newDataProvider = this.selectedObject || {};
      newDataProvider['name'] = this.formObject.get('name').value;
      newDataProvider['type'] = (this.formObject.get('type').value).toLowerCase();
      newDataProvider['price'] = this.formObject.get('price').value;

      const result = this.modifyAction === 'Edit object' ?
        await this.apiService.editObject(newDataProvider, newDataProvider.type) :
        await this.apiService.createNewObject(newDataProvider, newDataProvider.type);
      this.router.navigate(['/home']);
    } finally {
      this.isDataLoading = false;
    }
  }

  cancelForm() {
    this.router.navigate(['/home']);
  }

}
