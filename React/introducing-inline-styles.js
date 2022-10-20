/*
If you import styles from a stylesheet, it isn't much different at all.
You apply a class to your JSX element using the className attribute, and
apply styles to the class in your stylesheet. Another option is to apply
inline styles, which are very common in ReactJS development.
*/
class Colorful extends React.Component {
  render() {
    return (
      <div style={{color: 'red', fontSize: '72px'}}>Big Red</div>
    );
  }
};