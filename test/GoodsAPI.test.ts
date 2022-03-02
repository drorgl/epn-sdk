// import { CountCategoriesRequest } from '../src/CountCategoriesRequest'
// import { GoodsAPI } from '../src/GoodsAPI'
// import { ListCategoriesRequest } from '../src/ListCategoriesRequest'
// import { ListCurrenciesRequest } from '../src/ListCurrenciesRequest'
// import { OfferInfoRequest } from '../src/OfferInfoRequest'
// import { SearchRequest } from '../src/SearchRequest'
// import { TopMonthlyRequest } from '../src/TopMonthlyRequest'

import {
    CountCategoriesRequest,
    GoodsAPI,
    ListCategoriesRequest,
    ListCurrenciesRequest,
    OfferInfoRequest,
    SearchRequest,
    TopMonthlyRequest
} from '../src'

describe('Goods API', () => {
    it('should throw when api key is missing', () => {
        expect(() => {
            // eslint-disable-next-line no-unused-vars
            const goodsAPI = new GoodsAPI('', process.env.EPN_HASH_CODE!)
        }).toThrowError('API Key must be provided')
    })

    it('should throw when hash code is missing', () => {
        expect(() => {
            // eslint-disable-next-line no-unused-vars
            const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, '')
        }).toThrowError('Hash Code must be provided')
    })

    it('should list categories', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [listCategories] = await goodsAPI.request(new ListCategoriesRequest())

        console.log(listCategories.getResult().categories)
        expect(listCategories.getResult().categories.length).toBeGreaterThan(0)
    })

    it('should get offer information', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [offerInformation] = await goodsAPI.request(new OfferInfoRequest({ lang: 'en', id: 1005002090756943, currency: 'RUR,USD' }))

        console.log(offerInformation.getResult().offer)
        expect(offerInformation.getResult().error).toBeUndefined()
        expect(offerInformation.getResult().offer.id).toEqual('1005002090756943')
    })

    it('should search offers', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [searchResponse] = await goodsAPI.request(new SearchRequest({ query: 'iPhone' }))

        console.log(searchResponse.getResult().offers)
        expect(searchResponse.getResult().offers.length).toBeGreaterThan(0)
    })

    it('should count categories', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [countCategories] = await goodsAPI.request(new CountCategoriesRequest({ query: 'iPhone' }))

        console.log(countCategories.getResult().count)
        expect(countCategories.getResult().count['6']).toBeGreaterThan(0)
    })

    it('should list currencies', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [listCurrencyResponse] = await goodsAPI.request(new ListCurrenciesRequest())

        console.log(listCurrencyResponse.getResult().currencies)
        expect(listCurrencyResponse.getResult().currencies.USD).toEqual('USD')
    })

    it('should list top monthly offers', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [topMonthlyResponse] = await goodsAPI.request(new TopMonthlyRequest())

        console.log(topMonthlyResponse.getResult().offers)
        expect(topMonthlyResponse.getResult().offers.length).toBeGreaterThan(0)
    })

    it('should perform batch requests (two)', async () => {
        const goodsAPI = new GoodsAPI(process.env.EPN_API_KEY!, process.env.EPN_HASH_CODE!)
        const [listCurrencyResponse, listCategories] = await goodsAPI.request(new ListCurrenciesRequest(), new ListCategoriesRequest())

        console.log(listCurrencyResponse.getResult().currencies)
        expect(listCurrencyResponse.getResult().currencies.USD).toEqual('USD')

        console.log(listCategories.getResult().categories)
        expect(listCategories.getResult().categories.length).toBeGreaterThan(0)
    })
})
