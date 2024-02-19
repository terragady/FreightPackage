import { useEffect, useState } from 'react';
import { Port, getPorts } from '../api';

function usePorts(API: string, token: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error>();
  const [data, setData] = useState<Port[]>();

  useEffect(() => {
    setLoading(true);
    getPorts(API, token)
      .then((response) => {
        setData(response.data);
      }, setError)
      .catch(setError)
      .finally(() => {
        setLoading(false);
      });
  }, [API, token]);

  return { loading, error, data };
}

export default usePorts;
