import React from 'react';
import spin from './styles/spin.svg';
import bars from './styles/bars.svg';
import puff from './styles/puff.svg';
import dots from './styles/dots.svg';

export default function Loader({ small, type }) {
  let loaderType;

  const size = small ? 'small' : '';

  if (type === 'spin') {
    loaderType = spin;
  } else if (type === 'bars') {
    loaderType = bars;
  } else if (type === 'puff') {
    loaderType = puff;
  } else if (type === 'dots') {
    loaderType = dots;
  } else {
    loaderType = spin;
  }

  return (
    <div className="d-flex align-items-center flex-column vh-100 justify-content-center text-center py-3">
      <div className="d-flex align-items-center flex-column px-4">
        <div className={`loader ${size}`} style={{ backgroundImage: `url(${loaderType})` }}>
          Loading...
        </div>
      </div>
    </div>
  );
}
