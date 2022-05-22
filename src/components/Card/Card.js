import React from 'react';
import './Card.scss';

const Card = ({ className, children, loading, loader, ...props }) => {
  const cardProps = {
    className: `card mb-1 overflow-hidden ${className}`,
    ...props,
  };

  return <div {...cardProps}>{loading ? loader : children}</div>;
};

export default React.memo(Card);
