
export interface IOffer {

    /**
     * example: "1005002090756943"
     */
    id: string;

    /**
     * example: "502"
     */
    id_category: string;

    name: string;
    /**
     * example:"https://ae04.alicdn.com/kf/H15dd96061e5b47dd9cba181d5a234f09G.jpg"
     */
    picture: string;

    /**
     * example: ["https://ae04.alicdn.com/kf/H15dd96061e5b47dd9cba181d5a234f09G.jpg"]
     */
    all_images: string[];

    ru_shipping_price: number;

    /**
     * example: 166.08
     */
    price: number;

    /**
     * example: 86.58
     */
    sale_price: number;

    /**
     * example: "RUR",
     */
    currency: string;
    description: string;
    /**
     * example: "1005002090756943",
     */
    product_id: string;

    /**
     * example: "http://alipromo.com/redirect/product/r7updculfmkzabdtdvmzlzzndo11d4gr/1005002090756943/en",
     */
    url: string;

    /**
     * example: "en"
     */
    lang: string;

    /**
     * example: 0
     */
    commission_rate: number;

    /**
     * example: "1762190"
     */
    store_id: string;

    /**
     * example: "MAO LONG electronic"
     */
    store_title: string;

    /**
     * example: {"RUR": 166.08,"USD": 2.11}
     */
    prices: { [currency: string]: number };

    /**
     * example: {"RUR": 86.58,"USD": 1.1}
     */
    sale_prices: { [currency: string]: number };
}
