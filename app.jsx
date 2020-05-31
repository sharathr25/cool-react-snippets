import React from 'react';
import ReactDOM from 'react-dom';

const TagFromStrValue = (props) => {
  const { tag, children } = props
  const Component = tag
  return <Component { ...props }>{children}</Component>
}

const App = () => <TagFromStrValue tag="h1">heading</TagFromStrValue>

ReactDOM.render(
  <App />,
  document.getElementById('react-app')
);
