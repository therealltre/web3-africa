import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const LivePriceCard = ({ name, symbol, price, loading, logoUrl }) => {
    return (
        <Card style={{ minWidth: 150, textAlign: 'center', margin: '8px', padding: '8px', }}>
            <CardContent>
                <Box style={{ marginBottom: '8px' }}>
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
