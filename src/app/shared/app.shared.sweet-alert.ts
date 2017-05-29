import { default as swal } from 'sweetalert2';

export const alertSuccess = function(){
	swal({
		  title: 'Updated Successfully',
		  text: 'Do you want to continue',
		  type: 'success',
		  confirmButtonColor:'#87E2D1',
		  confirmButtonClass: 'sweet-alert-button',
		  confirmButtonText: 'Cool'
	});
}

export const alertError = function(error){
	swal({
	  title: error,
	  text: 'Do you want to continue',
	  type: 'error',
	  confirmButtonText: 'Oops'
	});
}