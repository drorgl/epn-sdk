import { IGoodsAPIRequest } from './IGoodsAPIRequest'

export interface IListCategoriesResponse {
    categories: Array<{
        id: string,
        title: string
    }>;
}

export class ListCategoriesRequest implements IGoodsAPIRequest {
    private responseBody: any;
    getRequest() {
        return {
            action: this.action
        }
    }

    setResponseBody(body: any): void {
        this.responseBody = body
    }

    public readonly action = 'list_categories';

    getResult(): IListCategoriesResponse {
        return this.responseBody as IListCategoriesResponse
    }
}
