import React from "react";

const FetchData = ({ loading, data }) => (
  <div>
    <h2>Data fetching:</h2>
    {loading ? (
      <div>...loading</div>
    ) : (
      <pre>{JSON.stringify(data, null, 2)}</pre>
    )}
  </div>
);

export default FetchData;
