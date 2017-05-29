export interface IProduct{
	id:number;
	item_no:string
	name:string
	description?:string
	case?:string
	category?:string
	status?:string
	size?:string
	cut_score?:string
	par?:string
	on_hand:number
	qa_hold:number
	available:number
	inventory_quantity?:number
	inventory_size?:string
	inventory_weight?:string
	inventory_weight_unit?:string
	inventory_location?:string
}