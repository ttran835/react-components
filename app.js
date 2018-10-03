// TODO

//handling Props with dynamic arguments
/* Refactor into class Compnent */

class GroceryListItem extends React.Component {
  constructor(props) {
    super(props);
    
    //set initial state for the item
    this.state = {
      done: false,
      hover: false
    };
  }

  clicky () {
    this.setState ({
      done: !this.state.done,
      hover: !this.state.hover
    });
    window.alert('Please stop clicking on me!');

  }

  render() {

    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none',

    };

    //style={style} sets class; 
    return (
      <li style={style} onClick={this.clicky.bind(this)}>{this.props.item}</li>
      //Why do you need to bind to this in order for it to show? 
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


  //es5 
        //if (this.state.done) {
          //*css method* 'line-through
        // } else {
          // 'none'
        // }