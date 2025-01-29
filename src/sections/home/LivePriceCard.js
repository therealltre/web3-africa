import React from 'react';
import { Card, CardContent, Typography, CircularProgress, Box } from '@mui/material';

const LivePriceCard = ({ name, symbol, price, loading, logoUrl }) => {
    return (
        <Card style={{ minWidth: 150, textAlign: 'center', margin: '8px', padding: '8px', }}>
            <CardContent sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row', gap: 2 }}>
                <Box>
                    <img src={logoUrl} alt={`${name} logo`} style={{ width: 50, height: 50 }} />
                </Box>
                <Box>
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
                </Box>
            </CardContent>

        </Card>
    );
};

export default LivePriceCard;
