export class Material {
		item_no:string
		name:string
		weight:string
		weight_unit:string
		size:string
		lbs:string
		manufacture:string
		inventory_quantity:number
		inventory_weight:number
		inventory_size:string
		inventory_weight_unit:string
		inventory_location:string

	constructor(
		item_no:string,
		name:string,
		weight:string,
		weight_unit:string,
		size:string,
		lbs:string,
		manufacture:string,
		inventory_quantity:number,
		inventory_weight:number,
		inventory_size:string,
		inventory_weight_unit:string,
		inventory_location:string
	){
		this.item_no = item_no;
		this.name = name;
		this.weight = weight;
		this.weight_unit = weight_unit;
		this.size = size;
		this.lbs = lbs;
		this.manufacture = manufacture;
		this.inventory_quantity = inventory_quantity;
		this.inventory_weight = inventory_weight;
		this.inventory_size = inventory_size;
		this.inventory_weight_unit = inventory_weight_unit;
		this.inventory_location = inventory_location;
	}
}