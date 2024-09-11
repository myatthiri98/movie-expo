import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React from "react";
import CustomInput from "../../design-system/components/CustomInput";
import { ScreenList } from "../../navigatiors/screen-lists/screenLists";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { T } from "../../design-system/theme";

const RegisterScreen = ({
  navigation,
}: Readonly<{ navigation: NativeStackNavigationProp<ScreenList> }>) => {
  const goToLogin = () => {
    navigation.navigate("Login");
  };

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <Image
          source={require("../../../assests/images/logo/movieLogo.png")}
          style={styles.logoImg}
          resizeMode="contain"
        />
        <Text style={styles.title}>Register</Text>
        <CustomInput
          title="Email"
          placeholder="Enter your email ..."
          icon="user"
        />
        <CustomInput
          secureTextEntry
          title="Password"
          placeholder="Enter your password ..."
          icon="lock"
        />
        <Text style={styles.forgotPassword}>Forgot your password?</Text>
        <Pressable style={styles.btn}>
          <Text style={styles.btnTitle}>Register</Text>
        </Pressable>
        <Text onPress={goToLogin} style={styles.goToLogin}>
          Already have an account?
        </Text>
      </ScrollView>
    </View>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: T.width.hundred_percent,
    backgroundColor: T.color.lightGray,
    padding: T.spacing.large,
  },
  scrollContainerStyle: {
    width: T.width.hundred_percent,
    justifyContent: "center",
    alignItems: "center",
  },
  logoImg: {
    width: T.width.posterImage,
    height: T.height.posterImage,
    alignSelf: "flex-start",
  },
  title: {
    fontSize: T.font.size.xLarge,
    fontWeight: T.font.weight.bold,
    marginBottom: T.spacing.large,
    marginLeft: T.spacing.large,
    color: T.color.black,
    alignSelf: "flex-start",
  },
  forgotPassword: {
    color: T.color.lightGray,
    marginTop: T.spacing.large,
  },
  btn: {
    backgroundColor: T.color.purple,
    width: T.width.posterImage,
    height: T.height.posterImage / 2.5,
    borderRadius: T.border.radius.extraRounded,
    marginTop: T.spacing.large,
    marginBottom: T.spacing.small,
    elevation: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    fontSize: T.font.size.medium,
    fontWeight: T.font.weight.bold,
    color: T.color.white,
  },
  goToLogin: {
    color: T.color.purple,
    marginTop: T.spacing.small,
    marginBottom: T.spacing.large,
    textDecorationLine: "underline",
  },
});
