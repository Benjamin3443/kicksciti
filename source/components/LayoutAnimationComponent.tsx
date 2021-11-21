import {StyleSheet} from 'react-native';
import React, {ReactNode} from 'react';
import Animated, {
  Easing,
  FadeInLeft,
  FadeInUp,
  FadeOutDown,
  FadeOutLeft,
} from 'react-native-reanimated';

type LayoutAnimationComponentProps = {
  children: ReactNode;
  delay?: number;
  leftInOut?: boolean;
  exit?: any;
  exitDelay?: number;
};

const LayoutAnimationComponent: React.FC<LayoutAnimationComponentProps> = ({
  children,
  delay,
  leftInOut,
  exitDelay,
  exit = leftInOut
    ? FadeOutLeft.delay(exitDelay ?? 0)
        .duration(500)
        .easing(Easing.ease)
    : FadeOutDown.delay(exitDelay ?? 0)
        .duration(500)
        .easing(Easing.ease),
}) => {
  exit;
  return (
    <Animated.View
      entering={
        leftInOut
          ? FadeInLeft.delay(delay ?? 0)
              .duration(500)
              .easing(Easing.ease)
          : FadeInUp.delay(delay ?? 0)
              .duration(500)
              .easing(Easing.ease)
      }
      exiting={exit}>
      {children}
    </Animated.View>
  );
};

export default LayoutAnimationComponent;

const styles = StyleSheet.create({});
