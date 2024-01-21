import { Button, Card, CardContent, Typography } from '@mui/material';
import React from 'react';
interface DiscardConfirmationProps {
    onDiscard: () => void;
    onContinueEditing: () => void;
}
export const DiscardConfirmation: React.FC<DiscardConfirmationProps> = ({ onDiscard, onContinueEditing }) => {
    return (
        <Card  >
            <CardContent sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <Typography variant='h6' sx={{ mb: 1 }}>
                    Discard Post?
                </Typography>
                <Typography variant='body1' sx={{ mb: 2 }}>
                    If you go back now, this post will be discarded
                </Typography>
                <Button color='error' sx={{ mb: 1 }} variant='outlined' fullWidth onClick={onDiscard}>Discard</Button>
                <Button onClick={onContinueEditing} variant='outlined' fullWidth>Continue Editing</Button>
            </CardContent>
        </Card>
    )
}