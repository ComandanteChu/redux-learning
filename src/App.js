import React from 'react';
import PostForm from './components/PostForm';
import Posts from './components/Posts';
import FetchedPost from './components/FetchedPost';
function App() {
  return (
    <div className='container pt-3'>
      <div className='row'>
        <div className='col'>
          <PostForm />
        </div>
      </div>
      <div className='row'>
        <div className='col'>
          <h1>Синхронные посты</h1>
          <Posts posts={[1, 2, 3]} />
        </div>
        <div className='col'>
          <h1>Асинхронные посты</h1>
          <FetchedPost posts={[]} />
        </div>
      </div>
    </div>
  );
}

export default App;

