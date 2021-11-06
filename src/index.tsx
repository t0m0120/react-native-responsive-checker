import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styled from 'styled-components/native';

import { Button } from './components/Button';
import { HiddenButton } from './components/HiddenButton';
import { iphone_screen_size_json } from './iphone_size';
import { ipad_screen_size_json } from './ipad_size';

export function ResponsiveCheckView({
  children,
}: {
  children?: React.ReactNode;
}) {
  const [screenSize, setScreenSize] = useState([325, 600]);
  const [hiddenSelect, setHiddenSelect] = useState(false);

  const onPress = (set_size: number[]) => {
    setScreenSize(set_size);
  };

  return (
    <Container>
      {!hiddenSelect &&
      <>
      <ButtonWrapper>
        <ButtonsTitle>iPhone</ButtonsTitle>
        {iphone_screen_size_json.map((iphone_size) => {
          return (
            <Button
              text={iphone_size.device_name}
              screen_size={[iphone_size.width, iphone_size.height]}
              onPress={onPress}
              key={iphone_size.device_name}
            />
          );
        })}
        <ButtonsTitle>iPad</ButtonsTitle>
        {ipad_screen_size_json.map((iphone_size) => {
          return (
            <Button
              text={iphone_size.device_name}
              screen_size={[iphone_size.width, iphone_size.height]}
              onPress={onPress}
              key={iphone_size.device_name}
            />
          );
        })}
      </ButtonWrapper>
      </>
      }
      <HiddenButton isHidden={hiddenSelect} onPress={setHiddenSelect}/>
      <ChildrenWrapper maxWidth={screenSize[0]} maxHeight={screenSize[1]}>
        {children}
      </ChildrenWrapper>
    </Container>
  );
}

const Container = styled(View)`
  background-color: #666;
  flex: 1;
`;

type ScreenSizeProps = { maxWidth: number; maxHeight: number };

const ChildrenWrapper = styled(View)`
  flex: 1;
  width: ${(props: ScreenSizeProps) => `${props.maxWidth}px` || '100%'};
  height: ${(props: ScreenSizeProps) => `${props.maxHeight}px` || '100%'};
`;

const ButtonWrapper = styled(View)`
  position: absolute;
  bottom: 20px;
  right: 20px;
  padding: 10px;
  margin-bottom: 10px;
  background-color: white;
  z-index: 9999;
`;

const ButtonsTitle = styled(Text)`
  margin-top: 15px;
  margin-bottom: 10px;
`