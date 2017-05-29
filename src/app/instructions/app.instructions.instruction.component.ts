import { Component, EventEmitter } from '@angular/core';

@Component({
	selector:'instruction',
	templateUrl:'instruction.html',
	inputs:['step_no','isLast','step'],
	outputs:['addStep','deleteStep','updateStep']
})

export class InstructionComponent{
	instructions = [];
	step_no;
	step;
	last;
	isLast;
	addStep:EventEmitter<any> = new EventEmitter<any>();
	deleteStep:EventEmitter<any> = new EventEmitter<any>();
	updateStep:EventEmitter<any> = new EventEmitter<any>();
	
	addInstruction(){
		this.addStep.emit({message:'Create new step'});
	}

	deleteInstruction(){
		this.deleteStep.emit({message:'Delete new step'});
	}
	stepInstruction(){
		this.updateStep.emit({value:this.step,step_no: this.step_no});
	}
}