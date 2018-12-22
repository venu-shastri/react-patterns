import React from 'react'
export default function Main() {
  return (
    <Header>
      <Navigation />
    </Header>
  );
}
 function Header({ children }) {
  return <header>{ children }</header>;
};

 function Navigation() {
    return (<nav> <h1> Navigation</h1> </nav>);
  }