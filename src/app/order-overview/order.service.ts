import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Order } from '../contracts/order.model';
import { AbstractOrderService } from '../contracts/order.service.abstract';

@Injectable()
export class OrderService extends AbstractOrderService {
    
}