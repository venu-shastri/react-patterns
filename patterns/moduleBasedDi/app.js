import React from 'react'
import Header from './header';
import { register } from './diModule'

register('title', 'hello-react');

export default class  App extends React.Component {
  render() {
    return <Header />;
  }
};