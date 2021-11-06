import React from 'react';
import {
  Text,
  Pressable,
  View,
  PressableStateCallbackType,
} from 'react-native';
import styled from 'styled-components/native';

export function Button({
  text,
  screen_size,
  onPress,
}: {
  text: string;
  screen_size: number[];
  onPress: (set_size: number[]) => void;
}) {
  return (
    <ButtonWrap onPress={() => onPress(screen_size)}>
      {({pressed}) =>{
        return (
        <ButtonView pressed={pressed}>
          <Text>{text}</Text>
        </ButtonView>
      )}}
    </ButtonWrap>
  );
}

const ButtonWrap = styled(Pressable)`
`;

const ButtonView = styled(View)<PressableStateCallbackType>`
  background-color: ${(props: { pressed: PressableStateCallbackType['pressed'] }) => {
    return props.pressed ?  '#ccc' : 'white'}
  };
  padding: 8px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
