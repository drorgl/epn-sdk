import { IGoodsAPIRequest } from './IGoodsAPIRequest'
import { ISearchOptions } from './SearchRequest'

export interface ICountCategoriesResponse {
    count: { [categoryId: string]: number };
}

export class CountCategoriesRequest implements IGoodsAPIRequest {
    public readonly action = 'count_for_categories';

    private responseBody: any;

    constructor(private opts?: ISearchOptions) {

    }

    setResponseBody(body: any): void {
        this.responseBody = body
    }

    getRequest() {
        return {
            ...this.opts,
            action: this.action
        }
    }

    getResult(): ICountCategoriesResponse {
        return this.responseBody as ICountCategoriesResponse
    }
}
