import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';

// ----------------------------------------------------------------------

const axiosInt = axios.create();

axiosInt.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || 'There is an error!'
    )
);

export const mock = new AxiosMockAdapter(axiosInt, { delayResponse: 0 });

export default axiosInt;


// //------------FOR ACTUAL BACKEND FETCH--------------------------------------

// import axios from 'axios';

// // ----------------------------------------------------------------------

// const axiosInt = axios.create({
//   baseURL: 'http://44.203.82.106:3000', // process.env.HOST_API_KEY
//   timeout: 10000, // Optional: Set a timeout for requests
//   headers: {
//     'Content-Type': 'application/json',
//     // Add other headers here if needed, such as authorization tokens
//   },
// });

// // Interceptor for handling responses and errors
// axiosInt.interceptors.response.use(
//   (response) => response,
//   (error) =>
//     Promise.reject(
//       (error.response && error.response.data) || 'There is an error!'
//     )
// );

// export default axiosInt;
