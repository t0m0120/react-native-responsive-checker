import React, {Dispatch, SetStateAction} from 'react';
import {
  Text,
  Pressable,
  View,
  PressableStateCallbackType,
} from 'react-native';
import styled from 'styled-components/native';

export function HiddenButton({
  isHidden,
  onPress
}: {
  isHidden: boolean;
  onPress: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <ButtonWrap onPress={() => onPress(!isHidden)}>
      {({pressed}) =>{
        return (
        <ButtonView pressed={pressed}>
          <Text>{isHidden? 'Open' : 'Close'}</Text>
        </ButtonView>
      )}}
    </ButtonWrap>
  );
}

const ButtonWrap = styled(Pressable)`
  position: absolute;
  left: 20px;
  bottom: 20px;
`;

const ButtonView = styled(View)<PressableStateCallbackType>`
  background-color: ${(props: { pressed: PressableStateCallbackType['pressed'] }) => {
    return props.pressed ?  '#ccc' : 'white'}
  };
  padding: 8px 10px;
  border-bottom-width: 1px;
  border-bottom-color: #ccc;
`;
