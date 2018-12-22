//decorator.js
const title = 'React in patterns';

//High Order Function
export default function inject(Component) {
  return class Injector extends React.Component {
    render() {
      return (
        <Component
          {...this.props}
          title={ title }
        />
      )
    }
  };
}

//title.js
function Title(props) {
    return <h1>{ props.title }</h1>;
  }



//import inject from './decorator.js';
//import Title from './Title.js';

var EnhancedTitle = inject(Title);
export default function Header() {
  return (
    <header>
      <EnhancedTitle />
    </header>
  );
}

