import { Component,Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
@Input() type?:any
@Input() buttonContent:any
  ngOnInit(){
    this.buttonContent=="Launch App"
    this.type="primary"

  }
}
