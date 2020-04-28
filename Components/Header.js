import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

const Header = props => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerTitle}>
        {props.title}
      </Text>
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 90,
    justifyContent: 'center',
    backgroundColor: '#9cfc97',
    alignItems: 'center',
    paddingTop: 36,
  },
  headerTitle: {
    color: '#4a212b',
    fontSize: 18,
  }
});

export default Header;