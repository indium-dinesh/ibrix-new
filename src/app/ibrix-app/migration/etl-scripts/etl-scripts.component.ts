import { Component } from '@angular/core';

@Component({
  selector: 'app-etl-scripts',
  templateUrl: './etl-scripts.component.html',
  styleUrls: ['./etl-scripts.component.scss']
})
export class EtlScriptsComponent {
  customScriptBtn:any = {class: 'btn btn-outline-primary', icon: 'feather icon-plus-squre', label: 'Add ETL Script'}
  showMigrationForm: boolean = false;
  addNewScript(){
    this.showMigrationForm = true;

  }
}
