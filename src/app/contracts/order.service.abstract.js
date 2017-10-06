"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var ReplaySubject_1 = require("rxjs/ReplaySubject");
var AbstractOrderService = /** @class */ (function () {
    function AbstractOrderService(http) {
        var _this = this;
        this.http = http;
        this.serviceUrl = "http://localhost:3000/api/orders";
        this.orders = new ReplaySubject_1.ReplaySubject();
        this.getOrders().then(function (o) { return _this.orders.next(o); });
    }
    AbstractOrderService.prototype.getOrders = function () {
        return Promise.resolve([
            JSON.parse('{"OrderNumber":1,"Payment":{"PaymentId":"PAY-33K62037CX912071ELHBCYEI","InvoiceNumber":null,"ShippingDetails":{"PaymentId":null,"FirstName":"Stefan","LastName":"Dirschnabel","AddressLine1":"Körnerstraße 50","AddressLine2":"","City":"Karlsruhe","PostalCode":"76135","CountryCode":"DE","EMail":"stefan.dirschnabel@whisky-factory.com"},"State":0},"ShoppingBasket":{"BlendedWhisky":{"Bottle":{"Name":"Klein","BottleSize":0,"ImageFileName":"bottle.jpg","id":"78ecad58-e45f-4908-b6d2-715f5a28c938","version":1},"WhiskySelection":[{"Whisky":{"Name":"Basic","Summary":"Kräftig mit leichter Süße und Säure.","Description":"Single Grain, der …","PriceInEuroPer10MillilitersIncludingTax":0.94,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#FF7903","id":"30c8ea4c-66bb-42fe-a656-5cfb67ebea7e","version":1},"AmountInMilliliters":130},{"Whisky":{"Name":"Fruchtig","Summary":"Reife Früchte kombiniert mit würziger Malznote.","Description":"Das Zusammenspiel von kräftigem Malz...","PriceInEuroPer10MillilitersIncludingTax":0.84,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#C22B00","id":"28f9a6e5-3f8e-4122-a4af-736e96193ff0","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Sweet","Summary":"Süß und fruchtig.","Description":"Ausbalancierte Süße mit ...","PriceInEuroPer10MillilitersIncludingTax":0.78,"VolAlc":40,"SupportedBottleSize":0,"ColorHexCode":"#5E86FF","id":"6dedf66f-5cb1-4022-a0b1-d21a847e7f26","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Sherry","Summary":"Sherry und ein Hauch Süße.","Description":"Deutlicher Einfluss vom spanischen ...","PriceInEuroPer10MillilitersIncludingTax":0.97,"VolAlc":40,"SupportedBottleSize":0,"ColorHexCode":"#710100","id":"774fb058-7026-4b25-964b-cb1b0be350ff","version":1},"AmountInMilliliters":120},{"Whisky":{"Name":"Smoky","Summary":"Würzig mit Rauch und Pfeffer.","Description":"Komplex und kräftig mit Rauch ...","PriceInEuroPer10MillilitersIncludingTax":0.97,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#494961","id":"0c1207cd-387a-403e-806d-631ec7b645a1","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Sea","Summary":"Rauch und See.","Description":"Eine anfängliche Süße weicht kräftigem ...","PriceInEuroPer10MillilitersIncludingTax":1.08,"VolAlc":43,"SupportedBottleSize":0,"ColorHexCode":"#065967","id":"da354388-a909-497e-9b12-356f869e9994","version":1},"AmountInMilliliters":0},{"Whisky":{"Name":"Strong","Summary":"Malzig mit kräftiger Würze und Eiche.","Description":"Mandarine und Zitrusfrucht ...","PriceInEuroPer10MillilitersIncludingTax":1.16,"VolAlc":46,"SupportedBottleSize":0,"ColorHexCode":"#441302","id":"a60edc15-6fb0-4dde-a28a-e62f15af9cec","version":1},"AmountInMilliliters":100}],"WhiskyName":"Knallt rein!","BlenderName":"Benjamin Blümchen","PriceIncludingTaxInEuro":35.46,"BatchNumber":"20170920-1"},"VoucherId":null,"ShippingCharges":4.2,"TotalPrice":39.66},"id":"e6ddce6e-23b8-4558-8260-45d9f641f1e6","version":1}')
        ]);
    };
    AbstractOrderService.prototype.handleError = function (error) {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    };
    AbstractOrderService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], AbstractOrderService);
    return AbstractOrderService;
}());
exports.AbstractOrderService = AbstractOrderService;
//# sourceMappingURL=order.service.abstract.js.map