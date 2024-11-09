import { configureApi } from 'react-reqq'

export const store = configureApi({
  endpoint: process.env.REACT_APP_END_POINT,
})
