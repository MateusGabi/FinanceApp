import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { H1 } from './StyledText';
import { Icon } from 'expo';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


function Navbar() {
  return (
    <View style={styles.container}>
      <Icon.Ionicons
        name="ios-menu"
        size={Layout.navbarIconSize}
        color={Colors.navbarIconColor}
      />
      <Icon.Ionicons
        name="ios-notifications-outline"
        size={Layout.navbarIconSize}
        color={Colors.navbarIconColor}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
    paddingTop: getStatusBarHeight() + Layout.padding,
    paddingBottom: Layout.padding,
    paddingLeft: Layout.padding,
    paddingRight: Layout.padding,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export { Navbar }