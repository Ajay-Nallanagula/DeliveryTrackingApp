import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 200,
    },
    title: {
        fontSize: 14,
    },
});

const PaymentMethodCard = () => {
    const classes = useStyles()
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                    Payment Method
          </Typography>
                <Typography variant="body2" component="h6">
                    American Express Ending in 1234
          </Typography>
            </CardContent>
        </Card>
    )
};

export default PaymentMethodCard;