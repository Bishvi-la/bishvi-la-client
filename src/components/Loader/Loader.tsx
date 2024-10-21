import React from 'react';
import { StyleSheet, Animated, Easing } from 'react-native';

export const Loader = () => {
  const rotateValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    const spinAnimation = Animated.loop(
      Animated.timing(rotateValue, {
        toValue: 1,
        duration: 1000,
        easing: Easing.linear,
        useNativeDriver: true,
      }),
    );
    spinAnimation.start();
  }, [rotateValue]);

  const rotateInterpolate = rotateValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Animated.View
      style={[
        styles.loader,
        {
          transform: [{ rotate: rotateInterpolate }],
        },
      ]}
    />
  );
};

const styles = StyleSheet.create({
  loader: {
    width: 50,
    aspectRatio: 1,
    borderRadius: 50,
    borderWidth: 8,
    borderColor: 'lightblue',
    borderRightColor: 'orange',
  },
});
