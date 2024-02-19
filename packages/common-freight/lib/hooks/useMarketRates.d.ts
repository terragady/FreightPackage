import { MarketRate } from '../api';
declare function useMarketRates(API: string, token: string, origin: string, destination: string): {
    loading: boolean;
    error: Error | undefined;
    data: MarketRate[] | undefined;
};
export default useMarketRates;
