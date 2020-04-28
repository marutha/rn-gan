import React from 'react'

import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/colors';

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
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingTop: 36,
  },
  headerTitle: {
    color: Colors.primaryText,
    fontSize: 18,
    fontWeight: 'bold',
  }
});

export default Header;