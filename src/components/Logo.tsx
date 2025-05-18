import React from 'react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <img 
        src="/rcw-logo.png" 
        alt="RCW Company" 
        className="h-8 md:h-10"
      />
    </div>
  );
};

export default Logo;