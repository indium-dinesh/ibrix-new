import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ibrix-source-form',
  templateUrl: './source-form.component.html',
  styleUrls: ['./source-form.component.scss']
})
export class SourceFormComponent {
  @Input() data: any;
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();

  sqlServerAddress: string = '';
  sqlUsername: string = '';
  sqlPassword: string = '';

  oracleServerName: string = '';
  oracleSid: string = '';
  oracleUsername: string = '';
  oraclePassword: string = '';

  mongodbServerAddress: string = '';
  mongodbPort: string = '';
  mongodbDatabaseName: string = '';
  mongodbUsername: string = '';
  mongodbPassword: string = '';

  db2ServerName: string = '';
  db2Port: string = '';
  db2DatabaseName: string = '';
  db2Username: string = '';
  db2Password: string = '';

  testConnectionLoader: boolean = false;

  databaseTypes: string[] = ['MySQL', 'SQL Server', 'Oracle', 'MongoDB', 'DB2'];
  selectedDatabaseType: string = 'MySQL';
  database_name: string = '';

  constructor() {
    if (this.data?.title === 'Database') {
      this.selectedDatabaseType = this.data.data ? this.data.data.type : '';
      this.database_name = this.data.data ? this.data.data.database_name : '';
      switch (this.selectedDatabaseType) {
        case 'MySQL':
          this.sqlServerAddress = this.data.data.sqlServerAddress;
          this.sqlUsername = this.data.data.sqlUsername;
          this.sqlPassword = this.data.data.sqlPassword;
          break;
        case 'SQL Server':
          console.log('SQL server ', this.data.data);
          this.sqlServerAddress = this.data.data.sqlServerAddress;
          this.sqlUsername = this.data.data.sqlUsername;
          this.sqlPassword = this.data.data.sqlPassword;
          break;
        case 'Oracle':
          this.oracleServerName = this.data.data.oracleServerName;
          this.oracleSid = this.data.data.oracleSid;
          this.oracleUsername = this.data.data.oracleUsername;
          this.oraclePassword = this.data.data.oraclePassword;
          break;
        case 'MongoDB':
          this.mongodbServerAddress = this.data.data.mongodbServerAddress;
          this.mongodbPort = this.data.data.mongodbPort;
          this.mongodbDatabaseName = this.data.data.mongodbDatabaseName;
          this.mongodbUsername = this.data.data.mongodbUsername;
          this.mongodbPassword = this.data.data.mongodbPassword;
          break;
        case 'DB2':
          this.db2ServerName = this.data.data.db2ServerName;
          this.db2Port = this.data.data.db2Port;
          this.db2DatabaseName = this.data.data.db2DatabaseName;
          this.db2Username = this.data.data.db2Username;
          this.db2Password = this.data.data.db2Password;
          break;
      }
    }
  }
  onSubmit() {
    let returnData: any = [];
    switch (this.selectedDatabaseType) {
      case 'MySQL':
        returnData = {
          sqlServerAddress: this.sqlServerAddress,
          sqlUsername: this.sqlUsername,
          sqlPassword: this.sqlPassword
        };
        break;
      case 'SQL Server':
        returnData = {
          sqlServerAddress: this.sqlServerAddress,
          sqlUsername: this.sqlUsername,
          sqlPassword: this.sqlPassword
        };
        break;
      case 'Oracle':
        returnData = {
          oracleServerName: this.oracleServerName,
          oracleSid: this.oracleSid,
          oracleUsername: this.oracleUsername,
          oraclePassword: this.oraclePassword
        };
        break;
      case 'MongoDB':
        returnData = {
          mongodbServerAddress: this.mongodbServerAddress,
          mongodbPort: this.mongodbPort,
          mongodbDatabaseName: this.mongodbDatabaseName,
          mongodbUsername: this.mongodbUsername,
          mongodbPassword: this.mongodbPassword
        };
        break;
      case 'DB2':
        returnData = {
          db2ServerName: this.db2ServerName,
          db2Port: this.db2Port,
          db2DatabaseName: this.db2DatabaseName,
          db2Username: this.db2Username,
          db2Password: this.db2Password
        };
        break;
    }
    // returnData['dbName'] = this.dbName;
    returnData['type'] = this.selectedDatabaseType;

    // returnData['existing'] = this.data.data
    console.log('Save Update', returnData);
    let APIParams: any = {};
    APIParams['database_name'] = this.database_name;
    APIParams['databasetype'] = 'db';
    APIParams['userid'] = 13;
    APIParams['config_data'] = JSON.stringify(returnData);
    if (this.data.data && this.data.data.id) {
      APIParams['id'] = this.data.data.id;
      // this.updateCall(APIParams);
    } else {
      // this.createCall(APIParams);
    }
    this.submitForm.emit(APIParams);
  }

  testConnection() {
    let conn = {};
    if (this.data.title === 'Database' && this.selectedDatabaseType !== 'SQL Server') {
      // this.snackBar.open('We have build only for MSSQL so far, Thanks', 'OK', {
      //   duration: 4000,
      // });
      return;
    } else if (this.data.title === 'Database') {
      conn = {
        databasetype: 'SQL Server',
        server: this.sqlServerAddress,
        uid: this.sqlUsername,
        pid: this.sqlPassword
      };
    }
    this.testConnectionLoader = true;
    /** API Call
    this.service.getDbDetails(conn).subscribe({
      next: (res: any) => {
        this.testConnectionLoader = false;
        if (res.Success && res.Success === true) {
          this.snackBar.open(
            'Connection Success',
            'OK',
            { duration: 4000 }
          );
        } else {
          this.snackBar.open(
            `Something went wrong or wrong ${this.data.title} credentials`,
            'OK',
            { duration: 4000 }
          );
        }
      },
      error: (err) => {
        this.testConnectionLoader = false;
        this.snackBar.open(
          `Something went wrong or wrong ${this.data.title} credentials`,
          'OK',
          { duration: 4000 }
        );
      },
    });

    */
  }
  close() {
    this.closeForm.emit()
  }
}
