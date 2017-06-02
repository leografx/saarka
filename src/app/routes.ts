import { RouterModule }   from '@angular/router';
import { PageNotFoundComponent } from "./page-not-found/app.page-not-found.component";
import { SalesComponent } from "./sales/app.sales.component";
import { SalesOrdersComponent } from "./sales/app.sales.orders-component";
import { SalesReportsComponent } from "./sales/app.sales-reports.component";
import { ProductionComponent } from "./production/app.production.component";
import { MaterialsComponent } from "./materials/app.materials.component";
import { VendorsComponent } from "./vendors/app.vendors.component";
import { PlannerComponent } from "./planner/app.planner.component";
import { FormulasComponent } from "./formulas/app.formulas.formulas-component";
import { FormulaPostComponent } from "./formulas/app.formulas.formula-post-component";
import { FormulaEditComponent } from "./formulas/app.formulas.formula-edit-component";
import { PurchasingComponent } from "./purchasing/app.purchasing.component";
import { PurchasingReportComponent } from "./purchasing/app.purchasing-report.component";
import { ProductComponent } from "./products/app.products.component";
import { CreateCustomerComponent } from "./customer/app.create.customer.component";
import { CustomerListComponent } from "./customer/app.customer.list.component";
import { BatchTicketComponent } from "./tickets/app.tickets.batch-ticket.component";
import { BuildTicketComponent } from "./tickets/app.tickets.build.ticket.component";
import { MoldComponent } from './molds/app.molds.mold.component';
import { Auth } from './users/authorization';
import { UserLoginComponent } from './users/app.users.user-login-component';
import { LogoutComponent } from './users/app.users.logout.component';
import { UserListComponent } from './users/app.users.user-list-component';
import { ProductInventoryComponent } from './products/app.products.inventory-component';
import { MaterialInventoryComponent } from './materials/app.materials.inventory-component';
import { ForecasterComponent } from './forecast/app.forecast.forecaster-component';

export const routes = RouterModule.forRoot(
	[
		{
		  path:'sales',
		  component:SalesComponent,
		  canActivate:[Auth]
		},

		// {
		//   path:'sales-orders',
		//   component:SalesOrdersComponent,
		//   canActivate:[Auth]
		// },
		{
		  path:'sales-order',
		  component:SalesOrdersComponent,
		  // canActivate:[Auth]
		},

		{
		  path:'sales-order/:id',
		  component:SalesOrdersComponent,
		  canActivate:[Auth]
		},

		{
		  path:'sales-reports',
		  component:SalesReportsComponent,
		  canActivate:[Auth]
		},
		{
		  path:'users',
		  component:UserListComponent,
		  canActivate:[Auth]
		},
		{
		  path:'vendors',
		  component:VendorsComponent,
		  canActivate:[Auth]
		},
		{
		  path:'production',
		  component:ProductionComponent,
		  canActivate:[Auth]
		},
		{
		  path:'products',
		  component:ProductComponent,
		  canActivate:[Auth]
		},
		{
		  path:'product-inventory',
		  component:ProductInventoryComponent,
		  canActivate:[Auth]
		},
		{
		  path:'forecaster',
		  component:ForecasterComponent,
		  canActivate:[Auth]
		},
		{
		  path:'planner',
		  component:PlannerComponent,
		  canActivate:[Auth]
		},
		{
		  path:'planner/:id',
		  component:PlannerComponent,
		  canActivate:[Auth]
		},
		{
		  path:'formulas',
		  component:FormulasComponent,
		  canActivate:[Auth]
		},
		{
		  path:'formula-post',
		  component:FormulaPostComponent,
		  canActivate:[Auth]
		},
		{
		  path:'formula-edit/:id',
		  component:FormulaEditComponent,
		  canActivate:[Auth]
		},
		{
		  path:'purchasing',
		  component:PurchasingComponent,
		  canActivate:[Auth]
		},
		{
		  path:'purchasing-report',
		  component:PurchasingReportComponent,
		  canActivate:[Auth]
		},
		{
		  path:'materials',
		  component:MaterialsComponent,
		  canActivate:[Auth]
		},
		{
		  path:'material-inventory',
		  component:MaterialInventoryComponent,
		  canActivate:[Auth]
		},
		{
		  path:'customers',
		  component:CustomerListComponent,
		  canActivate:[Auth]
		},
		{
		  path:'customer-create',
		  component:CreateCustomerComponent,
		  canActivate:[Auth]
		},
		{
			path:'batch-ticket',
		  	component:BatchTicketComponent,
		  	canActivate:[Auth]
		},
		{
			path:'build-ticket',
		  	component:BuildTicketComponent,
		  	canActivate:[Auth]
		},
		{
			path:'molds',
		  	component:MoldComponent,
		  	canActivate:[Auth]
		},
		{
			path:'logout',
		  	component:LogoutComponent
		},
		{
			path:'login',
		  	component:UserLoginComponent
		},
		{
		path: '**',
		component:PageNotFoundComponent 
		}

	]
);