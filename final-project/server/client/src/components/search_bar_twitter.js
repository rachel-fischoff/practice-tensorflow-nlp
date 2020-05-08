import React from 'react';
import {useState, useEffect} from 'react';
import {Link, useHistory} from "react-router-dom"
import {useDispatch} from 'react-redux'
import {fetchTweets} from '../actions/index';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField'
import SearchIcon from '@material-ui/icons/Search';
import InputIcon from '@material-ui/icons/Input'
import axios from 'axios'
import Typography from '@material-ui/core/Typography';
import NavBar from './nav_bar'


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    textAlign: 'center',
    '& > *': {
      margin: theme.spacing(1),
    }
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

  
export default function SearchBarTwitter () { 
  
    const [term, setTerm] = useState('');
    // const [search, setSearch] = useState(term);
    const dispatch = useDispatch(); 
    const history = useHistory();
    
    const classes = useStyles();
  
    const handleChange = (event) => {
      setTerm(event.target.value);
      console.log('term '+ term)
    };
  
      return ( 
          <div>
            <NavBar/>
                <div className={classes.root} >
                <h4>Find Tweets by Subject</h4>
        
                    <OutlinedInput id="component-outlined 2" value={term} onChange={handleChange}/>
                    <Link to={{ pathname: "/twitter/sentiment", state: {term: term}}}>>

                        <Button
                        variant="contained"
                        color="primary"
                        className={classes.button}
                        size="large"
                        type = "submit"
                        startIcon={<InputIcon>InputIcon</InputIcon>}>
                        {/* component={Link} to="/twitter/sentiment"> */}
                        Predict Sentiment
                        </Button>
                        </Link>

            </div>
            </div>
          );
    }
  

