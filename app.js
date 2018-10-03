// TODO

//handling Props with dynamic arguments
/* Refactor into class Compnent */

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }
};

//question on this part how the components are getting passed
  //which arguments are being used to pass through and create dynamic list
var GroceryList = (props) => (
  <ul>
    {props.item.map((items, index) =>
      <GroceryListItem key={index} item={items} />
    )}
  </ul>
);

var App = () => (
  <div>
    <GroceryList item={['Meat', 'Lettuce', 'Hi', 'Dylan']} />
  </div>
);

ReactDOM.render(<App />, document.getElementById('app'));
