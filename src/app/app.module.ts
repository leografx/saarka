import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { FooterComponent } from './app.footer';
import { NavComponent } from './nav/app.nav.component';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { PageNotFoundComponent } from "./page-not-found/app.page-not-found.component";
import { SalesComponent } from "./sales/app.sales.component";
import { SalesOrdersComponent } from "./sales/app.sales-orders.component";
import { SalesOrderEditComponent } from "./sales/app.sales.order-edit.component";
import { SalesReportsComponent } from "./sales/app.sales-reports.component";
import { MaterialsComponent } from "./materials/app.materials.component";
import { MaterialInventoryComponent } from './materials/app.materials.inventory-component';
import { VendorsComponent } from "./vendors/app.vendors.component";
import { ProductionComponent } from "./production/app.production.component";
import { PlannerComponent } from "./planner/app.planner.component";
import { PlannerDateComponent } from "./planner/app.planner.date.component";
import { FormulasComponent } from "./formulas/app.formulas.formulas-component";
import { FormulaFormComponent } from "./formulas/app.formulas.formula-form-component";
import { FormulaEditComponent } from "./formulas/app.formulas.formula-edit-component";
import { FormulaPostComponent } from "./formulas/app.formulas.formula-post-component";
import { PurchasingComponent } from "./purchasing/app.purchasing.component";
import { PurchasingReportComponent } from "./purchasing/app.purchasing-report.component";
import { FilterPipe } from './pipes/filter.pipes';
import { AppComponent } from './app.component';
import { MoldComponent } from './molds/app.molds.mold.component';
import { InstructionComponent } from "./instructions/app.instructions.instruction.component";
import { UserListComponent } from './users/app.users.user-list-component';
import { ProductInventoryComponent } from './products/app.products.inventory-component';
import { ForecastComponent } from './forecast/app.forecast.forecast-component';
import { ForecasterComponent } from './forecast/app.forecast.forecaster-component';
import { TypeAheadComponent } from './typeahead/app.typeahead.typeahead-component';

import { ModalModule } from 'ng2-bootstrap/modal';
import { TabsModule } from 'ng2-bootstrap/tabs';
import { DatepickerModule } from 'ng2-bootstrap/datepicker';

import { NewVendorModalComponent } from './modals/app.new-vendor-modal.component';
import { ScheduleModalComponent } from './planner/app.planner.schedule.modal.component';
import { CustomerModalComponent } from './modals/app.customer.modal';
import { CalendarComponent } from './calendar/app.calendar.component';
import { CalendarInputComponent } from './calendar/app.calendar.input.component';
import { ProductComponent } from './products/app.products.component';
import { CustomerComponent } from './customer/app.customer.component';
import { ShippingComponent } from './shipping/app.shipping.component';
import { CreateCustomerComponent } from "./customer/app.create.customer.component";
import { CustomerListComponent } from "./customer/app.customer.list.component";
import { EditCustomerComponent } from "./customer/app.customer.edit.component";
import { CustomerPickerComponent } from "./customer/app.customer.picker.component";
import { BatchTicketComponent } from "./tickets/app.tickets.batch-ticket.component";
import { BuildTicketComponent } from "./tickets/app.tickets.build.ticket.component";
import { PlannerService } from './services/planner.service';
import { UomComponent } from './uom/app.uom.component';
import { DepartmentComponent } from './departments/app.departments.department.component';
import { Auth } from './users/authorization';
import { UserLoginComponent } from './users/app.users.user-login-component';
import { LogoutComponent } from './users/app.users.logout.component';
import { AuthService } from './services/app.services.auth.service';
import { LoaderComponent } from './app.loader-component';
import { CountPipe } from './pipes/count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TypeAheadComponent,
    FooterComponent,
    NavComponent,
    PageNotFoundComponent,
    SalesComponent,
    MaterialsComponent,
    VendorsComponent,
    SalesOrdersComponent,
    SalesReportsComponent,
    SalesOrderEditComponent,
    ProductionComponent,
    PlannerComponent,
    FormulasComponent,
    FormulaFormComponent,
    FormulaEditComponent,
    FormulaPostComponent,
    PurchasingComponent,
    PurchasingReportComponent,
    FilterPipe,
    NewVendorModalComponent,
    CalendarComponent,
    CalendarInputComponent,
    ProductComponent,
    CustomerComponent,
    ShippingComponent,
    CreateCustomerComponent,
    CustomerListComponent,
    CustomerModalComponent,
    EditCustomerComponent,
    CustomerPickerComponent,
    PlannerDateComponent,
    ScheduleModalComponent,
    BatchTicketComponent,
    BuildTicketComponent,
    MoldComponent,
    UomComponent,
    DepartmentComponent,
    InstructionComponent,
    UserLoginComponent,
    LogoutComponent,
    UserListComponent,
    ProductInventoryComponent,
    MaterialInventoryComponent,
    ForecastComponent,
    ForecasterComponent,
    LoaderComponent,
    CountPipe
  ],
  imports: [
    routes,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    TabsModule.forRoot(),
    HttpModule,
    DatepickerModule.forRoot()
  ],
  providers: [PlannerService, Auth, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }