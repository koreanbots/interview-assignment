import React from 'react';

import { 
    Container,
    TextAlert,
    Button
} from './styles';

export function NotFound() {
    return <Container>
        <TextAlert>
            404 Not Found
        </TextAlert>


        <Button onClick={() => window.history.back()}>Go Back</Button>
    </Container>
}