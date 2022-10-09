import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './bootstrap.min.css'
import App from './App';
import Web3 from 'web3'
import { Web3ReactProvider} from '@web3-react/core'

const getLibrary = (provider) => {
  return new Web3(provider)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Web3ReactProvider getLibrary={getLibrary}>
      <App />
    </Web3ReactProvider>
  </React.StrictMode>
);


