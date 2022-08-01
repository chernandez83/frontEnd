/*
Here is a list of some of the main lifecycle methods:
	componentWillMount()
	componentDidMount()
	shouldComponentUpdate()
	componentDidUpdate()
	componentWillUnmount()

Note: The componentWillMount Lifecycle method will be deprecated
in a future version of 16.X and removed in version 17.
Learn more in this article
https://www.freecodecamp.org/news/how-to-safely-use-reacts-life-cycles-with-fiber-s-async-rendering-fd4469ebbd8f/
*/
class MyComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  componentWillMount() {
    // Change code below this line
    console.log('Log something to the console');
    // Change code above this line
  }
  render() {
    return <div />
  }
};