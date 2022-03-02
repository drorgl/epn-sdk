import { IGoodsAPIRequest } from './IGoodsAPIRequest'
import { IOffer } from './IOffer'

export interface ISearchOptions {
    /**
     * random search as text string.
     * default: empty
     */
    query?: string;

    /**
     * Sort Field
     * default: relevance
     */
    orderby?: 'rand' | 'price' | 'commission_rate' | 'added_at' | 'orders_count';

    /**
     * sort direction
     * default: desc
     */
    order_direction?: 'desc' | 'asc';

    /**
     * order quantity
     * default: 10
     */
    limit?: number;

    /**
     * offset from start of results
     * default: 0
     */
    offset?: number;

    /**
     * list of the identifiers of categories separated by a comma (for example, 2,6,1501) or an empty field.
     * default: empty (no filter)
     */
    category?: string;

    /**
     * list of the identifiers of sellers separated by a comma (for example, 2,6,1501) or an empty field.
     * default: empty (no filter)
     */
    store?: string;

    /**
     * minimum price (in USD) which is necessary (inclusive)
     * default: 0.0
     */
    price_min?: number;

    /**
     * maximum price (in USD) which is necessary (inclusive).
     * default: 1000000.0
     */
    price_max?: number;

    /**
     * language of product description. at the time of writing, the "ru" and "en" values are possible.
     * default: en
     */
    lang?: string;

    /**
     * The currency in which information about prices will be transmitted.
     * At the moment, the values are possible: RUR, USD, EUR, UAH, KZT, BYR.
     * It is possible to list several currencies separated by commas.
     * default: USD
     */
    currency?: number;
}

export interface ISearchResult {
    offers: IOffer[];
}

export class SearchRequest implements IGoodsAPIRequest {
    public readonly action = 'search'

    constructor(private opts?: ISearchOptions) {

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

    getResult(): ISearchResult {
        return this.responseBody as ISearchResult
    }
}
