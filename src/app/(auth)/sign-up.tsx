import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Link, Stack } from "expo-router";
import Button from "@/src/components/Button";
import Colors from "@/src/constants/Colors";

const SignUp = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <View style={styles.cotainer}>
      <Stack.Screen options={{ title: "Sign up" }} />

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
      />
      <Button text="Create account" />
      <Link href={'/sign-in'} asChild><Text style={styles.textButton}>Sign in</Text></Link>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  cotainer: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
  },
  label: {
    color: "gray",
    fontSize: 15,
  },
  input: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    marginTop: 5,
    marginBottom: 20,
  },
  textButton: {
    alignSelf: 'center',
    fontWeight: 'bold',
    color: Colors.light.tint
  },
});
