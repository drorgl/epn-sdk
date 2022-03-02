import { IGoodsAPIRequest } from './IGoodsAPIRequest'
import { IOffer } from './IOffer'

export interface IOfferInfoResult {
    error?: string;
    offer: IOffer;
}

export interface IOfferInfoOptions {
    lang?: string;
    id?: number;
    currency?: string;
}

export class OfferInfoRequest implements IGoodsAPIRequest {
    public readonly action = 'offer_info'

    constructor(private opts?: IOfferInfoOptions) {

    }

    getRequest() {
        return {
            ...this.opts,
            action: this.action
        }
    }

    private responseBody: any;
    setResponseBody(body: any): void {
        this.responseBody = body
    }

    getResult(): IOfferInfoResult {
        return this.responseBody as IOfferInfoResult
    }
}
