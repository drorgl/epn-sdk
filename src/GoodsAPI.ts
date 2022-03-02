import { IGoodsAPIRequest } from './IGoodsAPIRequest'
import * as superAgentRequest from 'superagent'

export class GoodsAPI {
    private readonly apiVersion = 2;
    private readonly apiUrl = 'http://api.epn.bz/json';
    constructor(private apiKey: string, private hashCode: string) {
        if (!apiKey) {
            throw new Error('API Key must be provided')
        }

        if (!hashCode) {
            throw new Error('Hash Code must be provided')
        }
    }

    public async request<TS extends IGoodsAPIRequest[]>(...requests: TS) {
        const bulkRequestBody = {
            user_api_key: this.apiKey,
            user_hash: this.hashCode,
            api_version: this.apiVersion,
            requests: requests.map(v => v.getRequest())
        }

        const bulkResponse = await superAgentRequest.post(this.apiUrl).send(bulkRequestBody).set('Accept', 'application/json')
        for (let i = 0; i < bulkResponse.body.results.length; i++) {
            requests[i].setResponseBody(bulkResponse.body.results[i])
        }

        return requests
    }
}
