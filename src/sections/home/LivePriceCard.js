import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const LivePriceCard = ({ name, symbol, price, loading, logoUrl }) => {
    return (
        <Card style={{ minWidth: 275, textAlign: 'center', margin: '16px', padding: '16px', }}>
            <CardContent>
                <Box style={{ marginBottom: '16px' }}>
                    <img src={logoUrl} alt={`${name} logo`} style={{ width: 50, height: 50 }} />
                </Box>
                <Typography variant="h5" gutterBottom>
                    {name} ({symbol.toUpperCase()})
                </Typography>
                {loading ? (
                    <CircularProgress />
                ) : (
                    <Typography variant="h4" color="primary">
                        ${price ? price.toLocaleString() : 'N/A'}
                    </Typography>
                )}
            </CardContent>
        </Card>
    );
};

export default LivePriceCard;
