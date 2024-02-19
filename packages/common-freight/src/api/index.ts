import axios from 'axios';

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

function getPorts(apiUrl: string, token: string) {
  return axios.get<Port[]>(apiUrl, {
    headers: {
      'X-Api-Key': token,
    },
  });
}

function getMarketRates(apiUrl: string, token: string, origin: string, destination: string) {
  return axios.get<MarketRate[]>(apiUrl, {
    headers: {
      'X-Api-Key': token,
    },
    params: {
      origin,
      destination,
    },
  });
}

export { getPorts, getMarketRates };
