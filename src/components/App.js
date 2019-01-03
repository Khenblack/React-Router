import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import StreamsCreate from './streams/StreamCreate';
import StreamDelete from './streams/StreamDelete';
import StreamEdit from './streams/StreamEdit';
import StreamList from './streams/StreamList';
import StreamShow from './streams/StreamShow';
import Header from './Header';

// BrowserRouter -> localhost:3000/pagetwo
// HashRouter -> localhost:3000/#/pagetwo
// MemoryRouter -> localhost:3000

const App = () => {

  return (
    <div className='ui container'>
      <BrowserRouter>
        <div>
          <Header />
          <Route path='/' exact component={StreamList} />
          <Route path='/streams/new' component={StreamsCreate} />
          <Route path='/streams/edit' component={StreamEdit} />
          <Route path='/streams/delete/:id' exact component={StreamDelete} />
          <Route path='/streams/show' component={StreamShow} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;