import LoginView from "@/components/LoginView";
import SignupView from "@/components/SignupView";
import { Text, View, StyleSheet } from "react-native";
import { useState } from "react";
import { Image } from "react-native";

export default function Index() {

  const [currentView, setCurrentView] = useState<'login' | 'signup'>('login');

  return (
    <View style={{ flex: 1 }}>
      <Image style={{ top: 20, right: 20 }} />
      {currentView === 'login' ? (
        <LoginView onSwitchToSignup={() => setCurrentView('signup')} />
      ) : (
        <SignupView onSwitchToLogin={() => setCurrentView('login')} />
      )}
    </View>
  );
};


