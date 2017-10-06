import { Injectable } from '@angular/core';

export class ShippingDetails {
    PaymentId?: any;
    FirstName: string;
    LastName: string;
    AddressLine1: string;
    AddressLine2: string;
    City: string;
    PostalCode: string;
    CountryCode: string;
    EMail: string;
}

export class Payment {
    PaymentId: string;
    InvoiceNumber?: any;
    ShippingDetails: ShippingDetails;
    State: number;
}

export class Bottle {
    Name: string;
    BottleSize: number;
    ImageFileName: string;
    id: string;
    version: number;
}

export class Whisky {
    Name: string;
    Summary: string;
    Description: string;
    PriceInEuroPer10MillilitersIncludingTax: number;
    VolAlc: number;
    SupportedBottleSize: number;
    ColorHexCode: string;
    id: string;
    version: number;
}

export class WhiskySelection {
    Whisky: Whisky;
    AmountInMilliliters: number;
}

export class BlendedWhisky {
    Bottle: Bottle;
    WhiskySelection: WhiskySelection[];
    WhiskyName: string;
    BlenderName: string;
    PriceIncludingTaxInEuro: number;
    BatchNumber: string;
}

export class ShoppingBasket {
    BlendedWhisky: BlendedWhisky;
    VoucherId?: any;
    ShippingCharges: number;
    TotalPrice: number;
}

export class Order {
    OrderNumber: number;
    Payment: Payment;
    ShoppingBasket: ShoppingBasket;
    id: string;
    version: number;
} 