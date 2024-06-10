import ContentLoader from "react-content-loader"

import React from 'react';
const LoadingBlock = () => {
    return (
        <ContentLoader
          className="pizza-block" 
          speed={2}
          width={280}
          height={460}
          viewBox="0 0 280 460"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <circle cx="140" cy="142" r="140" /> 
          <rect x="0" y="287" rx="6" ry="6" width="280" height="27" /> 
          <rect x="1" y="320" rx="10" ry="10" width="280" height="88" /> 
          <rect x="1" y="423" rx="6" ry="6" width="70" height="30" /> 
          <rect x="116" y="418" rx="30" ry="30" width="162" height="38" />
        </ContentLoader>
      )
}

export default LoadingBlock