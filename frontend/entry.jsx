import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from './components/root';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {
  let store = configureStore();
  const root = document.getElementById('root');
  ReactDOM.render(<Root store={store} />, root);
});
