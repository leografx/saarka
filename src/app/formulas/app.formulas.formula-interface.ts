export interface IFormula{
	id?:number
	number:string
	name:string
	revision_no:number
	total_weight:number
	loss_factor:number
	weight_uom:string
	yield:number
	yield_uom:string
	status?:string
	user_id?:number
	user_name?:string
	created_date?:string
	created_by?:string
	updated_by?:string
	updated?:string
	materials:any[]
	instructions:any[]
}

// `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
// `number` varchar(100) DEFAULT NULL,
// `name` varchar(200) DEFAULT NULL,
// `revision_no` int(11) DEFAULT '1',
// `total_weight` float DEFAULT '0',
// `weight_uom` varchar(20) DEFAULT 'LBS',
// `yield` float DEFAULT '0',
// `yield_uom` varchar(20) DEFAULT 'LBS',
// `status` varchar(100) DEFAULT 'Active',
// `user_id` int(11) DEFAULT NULL,
// `user_name` int(11) DEFAULT NULL,
// `created_date` varchar(200) DEFAULT NULL,
// `created_by` varchar(200) DEFAULT NULL,
// `updated_by` varchar(200) DEFAULT 'Admin',
// `updated` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
