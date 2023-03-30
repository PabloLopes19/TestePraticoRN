import styled from "styled-components";

export const Photo = styled.Image`
    height: 45px;
    aspect-ratio: 1/1;
    background: #333;
    border-radius: 3px;
    border: 2px #ddd;
`;

export const Container = styled.View`
    display: flex;
    background: #fff;
    border-radius: 6px;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 20px;
    gap: 12px;
    margin-bottom: 12px
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: start;
    align-items: center;
    gap: 12px;
`;
export const Col = styled.View`
    display: flex;
    flex-direction: column;
`;

export const Title = styled.Text`
    font-weight: 600;
    color: #333;
    font-size: 14px;
`;
export const Website = styled.Text`
    font-size: 12px;
    color: #999;
`;

export const Cands = styled.View`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const CandNum = styled.Text`
    font-size: 12px;
    color: #999;
`;
export const CandLabel = styled.Text`
    font-size: 12px;
    font-weight: 600;
    color: #666;
`;