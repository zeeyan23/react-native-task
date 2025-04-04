import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { Dropdown } from "react-native-element-dropdown";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const LoginScreen = () => {
  const [selectedVehicle, setSelectedVehicle] = useState("VIC 380");
  const [routeId, setRouteId] = useState("137380");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isInvalid, setIsInvalid] = useState(false);
  const navigation = useNavigation();
  const vehicles = [
    { label: "VIC 380", value: "VIC 380" },
    { label: "VIC 381", value: "VIC 381" },
  ];

  const handleLogin = () => {
    if (password !== "correct_password") {
      setIsInvalid(true);
      navigation.navigate('Home')
    } else {
      setIsInvalid(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Logo</Text>
      <Text style={styles.loginText}>Login</Text>
      
      <Text style={styles.label}>Select Vehicle</Text>
      <Dropdown
        data={vehicles}
        labelField="label"
        valueField="value"
        value={selectedVehicle}
        onChange={(item) => setSelectedVehicle(item.value)}
        style={styles.dropdown}
      />
      
      <Text style={styles.label}>Route ID</Text>
      <TextInput style={styles.input} value={routeId} editable={false} />
      
      <Text style={styles.label}>Password</Text>
      <View style={[styles.inputContainer, isInvalid && styles.errorBorder]}>
        <TextInput
          style={styles.passwordInput}
          value={password}
          onChangeText={setPassword}
          secureTextEntry={!showPassword}
          placeholder="Enter password"
        />
        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <MaterialIcons name={showPassword ? "visibility" : "visibility-off"} size={24} color="gray" />
        </TouchableOpacity>
      </View>
      {isInvalid && <Text style={styles.errorText}>Password is Invalid</Text>}
      
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  logo: {
    fontSize: 52,
    fontWeight: "bold",
    color: "#0560FD",
    alignSelf: "center",
    marginBottom: 50,
  },
  loginText: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  label: {
    fontSize: 14,
    fontWeight: "700",
    marginTop: 20,
    marginBottom:8
  },
  dropdown: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderColor: "#D1CECE",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
    backgroundColor: "#f2f2f2",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginTop: 5,
  },
  passwordInput: {
    flex: 1,
    height: 50,
  },
  errorBorder: {
    borderColor: "red",
  },
  errorText: {
    color: "red",
    fontSize: 12,
    marginTop: 5,
  },
  loginButton: {
    backgroundColor: "#0560FD",
    paddingVertical: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  loginButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "500",
  },
});

export default LoginScreen;
