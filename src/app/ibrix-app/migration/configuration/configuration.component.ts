import { Component, OnDestroy, OnInit } from '@angular/core';
import { MigrationService } from '../migration.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.scss']
})
export class ConfigurationComponent implements OnInit, OnDestroy {

  constructor(private service: MigrationService){}
  /* Source table */
  private dbSubscribe !:Subscription;
  displaySourceTable: boolean = true;
  sourceList: any = [];
  customSourceBtn:any = {class: 'btn btn-outline-primary', icon: 'feather icon-plus-squre', label: 'Add Source Connection'}
  sourceData: any ;
  addNewSource(){
    this.displaySourceTable =!this.displaySourceTable;
    this.customSourceBtn.label = this.displaySourceTable?'Add Source Connection':'Back';
    this.sourceData = {
      title: 'Database',
      edit: 'add',
    }
  }
  submitSourceForm(data:any){
    console.log("Submit Form", data)
  }
  closeSourceForm(){
    this.displaySourceTable =!this.displaySourceTable;
    this.customSourceBtn.label = this.displaySourceTable?'Add Source Connection':'Back';
  }
  editSource(row: any){
    this.displaySourceTable =!this.displaySourceTable;
    this.customSourceBtn.label = this.displaySourceTable?'Add Source Connection':'Back';
    this.sourceData = {
      title: 'Database',
      edit: 'edit',
      data: row
    }
  }
  viewSource(row: any){
    this.displaySourceTable =!this.displaySourceTable;
    this.customSourceBtn.label = this.displaySourceTable?'Add Source Connection':'Back';
    this.sourceData = {
      title: 'Database',
      edit: 'view',
      data: row
    }
  }
  /* Destination table */
  private targetSubscribe !:Subscription;
  displayTargetTable: boolean = true;
  targetList: any = [];
  customTargetBtn:any = {class: 'btn btn-outline-primary', icon: 'feather icon-plus-squre', label: 'Add Target Connection'}
  targetData: any ;
  addNewTarget(){
    this.displayTargetTable =!this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable?'Add Target Connection':'Back';
    this.targetData = {
      title: 'Target',
      edit: 'add',
    }
  }
  submitTargetForm(data:any){
    console.log("Submit Form", data)
  }
  closeTargetForm(){
    this.displayTargetTable =!this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable?'Add Target Connection':'Back';
  }
  editTarget(row: any){
    this.displayTargetTable =!this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable?'Add Target Connection':'Back';
    this.targetData = {
      title: 'Target',
      edit: 'edit',
      data: row
    }
  }
  viewTarget(row: any){
    this.displayTargetTable =!this.displayTargetTable;
    this.customTargetBtn.label = this.displayTargetTable?'Add Target Connection':'Back';
    this.targetData = {
      title: 'Target',
      edit: 'view',
      data: row
    }
  }
  
  ngOnInit(){
    this.dbSubscribe = this.service.getAllDBdata().subscribe ({
      next: (res)=>{
        console.log("API response", res);
        this.sourceList = res;
      },
      error: (error) => {
        console.log("error ", error)
      }
    })
  }
  ngOnDestroy(): void {
    if (this.dbSubscribe) this.dbSubscribe.unsubscribe();
  }
}
