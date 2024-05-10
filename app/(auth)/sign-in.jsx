import { View, Text, ScrollView, Image, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "../../components/FormField";
import CustomButtons from "../../components/CustomButtons.jsx";
import { Link, router } from "expo-router";
import { signIn } from "../../lib/appwrite.js";

const SignIn = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = async () => {
    // checking weather email and password Field is empty or not, if empty throw error
    if (!form.email || !form.password) {
      Alert.alert("Error", "Please fill in fields");
    }

    // active submit button
    setIsSubmitting(true);

    try {
      await signIn(form.email, form.password);

      // set it to global sate...

      router.replace("/home");
    } catch (error) {
      console.log("Error in Submit Sign In", error);
      Alert.alert("Error", "Please fill in all the details");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center min-h-[85vh] px-4 my-6">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[115px] h-[35px]"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Login to Aora
          </Text>

          <FormField
            title="Email"
            value={form.email}
            handleChangeText={(e) => setForm({ ...form, email: e })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(e) => setForm({ ...form, password: e })}
            otherStyles="mt-7"
          />

          <CustomButtons
            title="Sign In"
            handlePress={submit}
            contentContainerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-3">
            <Text className="text-lg text-gray-100 font-pregular">
              {" "}
              Don't have account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-pregular text-secondary"
            >
              Sign Up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
