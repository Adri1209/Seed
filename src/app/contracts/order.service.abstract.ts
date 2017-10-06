import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { ReplaySubject } from 'rxjs/ReplaySubject';

import { Order } from './order.model';

@Injectable()
export class AbstractOrderService {
    private serviceUrl : string = "http://localhost:3000/api/orders";
    
        constructor(private http: Http)
        {
            this.getOrders().then(o => this.orders.next(o));
        }
    
        public orders = new ReplaySubject<Order[]>();
    
        private getOrders(): Promise<Order[]> {
    
            return Promise.resolve([
                JSON.parse('{"OrderNumber":1,"Payment":{"PaymentId":"PAY-33K62037CX912071ELHBCYEI","InvoiceNumber":null,"ShippingDetails":{"PaymentId":null,"FirstName":"Stefan","LastName":"Dirschnabel","AddressLine1":"Körnerstraße 50","AddressLine2":"","City":"Karlsruhe","PostalCode":"76135","CountryCode":"DE","EMail":"stefan.dirschnabel@whisky-factory.com"},"State":0},"ShoppingBasket":{"BlendedWhisky":{"Bottle":{"Name":"Klein","BottleSize":0,"ImageFileName":"bottle.jpg","id":"78ecad58-e45f-4908-b6d2-715f5a28c938","version":1},"WhiskySelection":[{"Whisky":{"Name":"Basic","Summary":"Kräftig mit leichter Süße und Säure.","Description":"Single Grain, der …","PriceInEuroPer10MillilitersIncludingTax":0.94,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#FF7903","id":"30c8ea4c-66bb-42fe-a656-5cfb67ebea7e","version":1},"AmountInMilliliters":130},{"Whisky":{"Name":"Fruchtig","Summary":"Reife Früchte kombiniert mit würziger Malznote.","Description":"Das Zusammenspiel von kräftigem Malz...","PriceInEuroPer10MillilitersIncludingTax":0.84,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#C22B00","id":"28f9a6e5-3f8e-4122-a4af-736e96193ff0","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Sweet","Summary":"Süß und fruchtig.","Description":"Ausbalancierte Süße mit ...","PriceInEuroPer10MillilitersIncludingTax":0.78,"VolAlc":40,"SupportedBottleSize":0,"ColorHexCode":"#5E86FF","id":"6dedf66f-5cb1-4022-a0b1-d21a847e7f26","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Sherry","Summary":"Sherry und ein Hauch Süße.","Description":"Deutlicher Einfluss vom spanischen ...","PriceInEuroPer10MillilitersIncludingTax":0.97,"VolAlc":40,"SupportedBottleSize":0,"ColorHexCode":"#710100","id":"774fb058-7026-4b25-964b-cb1b0be350ff","version":1},"AmountInMilliliters":120},{"Whisky":{"Name":"Smoky","Summary":"Würzig mit Rauch und Pfeffer.","Description":"Komplex und kräftig mit Rauch ...","PriceInEuroPer10MillilitersIncludingTax":0.97,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#494961","id":"0c1207cd-387a-403e-806d-631ec7b645a1","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Sea","Summary":"Rauch und See.","Description":"Eine anfängliche Süße weicht kräftigem ...","PriceInEuroPer10MillilitersIncludingTax":1.08,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#065967","id":"da354388-a909-497e-9b12-356f869e9994","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Strong","Summary":"Malzig mit kräftiger Würze und Eiche.","Description":"Mandarine und Zitrusfrucht ...","PriceInEuroPer10MillilitersIncludingTax":1.16,"VolAlc":46,"SupportedBottleSize":0,"ColorHexCode":"#441302","id":"a60edc15-6fb0-4dde-a28a-e62f15af9cec","version":1},"AmountInMilliliters":100}],"WhiskyName":"Knallt rein!","BlenderName":"Benjamin Blümchen","PriceIncludingTaxInEuro":35.46,"BatchNumber":"20170920-1"},"VoucherId":null,"ShippingCharges":4.2,"TotalPrice":39.66},"id":"e6ddce6e-23b8-4558-8260-45d9f641f1e6","version":1}')
            ]);
        }
    
        private handleError(error: any): Promise<any> {
            console.error('An error occurred', error); // for demo purposes only
            return Promise.reject(error.message || error);
        }
}