import styled from 'styled-components';

// import { Something } from '스크롤할때마다동적으로내용을렌더링하는라이브러리';
const Something = null;

export const Container = styled.div`
    display: grid;
    place-items: center;
`;

export const Response = (Something ? styled(Something) : styled.div)`
`;