import { Port } from '../api';
declare function usePorts(API: string, token: string): {
    loading: boolean;
    error: Error | undefined;
    data: Port[] | undefined;
};
export default usePorts;
