import React from 'react'
import { decorate } from './diModule';

var Title = function(props) {
  return <h1>{ props.title }</h1>;
};

export default decorate(
  Title,
  ['title'],
  title => ({ title })
);