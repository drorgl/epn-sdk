# ePN.SDK

https://epn.bz/ SDK, currently only Goods SDK is implemented, swagger autogeneration was impossible due to missing return types.

```
npm install @drorgl/epn-sdk
```

Example:
```TypeScript
const goodsAPI = new GoodsAPI("apikey", "hashcode")
const [offerInformation] = await goodsAPI.request(new OfferInfoRequest({ lang: 'en', id: 1005002090756943, currency: 'RUR,USD' }))

console.log(offerInformation.getResult().offer)
```