# react-mapping

This map provides an example of using <a href="https://reactjs.org/" target="_blank">React</a> to create a map that collects entered user data.

### General Map Overview

This map allows the user to click the map, add a value for a point, save this point, continue to add points, and then download the data.

### Uses of React

The key component in this map that uses a React form and is based on the code provided in the <a href="https://reactjs.org/docs/forms.html" target="_blank">React tutorial</a>.

The React code is running with the update_map.js script. Within this script, a sample point value is collected and updated. The user can click the map multiple times to collect numerous data points. After collecting several data points, the user has the option to download the points as well.

This section reviews the React code and describes some of the key features in each section. 

In this first part of the React script, the React.Component is created and two pieces are created, the handleChange and the handleSubmit. Both pieces are needed for the textbox to work. For example, if handleChange is deleted, then the Value box on the map will not accept any new values.

```javascript
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
```

In this second part of the React script, these two event functions are created. For handleChange, the event allows a new value to be entered into the text box on the map. 

The handleSubmit function processes several pieces. First, an alert button appears to the user to let them know a value was entered. This alert box includes the latitude and longitude of the currently entered coordinate. Additionally, the text (could be a number or a word) entered into the Value field is pushed back to the pointsCoords object that was previously created. Then, all three fields on the map are reset to have blanks to help convey to the user that the mapping was successful. A click counter is reduced by one, and this pertains to an error check that helps prevent multiple points being created on the map without associated values. Finally, this newly updated pointsCoords object is sent to a new function.

```javascript
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
```

In this third part of the React script, the key action piece of the button is defined. On the form, when the Submit button is pressed, the entered value is sent to the handleSubmit and handleChange functions above. To my understanding, when something is placed within a render() {} set of code, this tells the browser which parts of the page will be reactive/actionable.

```javascript
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
```

The final piece of the React code sets up this update_map.js back on the primary html page. This code links the above React script with the pointValue element in the HTML code.

```javascript
ReactDOM.render(
  <NameForm />,
  document.getElementById('pointValue')
);
```

