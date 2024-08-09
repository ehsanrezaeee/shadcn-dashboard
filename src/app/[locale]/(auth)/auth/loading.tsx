import React from "react";
import ContentLoader from "react-content-loader";

const loading = () => (
  <ContentLoader
    speed={2}
    width={400}
    height={150}
    viewBox="0 0 400 150"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="299" y="16" rx="0" ry="0" width="97" height="131" />
    <circle cx="26" cy="35" r="20" />
    <rect x="80" y="58" rx="0" ry="0" width="165" height="7" />
    <rect x="161" y="74" rx="0" ry="0" width="80" height="8" />
    <rect x="50" y="34" rx="0" ry="0" width="49" height="6" />
    <rect x="100" y="89" rx="0" ry="0" width="139" height="51" />
    <rect x="47" y="18" rx="0" ry="0" width="51" height="5" />
  </ContentLoader>
);

export default loading;
