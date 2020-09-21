class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A new value was submitted: ' + this.state.value + '\n\nLatitude ' + document.getElementById("newLatitude").value + ' \nLongitude ' + document.getElementById("newLongitude").value );
    event.preventDefault();
    pointsCoords.geometry.value.push(this.state.value)
    document.getElementById("newLatitude").value = "";
    document.getElementById("newLongitude").value = "";
    document.getElementById("enteredValue").value = "";
    i --;
    newMapping(pointsCoords);
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Value: 
          <input type="text" id="enteredValue" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <NameForm />,
  document.getElementById('pointValue')
);