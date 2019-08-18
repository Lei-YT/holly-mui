import React from 'react';

import HeaderLeftBar from "../layouts/HeaderLeftBar";
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Typography from '@material-ui/core/Typography';
// import Grid from '@material-ui/core/Grid';
import { Box, Card,CardActionArea,CardContent,CardMedia,Typography,Grid, Paper,  } from '@material-ui/core';
const useStyles = makeStyles({
    card: {
      marginBottom: 20
    },
    boldText: {
        fontWeight: 700
    },
    deleteText: {
        textDecoration: 'line-through',
        color: "#aaaaaa"
    }
  });
const ProductCard = () => {
    const classes = useStyles();
    return (
        <div>
        <Card
            className={classes.card}
        >
          <CardActionArea>
            <CardMedia
              component="img"
            //   height="430"
            //   className={classes.media}
              image="https://www.trippest.com/wp-content/uploads/2019/08/banner-700x430.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs container direction="column">
                        <Typography gutterBottom variant="body1" component="h2" className={classes.boldText}>
                            Half-Day In-depth Beijing Forbidden City Heritage Walking Tour
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="subtitle1" align='right'>From</Typography>
                        <Typography variant="h6" color='secondary' className={classes.boldText}>US$49</Typography>
                    </Grid>
                </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
            className={classes.card}
        >
          <CardActionArea>
            <CardMedia
              component="img"
            //   height="430"
            //   className={classes.media}
              image="https://www.trippest.com/wp-content/uploads/2018/03/b1-700x430.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs container direction="column" >
                        <Typography gutterBottom variant="body1" component="h2" className={classes.boldText}>
                        One-Day VIP Beijing Highlights Tour with Great Wall Hiking
                        </Typography>
                    </Grid>
                    <Grid item >
                        <Typography variant="subtitle1" align='right' className={classes.deleteText}>US$120</Typography>
                        <Typography variant="h6" color='secondary' className={classes.boldText}>US$108</Typography>
                    </Grid>
                </Grid>
            </CardContent>
          </CardActionArea>
        </Card>
        </div>
      );
}

export default function CityView() {
    return (
        <HeaderLeftBar >
            <ProductCard />
        </HeaderLeftBar>
        // <div>
        //     <HeaderLeftBar />
        //     <ProductCard />
        // </div>
    )
}
