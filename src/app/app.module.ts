import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';

import { AppComponent } from './app.component';
import { OrderOverviewComponent } from './order-overview/order-overview.component';
import { HelpComponent } from './help/help.component';
import { AbstractOrderService } from './contracts/order.service.abstract';
import { OrderService } from './order-overview/order.service';


import { routing } from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        OrderOverviewComponent,
        HelpComponent
    ],
    providers: [
        {
        provide: AbstractOrderService,
        useClass: OrderService
        }],
    bootstrap: [AppComponent]
})
export class AppModule { }