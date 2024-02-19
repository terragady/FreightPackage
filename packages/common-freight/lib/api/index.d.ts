export type Port = {
    name: string;
    code: string;
};
export type MarketRate = {
    day: Date;
    mean: number;
    low: number;
    high: number;
};
declare function getPorts(apiUrl: string, token: string): Promise<import("axios").AxiosResponse<Port[], any>>;
declare function getMarketRates(apiUrl: string, token: string, origin: string, destination: string): Promise<import("axios").AxiosResponse<MarketRate[], any>>;
export { getPorts, getMarketRates };
