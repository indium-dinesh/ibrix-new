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

  /* Destination table */
  
  ngOnInit(){
    this.dbSubscribe = this.service.getAllDBdata().subscribe ({
      next: (res)=>{
        console.log("API response", res);
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
