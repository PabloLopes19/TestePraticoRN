import styled from "styled-components";

export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    gap: 12px;
    padding: 40px 20px;
`;

export const Scroll = styled.ScrollView`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const Button = styled.TouchableOpacity`
    width: 100%;
    height: 55px;
    border-radius: 6px;
    background: #3498db;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const ButtonText = styled.Text`
    color: #fff;
    font-weight: 600;
    font-size: 14px;
`;