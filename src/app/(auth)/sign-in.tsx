import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";

const SignIn = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: "Sign in" }} />
      <Text style={styles.label}>Email</Text>
      <TextInput
        style={styles.input}
        placeholder="jhon@gmail.com"
        value={email}
        onChangeText={setEmail}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <Button text="Sign in" />
      <Link href={"/sign-up"} asChild>
        <Text style={styles.textButton}>Create an account</Text>
      </Link>
    </View>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    fontSize: 16,
    color: "gray",
  },
  input: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  textButton: {
    alignSelf: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
  },
});
