import React from 'react';
import { useSearchParams } from 'react-router-dom';

export const RecoverKey = () => {
  const [searchParams] = useSearchParams();
  const isValid = searchParams.get( 'k' );
  const mundo = searchParams.get( 'user' );

  console.log( isValid, mundo );
  return (
    <div>
      this view recovery key
    </div>
  );
};
