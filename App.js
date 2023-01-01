import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetails';
const App = () => {
  return (
    <div className='ui container grid'>
    <div className='ui row'>
      <div className='column eigth wide'>
        <SongList />
      </div>
      </div>
      <div className='ui row'>
      <div className='column eigth wide'>
      <SongDetail />
      </div>
    </div>
    </div>
  );
};

export default App;
