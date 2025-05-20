import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';

type ScreenWrapperProps = {
  children: ReactNode;
};

export default function ScreenWrapper({ children }: ScreenWrapperProps) {
  return <View style={styles.container}>{children}</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6F1F0',
  },
});
