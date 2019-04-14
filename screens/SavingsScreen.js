import React from "react";
import { Icon } from "expo";
import { ScrollView, FlatList, Image, View, StyleSheet } from "react-native";
import { Navbar } from "../components/Navbar";
import Colors from "../constants/Colors";
import Layout from "../constants/Layout";
import { MonoText, TitleText } from "./../components/StyledText";
import { Card, CardHeader, CardBody } from "../components/Card";

function Balance() {
  return (
    <View style={{ backgroundColor: Colors.purple }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgba(255, 255, 255, 0.2)",
          paddingHorizontal: Layout.padding,
          paddingVertical: Layout.padding / 3,
          marginHorizontal: Layout.margin,
          marginTop: Layout.margin,
          borderRadius: Layout.padding
        }}
      >
        <MonoText style={{ color: Colors.white, flex: 1 }}>Balance</MonoText>
        <MonoText style={{ color: Colors.white, fontWeight: "bold" }}>
          Rp 1.000.000
        </MonoText>
        <View style={{ flex: 1 }}>
          <Icon.Ionicons
            name="ios-arrow-round-forward"
            size={Layout.navbarIconSize}
            color={Colors.navbarIconColor}
            style={{ alignSelf: "flex-end" }}
          />
        </View>
      </View>
    </View>
  );
}

function CallToAction(props) {
  const { icon, action } = props;

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
  );
}

function Actions() {
  return (
    <View
      style={{
        // width: Layout.window.width - 2 * Layout.margin,
        marginTop: -70,
        marginRight: Layout.margin,
        marginLeft: Layout.margin,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 6
        },
        shadowOpacity: 0.2,
        shadowRadius: 10,
        flexDirection: "row",
        justifyContent: "space-evenly"
      }}
    >
      <Card
        style={{
          width: Layout.window.width / 3 - 2 * Layout.margin
        }}
      >
        <CallToAction icon="ios-send" action="Send" />
      </Card>
      <Card
        style={{
          width: Layout.window.width / 3 - 2 * Layout.margin
        }}
      >
        <CallToAction icon="ios-send" action="Send" />
      </Card>
      <Card
        style={{
          width: Layout.window.width / 3 - 2 * Layout.margin
        }}
      >
        <CallToAction icon="ios-send" action="Send" />
      </Card>
    </View>
  );
}

const cards = [
  {
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1528164344705-47542687000d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMDd9",
    title: "Japan Trip",
    description: "Lorem bla bla bla",
    totalAmount: 4000,
    currentAmount: 10
  },
  {
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1521058798685-39dd95c33314?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9",
    title: "Buenos Aires Trip",
    description: "Lorem bla bla bla",
    totalAmount: 4000,
    currentAmount: 10
  },
  {
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1521058798685-39dd95c33314?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMDd9",
    title: "Buenos Aires Trip",
    description: "Lorem bla bla bla",
    totalAmount: 4000,
    currentAmount: 10
  }
];

function Goals(props) {
  return (
    <FlatList
      horizontal
      pagingEnabled
      scrollEnabled
      showsHorizontalScrollIndicator={false}
      decelerationRate={0}
      scrollEventThrottle={16}
      snapToAlignment="left"
      style={{ overflow: "visible" }}
      data={cards}
      keyExtractor={(item, index) => `${item.title}`}
      renderItem={({ item, index }) => this.renderGoal(item, index)}
    />
  );
}

renderGoal = (item, index) => {
  const isLastItem = index === cards.length - 1;
  return (
    <View
      style={[
        styles.flex,
        styles.column,
        styles.recommendation,
        {
          backgroundColor: "#fff",
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 5
          },
          shadowOpacity: 0.2,
          shadowRadius: 10,
          borderRadius: 10
        }
      ]}
    >
      <View style={[styles.flex, styles.recommendationHeader]}>
        <Image
          style={[styles.recommendationImage]}
          source={{ uri: item.image }}
        />
        <View style={[styles.flex, styles.row, styles.recommendationOptions]}>
          <MonoText style={styles.recommendationTemp}>{item.status}</MonoText>
        </View>
      </View>
      <View
        style={[
          styles.flex,
          styles.column,
          {
            justifyContent: "space-evenly",
            padding: Layout.padding / 2
          }
        ]}
      >
        <TitleText
          style={{
            fontSize: 16 * 1.25,
            fontWeight: "500",
            paddingBottom: Layout.padding / 4.5
          }}
        >
          {item.title}
        </TitleText>
        <MonoText style={{ color: "#000" }}>{item.description}</MonoText>
        <View
          style={[
            styles.row,
            {
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: Layout.margin,
              backgroundColor: Colors.blue,
              borderRadius: Layout.padding
              //   padding: Layout.padding
            }
          ]}
        >
          <View
            style={{
              backgroundColor: "red",
              padding: Layout.padding,
              borderRadius: Layout.padding
            }}
          >
            <TitleText
              style={{
                color: "#000"
              }}
            >
              {item.currentAmount}
            </TitleText>
          </View>
          <View
            style={{
              backgroundColor: "transparent",
              padding: Layout.padding,
              borderRadius: Layout.padding
            }}
          >
            <TitleText
              style={{
                color: "#000"
              }}
            >
              {item.totalAmount}
            </TitleText>
          </View>
        </View>
      </View>
    </View>
  );
};

class SavingsScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar back title="My Savings" />
        <ScrollView>
          <Balance />
          <View
            style={{
              backgroundColor: Colors.purple,
              height: 100,
              width: Layout.window.width
            }}
          />
          <Actions />
          <TitleText
            style={{
              margin: Layout.margin * 2
            }}
          >
            My Goals
          </TitleText>
          <Goals />
        </ScrollView>
      </View>
    );
  }
}

SavingsScreen.navigationOptions = {
  header: null
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.gray
  },
  callToAction: {
    alignItems: "center"
  },
  iconContainer: {
    backgroundColor: Colors.purple,
    paddingHorizontal: Layout.padding / 2 + 5,
    paddingVertical: Layout.padding / 2,
    textAlign: "center",
    borderRadius: Layout.padding / 3,
    marginBottom: Layout.margin
  },
  flex: {
    flex: 1
  },
  column: {
    flexDirection: "column"
  },
  row: {
    flexDirection: "row"
  },
  header: {
    backgroundColor: Colors.white,
    paddingHorizontal: Layout.padding,
    paddingTop: Layout.padding * 1.33,
    paddingBottom: Layout.padding * 0.66,
    justifyContent: "space-between",
    alignItems: "center"
  },
  articles: {},
  destinations: {
    flex: 1,
    justifyContent: "space-between"
  },
  destination: {
    width: Layout.window.width - Layout.padding * 2,
    height: Layout.window.width * 0.6,
    marginHorizontal: Layout.margin,
    paddingHorizontal: Layout.padding,
    paddingVertical: Layout.padding * 0.66,
    borderRadius: Layout.radius
  },
  destinationInfo: {
    position: "absolute",
    borderRadius: Layout.radius,
    paddingHorizontal: Layout.padding,
    paddingVertical: Layout.padding / 2,
    bottom: -Layout.padding,
    right: Layout.padding,
    left: Layout.padding,
    backgroundColor: Colors.white
  },
  recommended: {},
  recommendedHeader: {
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingHorizontal: Layout.padding,
    marginVertical: Layout.margin * 0.66
  },
  recommendedList: {},
  recommendation: {
    width: Layout.window.width - Layout.margin * 2,
    marginHorizontal: Layout.margin,
    // backgroundColor: Colors.white,
    // overflow: "hidden",
    borderBottomRightRadius: Layout.padding / 2,
    borderBottomLeftRadius: Layout.padding / 2
  },
  recommendationHeader: {
    overflow: "hidden",
    borderTopRightRadius: Layout.padding / 2,
    borderTopLeftRadius: Layout.padding / 2
  },
  recommendationOptions: {
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 0,
    right: 0,
    backgroundColor: "#2ecbd4",
    paddingHorizontal: Layout.padding / 2,
    margin: Layout.margin,
    borderRadius: Layout.padding
  },
  recommendationTemp: {
    fontSize: 16,
    color: Colors.white
  },
  recommendationImage: {
    height: 200,
    width: Layout.window.width - Layout.margin * 2
  },
  avatar: {
    width: Layout.padding,
    height: Layout.padding,
    borderRadius: Layout.padding / 2
  },
  rating: {
    fontSize: Layout.font * 2,
    color: Colors.white,
    fontWeight: "bold"
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 6
    },
    shadowOpacity: 0.2,
    shadowRadius: 10
  },
  dots: {
    width: 10,
    height: 10,
    borderWidth: 2.5,
    borderRadius: 5,
    marginHorizontal: 6,
    backgroundColor: Colors.gray,
    borderColor: "transparent"
  },
  activeDot: {
    width: 12.5,
    height: 12.5,
    borderRadius: 6.25,
    borderColor: Colors.active
  }
});

export default SavingsScreen;
