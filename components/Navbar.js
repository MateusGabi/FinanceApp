import React from 'react'
import { Text, StyleSheet, View } from 'react-native'
import { getStatusBarHeight } from 'react-native-status-bar-height';
import { H1 } from './StyledText';
import { Icon } from 'expo';
import Colors from '../constants/Colors';
import Layout from '../constants/Layout';


class Navbar extends React.Component {
    render() {
	const { style } = this.props
	
  return (
	  <View style={[styles.container, style]}>
      <Icon.Ionicons
        name="ios-menu"
        size={Layout.navbarIconSize}
        color={Colors.navbarIconColor}
	  />
	  <H1 style={{color: '#fff'}}>Home</H1>
      <Icon.Ionicons
        name="ios-notifications-outline"
        size={Layout.navbarIconSize}
        color={Colors.navbarIconColor}
      />
    </View>
  )
    }
}

const navbarBasePadding = Layout.padding / 2

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.purple,
    paddingTop: getStatusBarHeight() + navbarBasePadding,
    paddingBottom: navbarBasePadding,
    paddingHorizontal: navbarBasePadding,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})

export { Navbar }
