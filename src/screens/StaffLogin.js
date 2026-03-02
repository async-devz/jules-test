import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import { Text, TextInput, Button, useTheme, IconButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function StaffLogin({ navigation }) {
  const theme = useTheme();
  const [userId, setUserId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // In a real app, authenticate here. For demo, just navigate to AdminDashboard or Cashier.
    navigation.navigate('AdminDashboard');
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.topSection}>
          <View style={styles.imageContainer}>
            <ImageBackground
              source={{ uri: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=1000&auto=format&fit=crop' }}
              style={styles.heroImage}
              imageStyle={{ borderRadius: 12 }}
            >
              <View style={styles.imageOverlay}>
                <View style={styles.logoRow}>
                  <View style={[styles.logoIcon, { backgroundColor: theme.colors.primary }]}>
                    <IconButton icon="hamburger" size={28} iconColor="#112218" style={{ margin: 0 }} />
                  </View>
                  <Text variant="titleLarge" style={{ color: '#fff', fontWeight: 'bold', letterSpacing: 1 }}>BurgerDash</Text>
                </View>
              </View>
            </ImageBackground>
          </View>

          <View style={styles.titleContainer}>
            <Text variant="headlineLarge" style={{ color: theme.colors.text, fontWeight: '900', textAlign: 'center' }}>Staff Portal</Text>
            <Text variant="bodyLarge" style={{ color: theme.colors.secondaryText, marginTop: 8, textAlign: 'center' }}>Log in to manage orders and shifts</Text>
          </View>
        </View>

        <View style={styles.middleSection}>
          <View style={styles.inputGroup}>
            <Text variant="titleMedium" style={{ fontWeight: '600', marginBottom: 8, marginLeft: 4 }}>Phone Number or Staff ID</Text>
            <TextInput
              mode="outlined"
              placeholder="Ex: 883-992 or ID"
              value={userId}
              onChangeText={setUserId}
              left={<TextInput.Icon icon="badge-account-horizontal-outline" color={theme.colors.secondaryText} />}
              outlineColor="#326748"
              activeOutlineColor={theme.colors.primary}
              style={[styles.input, { backgroundColor: '#193324' }]}
              textColor={theme.colors.text}
              placeholderTextColor={theme.colors.secondaryText}
            />
          </View>

          <View style={styles.inputGroup}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8, marginLeft: 4 }}>
              <Text variant="titleMedium" style={{ fontWeight: '600' }}>Password</Text>
            </View>
            <TextInput
              mode="outlined"
              placeholder="Enter your password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!showPassword}
              left={<TextInput.Icon icon="lock-outline" color={theme.colors.secondaryText} />}
              right={
                <TextInput.Icon
                  icon={showPassword ? "eye-off" : "eye"}
                  color={theme.colors.secondaryText}
                  onPress={() => setShowPassword(!showPassword)}
                />
              }
              outlineColor="#326748"
              activeOutlineColor={theme.colors.primary}
              style={[styles.input, { backgroundColor: '#193324' }]}
              textColor={theme.colors.text}
              placeholderTextColor={theme.colors.secondaryText}
            />
            <TouchableOpacity style={{ alignSelf: 'flex-end', marginTop: 12 }}>
              <Text variant="labelLarge" style={{ color: theme.colors.primary, fontWeight: '600' }}>Forgot Password?</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottomSection}>
          <Button
            mode="contained"
            buttonColor={theme.colors.primary}
            textColor="#112218"
            style={styles.loginBtn}
            contentStyle={{ height: 56 }}
            labelStyle={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}
            icon="arrow-right"
            contentStyle={{ flexDirection: 'row-reverse' }}
            onPress={handleLogin}
          >
            Login
          </Button>
          <View style={styles.troubleRow}>
            <Text variant="bodyMedium" style={{ color: theme.colors.secondaryText }}>Having trouble? </Text>
            <TouchableOpacity>
              <Text variant="bodyMedium" style={{ color: theme.colors.text, fontWeight: 'bold', textDecorationLine: 'underline', textDecorationColor: theme.colors.primary }}>Contact Manager</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topSection: {
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 16,
    paddingHorizontal: 16,
  },
  imageContainer: {
    width: '100%',
    aspectRatio: 16/9,
    marginBottom: 24,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 8,
  },
  heroImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'flex-end',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(16, 34, 24, 0.4)',
    borderRadius: 12,
    justifyContent: 'flex-end',
    padding: 16,
  },
  logoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  logoIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    paddingHorizontal: 16,
  },
  middleSection: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'center',
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
    gap: 24,
  },
  inputGroup: {
    width: '100%',
  },
  input: {
    height: 56,
  },
  bottomSection: {
    padding: 20,
    paddingBottom: 32,
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
    gap: 16,
  },
  loginBtn: {
    borderRadius: 12,
    shadowColor: '#13ec6d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  troubleRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
