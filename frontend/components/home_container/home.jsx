import React from 'react';

const Home = () => {
  return (
    <main className="home-page">
      <heading className="heading-box">
        <h1 className="main-heading">Live There</h1>
        <h3 className="heading-sentence">
          Book homes from local hosts and experience a place like you live there
        </h3>
      </heading>
      <div className="home-search-listings">
        <h2 className="search-heading">
          Search over 2 million homes in over 190 countries
        </h2>
        <input type="text" placeholder="spot search here" className="temp-search" />
      </div>
    </main>

  );
};

export default Home;
