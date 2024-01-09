import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Platform,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme/index";
import { ArrowLeftIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";

const LoginScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    if (email && password) {
      const emailValue = email.trim();
      try {
        await signInWithEmailAndPassword(auth, emailValue, password);
      } catch (error) {
        console.log("Got error", error.message);
      }
    }
  };
  return (
    <View
      className="flex-1 bg-white"
      style={{ backgroundColor: themeColors.bg }}
    >
      <SafeAreaView className="flex mb-7">
        <View className="flex-row justify-start">
          <TouchableOpacity
            className="bg-yellow-400 p-2 rounded-tr-2xl rounded-bl-2xl ml-4"
            onPress={() => navigation.goBack()}
          >
            <ArrowLeftIcon size="20" color="black" />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login.png")}
            style={{ width: 200, height: 200 }}
          />
        </View>
      </SafeAreaView>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        className="flex-1 bg-white px-8 pt-8"
        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View className="w-full h-full">
            <View className="form space-y-3">
              <Text className="text-gray-700 ml-4">Email Address</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl mb-3"
                value={email}
                placeholder="Enter Email"
                onChangeText={(value) => setEmail(value)}
              />

              <Text className="text-gray-700 ml-4">Password</Text>
              <TextInput
                className="p-4 bg-gray-100 text-gray-700 rounded-2xl"
                value={password}
                secureTextEntry
                placeholder="Enter Password"
                onChangeText={(value) => setPassword(value)}
              />

              <TouchableOpacity className="flex items-end mb-5">
                <Text className="text-gray-700">Forgot Password?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className="py-3 bg-yellow-400 rounded-xl"
                onPress={handleSubmit}
              >
                <Text className="font-xl font-bold text-center text-gray-700">
                  Login
                </Text>
              </TouchableOpacity>
            </View>
            <Text className="text-xl text-gray-700 font-bold text-center py-5">
              Or
            </Text>
            <View className="flex-row justify-center space-x-12">
              <TouchableOpacity className="p-2 bg-gray-100 rounded-xl">
                <Image
                  source={require("../assets/icons/google.png")}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 bg-gray-100 rounded-xl">
                <Image
                  source={require("../assets/icons/apple.png")}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
              <TouchableOpacity className="p-2 bg-gray-100 rounded-xl">
                <Image
                  source={require("../assets/icons/facebook.png")}
                  className="w-10 h-10"
                />
              </TouchableOpacity>
            </View>
            <View className="flex-row justify-center mt-7">
              <Text className="text-gray-500 font-semibold">
                Don't have an account ?
              </Text>
              <TouchableOpacity onPress={() => navigation.navigate("SignUp")}>
                <Text className="font-semibold text-yellow-400">Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </View>
  );
};

export default LoginScreen;
