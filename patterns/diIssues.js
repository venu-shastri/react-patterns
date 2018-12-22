// Title.jsx
 function Title(props) {
    return <h1>{ props.title }</h1>;
  }

  //import //Title Here
  
  function Header() {
    return (
      <header>
        <Title />
      </header>
    );
  }
  

  //import Header here
  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = { title: 'Hello React' };
    }
    render() {
      return <Header />;
    }
  };