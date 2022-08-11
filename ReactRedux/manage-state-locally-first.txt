class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  // Add handleChange() and submitMessage() methods here

  handleChange = (event) => {
    this.setState({
      input: event.target.value
    });
  }

  submitMessage = () => {
    const mess = [...this.state.messages, this.state.input];
    this.setState({
      input: '',
      messages: mess
    });
  }
  
  /*submitMessage = () => {
    this.setState({
      messages: this.state.messages.concat(this.state.input),
      input: ''
    });
  }*/ // Also works

  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        { /* Render an input, button, and ul below this line */ }
        <input 
          onChange={this.handleChange}
          value={this.state.input} />
        <button onClick={this.submitMessage}>Submit</button>
        <br />
        <ul>
          {
            this.state.messages.map(
              (e) => <li> {e} </li>
            )
          }
        </ul>
        { /* Change code above this line */ }
      </div>
    );
  }
};