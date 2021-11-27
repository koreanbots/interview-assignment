import React from 'react';

import {
    Container,
    TitleWrapper,
    ReviewWrapper,
    Title,
    SubTitle,
    ReviewTitle,
    List,
    Link,
} from './styles';

export function Index() {
    return <Container>
        <TitleWrapper>
            <Title>한국 디스코드 리스트</Title>
            <SubTitle>웹 개발자 사전 과제 템플릿</SubTitle>
        </TitleWrapper>

        <ReviewWrapper>
            <ReviewTitle>평가 대상 링크</ReviewTitle>
            <List>
                <Link href="/basic">기본적인 API 요청</Link>
                <Link href="/lazyapi">느린 응답 API 핸들링</Link>
                <Link href="/terms">드물게 변경이 일어나는 데이터 프로세싱</Link>
                <Link href="/license">렌더링되는 내용이 긴 데이터</Link>
                <Link href="/bots">봇 리스트 페이지</Link>
            </List>
        </ReviewWrapper>
    </Container>
}
