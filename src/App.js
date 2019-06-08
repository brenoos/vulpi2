import React from 'react';
import './App.css';

class Input extends React.PureComponent {
  render() {
    let {forwardedRef, ...otherProps} = this.props; 
    return <input {...otherProps} ref={forwardedRef} />;
  }
}

const TextInput = React.forwardRef((props, ref) => {
  return <Input {...props} forwardedRef={ref} />
});

class FocusableInput extends React.Component {
  
  ref = React.createRef()

  render() {
    return <TextInput ref={this.ref} />;
  }

  // When the focused prop is changed from false to true, 
  // and the input is not focused, it should receive focus.
  // If focused prop is true, the input should receive the focus.
  // Implement your solution below:
  componentDidUpdate(prevProps) {
    if(prevProps.focused === false && this.props.focused === true) this.ref.current.focus()
  }
  
  componentDidMount() {
    if(this.props.focused) {
      this.ref.current.focus()
    }
  }
}

FocusableInput.defaultProps = {
  focused: true
};

const App = (props) => <FocusableInput focused={props.focused} />;

export default App;
