import { useState } from 'react';
import { useMarketRates, usePorts } from 'common-freight';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function App() {
  const [origin, setOrigin] = useState<string>();
  const [destination, setDestination] = useState<string>();
  const token = import.meta.env.VITE_API_KEY;

  const {
    loading: loadingPorts,
    error: errorPorts,
    data: dataPorts,
  } = usePorts('https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/air/airports', token);
  const {
    loading: loadingRates,
    error: errorRates,
    data: dataRates,
  } = useMarketRates('https://685rp9jkj1.execute-api.eu-west-1.amazonaws.com/prod/air/rates', token, origin, destination);

  return (
    <>
      <h1>Ocean</h1>
      {loadingPorts ? (
        <p>Loading ports...</p>
      ) : (
        <>
          <select
            onChange={(e) => {
              setOrigin(e.target.value);
            }}
            value={origin}
          >
            <option value='' disabled selected>
              --Please choose origin--
            </option>
            {dataPorts?.map((port) => {
              if (port.code === destination) {
                return;
              }
              return (
                <option key={port.code} value={port.code}>
                  {port.name}
                </option>
              );
            })}
          </select>
          <select
            onChange={(e) => {
              setDestination(e.target.value);
            }}
            value={destination}
          >
            <option value='' disabled selected>
              --Please choose destination--
            </option>
            {dataPorts?.map((port) => {
              if (port.code === origin) {
                return;
              }
              return (
                <option key={port.code} value={port.code}>
                  {port.name}
                </option>
              );
            })}
          </select>
          <LineChart width={600} height={300} data={dataRates}>
            <CartesianGrid strokeDasharray='3 3' />
            <XAxis dataKey='day' />
            <YAxis />
            <Tooltip />
            <Legend align='right' />
            <Line type='monotone' dataKey='mean' stroke='#8884d8' name='Mean' strokeWidth={2} dot={false} />
            <Line type='monotone' dataKey='low' stroke='#82ca9d' name='Low' strokeWidth={2} dot={false} />
            <Line type='monotone' dataKey='high' stroke='#ff7300' name='High' strokeWidth={2} dot={false} />
          </LineChart>
        </>
      )}
    </>
  );
}

export default App;
