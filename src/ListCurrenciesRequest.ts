import { IGoodsAPIRequest } from './IGoodsAPIRequest'

export interface IListCurrenciesResponse {

    /**
     * example: {"USD": "US Dollar"}
     */
    currencies: { [currency: string]: string }
}

export class ListCurrenciesRequest implements IGoodsAPIRequest {
    getRequest() {
        return {
            action: this.action
        }
    }

    private responseBody: any;

    setResponseBody(body: any): void {
        this.responseBody = body
    }

    public readonly action = 'list_currencies';

    getResult(): IListCurrenciesResponse {
        return this.responseBody as IListCurrenciesResponse
    }
}
