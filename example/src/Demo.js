import React from 'react';


export function Demo({title, description, children}) {
  return (
    <div className="Demo">
      <h2>{title}</h2>
      <p>{description}</p>
      {children}
    </div>
  );
}
