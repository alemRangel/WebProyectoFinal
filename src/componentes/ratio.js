import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
class Ratio extends React.Component {

    render() {
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
          }));
        return (
            <Grid container spacing={2}>
                <Grid item xs={8}>
                     <Item>xs=8</Item>
                </Grid>
                <Grid item xs={4}>
                     <Item>xs=4</Item>
                </Grid>
                <Grid item xs={4}>
                     <Item>xs=4</Item>
                 </Grid>
                 <Grid item xs={8}>
                       <Item>xs=8</Item>
                 </Grid>
            </Grid>

      
        )
    }

}

export default Ratio;