import React from 'react';
import './SearchField.scss';

const SearchField = ({ value, onChange, placeholder, ...props }) => {
  const spanProps = {
    className: 'fa fa-search form-control-feedback',
  };

  const inputProps = {
    className: 'form-control',
    placeholder: placeholder ?? 'Search',
    onChange: (e) => onChange(e.target.value),
    value,
  };

  return (
    <div className="form-group has-search py-3">
      <span {...spanProps} />
      <input {...inputProps} />
    </div>
  );
};

export default React.memo(SearchField);
