import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'ibrix-target-form',
  templateUrl: './target-form.component.html',
  styleUrls: ['./target-form.component.scss']
})
export class TargetFormComponent {
  @Input() data: any;
  @Output() submitForm = new EventEmitter();
  @Output() closeForm = new EventEmitter();
  directory:string = ''
}
