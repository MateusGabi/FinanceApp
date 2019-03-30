import React from 'react'
import { Icon } from 'expo';
import { View, StyleSheet } from 'react-native'

import { MonoText } from './StyledText';
import Layout from '../constants/Layout';
import Colors from '../constants/Colors';
import { Card, CardHeader, CardBody } from './Card';

function CallToAction(props) {

  const {icon, action} = props

  return (
    <View style={styles.callToAction}>
      <View style={styles.iconContainer}>
        <Icon.Ionicons
          name={icon}
          size={Layout.navbarIconSize}
          color={Colors.white}
        />
      </View>
      <MonoText>{action}</MonoText>
    </View>
  )
}

function BalanceCard() {
  return (
    <Card>
      <CardHeader style={styles.header}>
        <MonoText style={styles.label}>My Balance</MonoText>
        <MonoText>1.000,00 BRL</MonoText>
      </CardHeader>
      <CardBody style={styles.callToActionContainer}>
        <CallToAction icon="ios-send" action="Send" />
        <CallToAction icon="ios-cash" action="Pay" />
        <CallToAction icon="ios-swap" action="Top Up" />
        <CallToAction icon="ios-wallet" action="Request" />
      </CardBody>
    </Card>
  )
}


const styles = StyleSheet.create({
  callToActionContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    opacity: 0.75
  },
  callToAction: {
    alignItems: 'center'
  },
  iconContainer: {
    backgroundColor: Colors.purple,
    paddingHorizontal: (Layout.padding / 2) + 5,
    paddingVertical: Layout.padding / 2,
    textAlign: 'center',
    borderRadius: (Layout.padding / 3),
    marginBottom: Layout.margin
  }
})

export {BalanceCard}