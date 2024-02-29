import styled from "styled-components";

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px;
`;

export const Container = (props) => {
    return <Root>{props.children}</Root>;
}