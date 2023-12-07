import React, { useEffect } from 'react';

export default function UnMount() {
  useEffect(() => {
    return () => {
      console.log('unmount');
    };
  }, []);
  return <div></div>;
}
