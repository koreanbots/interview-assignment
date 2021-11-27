import React, { useState, useEffect } from 'react';

import {
    Container,
    Response
} from './styles';

const API_URL = 'https://koreanbots.dev/api/data/license';

export function License() {
    const [license, setLicense] = useState();

    useEffect(() => {
        // 여기에 API 호출 코드를 작성하세요.
    }, [])

    return <Container>
        <Response>{license ?? '로딩 중...'}</Response>
    </Container>
}
