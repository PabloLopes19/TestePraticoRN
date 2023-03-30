import { View } from 'react-native';
import styled from "styled-components";

export const Container = styled.View`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: space-between;
    padding: 0 20px 40px 20px;
    gap: 12px;
`;

export const Form = styled.ScrollView`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 12px;
`;

export const Row = styled.View`
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 12px;
`;

export const DateContainer = styled.View`
    display: flex;
    flex-direction: column;
`;

export const label = styled.Text`
    font-size: 12px;
    font-weight: 600;
    color: #999;
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