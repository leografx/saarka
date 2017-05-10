import { Component } from '@angular/core';
 
@Component({
  selector: 'new-vendor-modal',
  templateUrl: 'new-vendor-modal.html',
  inputs:['vendorSelected','newVendor','vendorEditData'],
  styles:[`
		label{
			font-weight:200;
		}
		button span{
			font-size:20px;
		}
  `]
})
export class NewVendorModalComponent {
	vendorSelected:boolean = false;
	newVendor:string
	vendorEditData:any = {address:''};
	vendorEdit;
}