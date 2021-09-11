import React from 'react';
import { Card, CardActionArea, CardMedia } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
//import Suitcase from '../images/Suitcase.jpg'

const useStyles = makeStyles({
    root: {
        maxWidth: 150,
        height: '100%',
        padding: 1
    },
});

const ItemCard = () => {
    const classes = useStyles()
    const url = require('../images/Suitcase.jpg')
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Suit Case"
                    height="140"
                    image={url.default}
                    title="Suit Case"
                />
            </CardActionArea>
        </Card>
    )
};

export default ItemCard;