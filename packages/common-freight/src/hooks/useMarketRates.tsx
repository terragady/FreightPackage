import { useEffect, useState } from 'react';
import { MarketRate, getMarketRates } from '../api';

function useMarketRates(API: string, token: string, origin: string, destination: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<MarketRate[]>();

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    setLoading(true);
    getMarketRates(API, token, origin, destination)
      .then((response) => {
        setData(response.data);
      }, setError)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [API, destination, origin, token]);

  return { loading, error, data };
}

export default useMarketRates;
