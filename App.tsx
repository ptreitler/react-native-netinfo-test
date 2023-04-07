import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import NetInfo, { NetInfoState } from "@react-native-community/netinfo";
import { useState } from "react";

export default function App() {
  const [connectionInfo, setConnectionInfo] = useState<
    NetInfoState | undefined
  >(undefined);

  NetInfo.addEventListener((info) => {
    console.log("Received NetInfo:", info);
    if (info !== connectionInfo) setConnectionInfo(info);
  });

  return (
    <View style={styles.container}>
      <Text>isConnected:</Text>
      <Text>{`${connectionInfo?.isConnected}`}</Text>
      <Text>isInternetReachable:</Text>
      <Text>{`${connectionInfo?.isInternetReachable}`}</Text>
      <Text>type:</Text>
      <Text>{`${connectionInfo?.type}`}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
