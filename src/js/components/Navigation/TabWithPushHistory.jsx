import { Tab } from '@mui/material';
import PropTypes from 'prop-types';
import React from 'react';
import { useHistory } from 'react-router-dom';


/*
 The simplest way to define a component is to write a JavaScript function:
 This function is a valid React component because it accepts a single “props”
 (which stands for properties) object argument with data and returns a React element.
 We call such components “function components” because they are literally JavaScript functions.
 https://reactrouter.com/native/api/Hooks/usehistory
*/
export default function TabWithPushHistory (props) {
  const { classes, id, label, to, value, change: handleTabChange } = props;
  const history = useHistory();

  function handleClick () {
    if (to) {
      history.push(to);
    }
    if (handleTabChange) {
      handleTabChange(value);
    }
  }

  // console.log(`TabWithPushHistory label:${label}`);
  return (
    <Tab classes={classes} id={id} label={label} onClick={() => handleClick(to)} />
  );
}
TabWithPushHistory.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  to: PropTypes.string,
  value: PropTypes.number.isRequired,
  change: PropTypes.func.isRequired,
};
