import axios, { AxiosError } from 'axios';

const baseApi = 'https://swapi.dev/api';

// export const createApiEndpoint = async (endpoint: string, args?: string) => {
//   try {
//     const result = await axios.get(`${apiLink + endpoint}&${args && null}`);
//     console.log(result);
//     return result;
//   } catch (err) {
//     const error = err as AxiosError;
//     throw new Error(error.message);
//   }
// };

export const getAllPeoples = async (args?: string) => {
  const endpoint = '/people';
  try {
    const query = args ? baseApi + endpoint + args : baseApi + endpoint;
    const result = await axios.get(query);
    return result.data;
  } catch (err) {
    const error = err as AxiosError;
    throw new Error(error.message);
  }
};
