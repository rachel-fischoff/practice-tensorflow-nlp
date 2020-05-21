import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch} from 'react-redux'
import {Link, useHistory} from 'react-router-dom'
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import InputIcon from '@material-ui/icons/Input'
import NavBar from './nav_bar'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
      '& > *': {
        margin: theme.spacing(1),
      },
    },
    button: {
        margin: theme.spacing(1),
      },
      textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '25ch',
      },
  }));

  
export default function SearchBarText () { 
  const classes = useStyles()

  const dispatch = useDispatch();
  let history = useHistory();

  const [inputValue, setInputValue] = useState('')

  const handleInput = (event) => {
    setInputValue(event.target.value);
  }

    return ( 
          <div>
              <NavBar/>
              <div className={classes.root} >
              <h4>Enter Text</h4>
                  <OutlinedInput id="component-outlined 2" value={inputValue} onChange={handleInput}/>
                      <Link to={{ pathname: "/text/sentiment", state: {inputValue: inputValue}}}>
                      <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      size="large"
                      type = "submit"
                      startIcon={<InputIcon>InputIcon</InputIcon>}
                      // onClick=
            
                      >
                       Predict Sentiment
                     </Button> 
                     </Link>  
              </div>
            </div>
          );
    }

 