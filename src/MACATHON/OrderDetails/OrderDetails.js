import React from 'react';
import MacathonLoc from '../MacathonLoc'
import { Container, Grid, Typography } from '@material-ui/core';
import ItemCard from './ItemCard'
import { makeStyles } from '@material-ui/core/styles';
import { Link, Route, Switch } from "react-router-dom";
import AddressCard from './AddressCard';
import OrderSummaryCard from './OrderSummaryCard'
import PaymentMethodCard from './PaymentMethodCard';


const useStyles = makeStyles({
    root: {
        marginTop: 15,
    },
    item1: {
        border: '1px solid lightgray',
        marginBottom: '15px',
        paddingLeft: '22px'
    },

    titleDiv: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
    },
    detailsDiv: {
        display: 'flex',
        flexDirection: 'row',
    },

});

const OrderDetails = ({ orderData }) => {
    const classes = useStyles()
    const { title, price } = orderData
    const markers = {
        wareHouseAddr: 'Central Park,New York,NY,USA',
        deliveryAddr: 'Empire State Building, New York, NY 10001, USA'
    }

    const searchParam = encodeURIComponent(JSON.stringify(markers));

    return (
        <>
            <Container maxWidth="md" className={classes.root} gutter>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={2}
                    className={classes.item1}
                >
                    <Grid item xs={2} >
                        <ItemCard />
                    </Grid>
                    <Grid item xs={10}>
                        <div className={classes.titleDiv}>
                            <Typography style={{ fontSize: 14 }} color="textSecondary" gutterBottom>
                                {title}
                            </Typography>
                            <div>
                                <Typography variant="body2" component="h2">
                                    ${price}
                                </Typography>
                            </div>
                            <Link to={{
                                pathname: '/trackOrder',
                                search: `?${searchParam}`
                            }} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Typography variant="body2" component="h2">
                                    Track Order
                                </Typography>
                            </Link>
                        </div>
                    </Grid>
                </Grid>

                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="center"
                    spacing={1}
                >
                    <Grid item xs={3}>
                        <OrderSummaryCard />
                    </Grid>
                    <Grid item xs={3}>
                        <PaymentMethodCard />
                    </Grid>
                    <Grid item xs={3}>
                        <AddressCard text='Billing' address1={markers.wareHouseAddr} />
                    </Grid>
                    <Grid item xs={3}>
                        <AddressCard text='Delivery' address1={markers.deliveryAddr} />
                    </Grid>
                </Grid>
            </Container>



        </>
    )
};

OrderDetails.defaultProps = {
    orderData: {
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        price: '1000'
    }
}

export default OrderDetails;