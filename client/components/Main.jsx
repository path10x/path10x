import React from 'react';
import Grid from './Grid';
import Profile from './Profile';
import SpiderChart from './SpiderGraph';

function Main() {
  return (
    <div id="main">
      <Grid />
      {/* <Profile /> */}
      <SpiderChart />
    </div>
  );
}

export default Main;
