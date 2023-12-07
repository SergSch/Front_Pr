import React from 'react';

export default function ResponsiblePeaopleItem({ firstname }) {
  return <p> {firstname ? firstname : 'Nobody'}</p>;
}
