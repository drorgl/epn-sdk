import { IGoodsAPIRequest } from './IGoodsAPIRequest'
import { IOffer } from './IOffer'

export interface ITopMonthlyOptions {
    /**
     * default: sales
     */
    orderby?: 'sales' | 'commission'

    /**
     * list of the identifiers of categories separated by a comma (for exemple, 2,6,1501) or an empty field.
     * default: empty (no filter)
     */
    category?: string;

    /**
     * language of product discription. at the time of writing, the "ru" and "en" values are possible.
     * default: en
     */
    lang?: 'en' | 'ru';

    /**
     * The currency in which information about prices will be transmitted.
     * At the moment, the values are possible: RUR, USD, EUR, UAH, KZT, BYR.
     * It is possible to list several currencies separated by commas.
     *
     * default: USD
     */
    currency?: string;
}

export interface ITopMonthlyResponse {

    offers: IOffer[];
}

export class TopMonthlyRequest implements IGoodsAPIRequest {
    public readonly action = 'top_monthly';

    constructor(private opts?: ITopMonthlyOptions) {

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

    getResult(): ITopMonthlyResponse {
        return this.responseBody as ITopMonthlyResponse
    }
}
