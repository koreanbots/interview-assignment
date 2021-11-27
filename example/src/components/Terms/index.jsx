import React, { useState, useEffect } from 'react';

import {
    Container,
    Response
} from './styles'

const API_URL = 'https://koreanbots.dev/api/data/terms';

export function Terms() {
    const [terms, setTerms] = useState(/* #주석_자체가_힌트 */);

    useEffect(() => {
        // 여기에 API 호출 코드를 작성하세요.
    }, [])

    return <Container>
        <Response>{terms ?? '로딩 중...'}</Response>
    </Container>
}
