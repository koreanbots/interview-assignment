import React, { useEffect, useState } from 'react';

import {
    Container
} from './styles';

const API_URL = 'https://koreanbots.dev/api/data/bots';

export function Bots() {
    const [bots, setBots] = useState([]);
    
    useEffect(() => {
        // ...
    }, [])

    return <Container>
        {/* ... */}
    </Container>
}