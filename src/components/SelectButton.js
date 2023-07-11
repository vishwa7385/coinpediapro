import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  selectButton: {
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    backgroundColor: "black",
    color: "white",
    fontWeight: 700,
    width: "22%",
    margin: 5,
    transition: "background-color 0.3s, color 0.3s",
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
  },
}));

const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();

  return (
    <span onClick={onClick} className={`${classes.selectButton} ${selected ? 'selected' : ''}`}>
      {children}
    </span>
  );
};

export default SelectButton;
