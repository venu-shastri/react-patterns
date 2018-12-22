import React from 'react'
import { Provider } from './context';
import Header from './header'

const context = { title: 'Hello React' };

export  default class App extends React.Component {
  render() {
    return (
      <Provider value={ context }>
        <Header />
      </Provider>
    );
  }
};