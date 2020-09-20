class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onMapClick = this.onMapClick.bind(this);
  }


  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('A new value was submitted: ' + this.state.value);
    event.preventDefault();
    pointsCoords.geometry.value.push(Number(this.state.value))
    newMapping(pointsCoords);
  }

   onMapClick(e) {
    let point = L.circleMarker(e.latlng)
    console.log(point)
   }

  render() {

  <map onClick={this.onMapClick}>
  </map>

    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Value: 
          <input type="text" value={this.state.value} onChange={this.handleChange} />
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