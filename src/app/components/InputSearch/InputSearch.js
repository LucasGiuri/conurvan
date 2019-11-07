import React from 'react';
import PropTypes from 'prop-types';


const inputSearch = ({placeholder, autoFocus, onChange}) => {
  return (
      <input autoFocus={autoFocus} type="search" placeholder={placeholder} onChange={onChange} />
  )
};

inputSearch.propTypes = {
  autoFocus: PropTypes.bool,
  placeholder: PropTypes.string,
  onChange: PropTypes.func.isRequired
};

inputSearch.defaultProps = {
  autoFocus: false,
  placeholder: ''
};

export default inputSearch;
