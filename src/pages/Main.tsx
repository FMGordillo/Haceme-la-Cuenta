import { useNavigation } from "@react-navigation/native";
import { Button } from "components";
import React, { FunctionComponent } from "react";
import { Text, View } from "react-native";

export const MainPage: FunctionComponent = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>MAIN PAGE</Text>
      <Button
        title="New register"
        onPress={() => navigation.navigate("InsertRegister")}
      />
    </View>
  );
};
