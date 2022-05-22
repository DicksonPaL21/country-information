import { req } from 'react-reqq';

export const getCountries = (onSuccess, onError) => {
  req.get({
    key: 'countries',
    url: '/all',
    onSuccess,
    onError,
  });
};

export const getCountryByName = (name, onSuccess, onError) => {
  req.get({
    key: 'country',
    url: `/name/${name}`,
    onSuccess,
    onError,
  });
};
