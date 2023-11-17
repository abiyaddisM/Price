import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-price',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './price.component.html',
  styleUrl: './price.component.css'
})
export class PriceComponent {
  @Input() lists=["Front-End Website","Social Media Management","Products Photography","Videography"];
  @Input() title:string="";
  @Input() button:string="";
  state:boolean=false;
  closeSeeMore(){
    this.state=!this.state;
    console.log("hey")
  }
}
