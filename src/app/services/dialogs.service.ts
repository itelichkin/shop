import {Injectable} from '@angular/core';
import {MatDialog, MatDialogConfig} from '@angular/material';
import {DeleteDialogComponent} from '../dialogs/delete-dialog/delete-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class DialogsService {
  constructor(private dialog: MatDialog) {
  }

  private getMdDialogConfig(data?: any, config?: any): MatDialogConfig {
    config = config || {};
    const defaults = {
      disableClose: false,
      width: config.width || '310px', height: config.height || '',
      position: {top: '', bottom: '', left: '', right: ''},
      data: data || {}
    };
    const settings = Object.assign({}, defaults, config);
    return settings;
  }

  private open<T>(DialogClass, data: any, config?: MatDialogConfig) {
    const dialogRef = this.dialog.open(DialogClass, this.getMdDialogConfig(data, config));
    return dialogRef;
  }

  private openDialog(DialogClass, data: any, config?: MatDialogConfig): Promise<any> {
    return new Promise<string>((resolve) => {
      const dialogRef = this.open(DialogClass, data, config);
      dialogRef.afterClosed().subscribe(value => resolve(value));
    });
  }


  async deleteDialog(objectName: string) {
    return await this.openDialog(DeleteDialogComponent, {name: objectName});
  }
}
