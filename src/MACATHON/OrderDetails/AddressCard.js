import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 100,
    },

    title: {
        fontSize: 14,
    },

});

const AddressCard = ({ text ,address1='',address2=''}) => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    {text} Address
          </Typography>
                <Typography variant="body2" component="h2">
                    {address1}
          </Typography>
                <Typography variant="body2" component="h2">
                    {address2}
          </Typography>
            </CardContent>
        </Card>
    )
};

export default AddressCard;