import React from 'react';
import {useEffect, useState} from 'react';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: 'center',
          '& > *': {
            margin: theme.spacing(1),
      },
      // Change this to an if statement about the color and sentiment 
      typography: {
        color: 'red'
      },
    }}))

export default function NGramResults(props) {
    const [ngram, setNgram] = useState('')
    const [sentiment, setSentiment] = useState('')
    
      
    const classes = useStyles();

    useEffect (()=> {
        fetch ('/text', {
        method: 'POST', 
        headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}, 
        body: JSON.stringify(props.inputValue)
        })
        .then(response => 
            response.text())
            .then(data=> {
                setNgram(data)
                console.log(data);
            })
    }, [])

    useEffect (()=>{
        fetch('/ngrams', {
            method:'GET',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            mode: 'cors'
        })
        .then(response => 
            //response.text ? which is better?
            response.json())
            .then(data=> {
                setSentiment(data)
                console.log(data)
            })
    }, [])



    //TODO color coordinated and based on polarity, subjectivity and ngrams --
    // Look at the text hightlighter component for a way to map + implement color 

    return (
        <div>
        <CardContent className = {classes.root}>
            {/* Need to get the colors to change  */}
            <Typography className={classes.typography} color="textPrimary" fontWeight="fontWeightBold" variant="h6"><span style={{color: 'green'}}>{ngram}</span></Typography>
            <Typography className={classes.typography} color="textPrimary" fontWeight="fontWeightBold" variant="h6"><span style={{color: 'red'}}>{sentiment}</span></Typography>
            <Typography className={classes.typography} color="textPrimary" fontWeight="fontWeightBold" variant="h6"><span style={{color: 'yellow'}}>{sentiment}</span></Typography>
        </CardContent>
        </div>
    )

}


