import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TextInput, IconButton, useTheme, Avatar, Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function RecordPayment({ navigation }) {
  const theme = useTheme();
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('cash');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: 'rgba(255,255,255,0.05)' }]}>
        <IconButton icon="chevron-left" size={32} iconColor={theme.colors.text} onPress={() => navigation.goBack()} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Add Payment</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Surface style={[styles.customerCard, { backgroundColor: '#162b21', borderColor: '#326748' }]} elevation={4}>
          <View style={styles.customerHeader}>
            <View style={styles.avatarBorder}>
              <Avatar.Image size={48} source={{ uri: 'https://i.pravatar.cc/150?u=2' }} />
            </View>
            <View>
              <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Sarah Jenkins</Text>
              <Text variant="bodySmall" style={{ color: theme.colors.secondaryText }}>Customer ID: #SJ-2023</Text>
            </View>
          </View>

          <View style={[styles.balanceBox, { backgroundColor: 'rgba(0,0,0,0.2)' }]}>
            <Text variant="labelSmall" style={{ color: theme.colors.secondaryText, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, marginBottom: 4 }}>Outstanding Balance</Text>
            <Text variant="displaySmall" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>$42.50</Text>
          </View>
        </Surface>

        <View style={styles.inputSection}>
          <Text variant="labelMedium" style={{ color: theme.colors.secondaryText, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, paddingHorizontal: 4, marginBottom: 8 }}>Payment Amount</Text>
          <View style={styles.inputContainer}>
            <Text style={[styles.currencySymbol, { color: theme.colors.primary }]}>$</Text>
            <TextInput
              mode="outlined"
              placeholder="0.00"
              value={amount}
              onChangeText={setAmount}
              keyboardType="decimal-pad"
              outlineColor="#326748"
              activeOutlineColor={theme.colors.primary}
              style={[styles.input, { backgroundColor: '#162b21' }]}
              textColor={theme.colors.text}
              placeholderTextColor="rgba(255,255,255,0.2)"
            />
          </View>
        </View>

        <View style={styles.methodsSection}>
          <Text variant="labelMedium" style={{ color: theme.colors.secondaryText, fontWeight: '600', textTransform: 'uppercase', letterSpacing: 1, paddingHorizontal: 4, marginBottom: 12 }}>Payment Method</Text>
          <View style={styles.methodsGrid}>
            <MethodButton icon="cash" label="Cash" active={paymentMethod === 'cash'} onPress={() => setPaymentMethod('cash')} theme={theme} />
            <MethodButton icon="bank" label="Transfer" active={paymentMethod === 'transfer'} onPress={() => setPaymentMethod('transfer')} theme={theme} />
            <MethodButton icon="wallet" label="Wallet" active={paymentMethod === 'wallet'} onPress={() => setPaymentMethod('wallet')} theme={theme} />
          </View>
        </View>

        <View style={[styles.summaryBox, { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: 'rgba(255,255,255,0.1)' }]}>
          <View style={styles.summaryRow}>
            <Text style={{ color: theme.colors.secondaryText, fontSize: 14 }}>Current Debt</Text>
            <Text style={{ color: theme.colors.text, fontWeight: '500', fontSize: 14 }}>$42.50</Text>
          </View>
          <View style={styles.summaryRow}>
            <Text style={{ color: theme.colors.secondaryText, fontSize: 14 }}>This Payment</Text>
            <Text style={{ color: theme.colors.primary, fontWeight: 'bold', fontSize: 14 }}>-${amount || '0.00'}</Text>
          </View>
          <View style={[styles.summaryDivider, { backgroundColor: 'rgba(255,255,255,0.1)' }]} />
          <View style={styles.summaryRow}>
            <Text style={{ color: theme.colors.text, fontWeight: '600', fontSize: 14 }}>Remaining Balance</Text>
            <Text style={{ color: theme.colors.text, fontWeight: 'bold', fontSize: 20 }}>${(42.50 - (parseFloat(amount) || 0)).toFixed(2)}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: 'rgba(16, 34, 24, 0.95)', borderTopColor: 'rgba(255,255,255,0.05)' }]}>
        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor="#102218"
          icon="check-circle"
          style={styles.confirmButton}
          contentStyle={{ height: 64 }}
          labelStyle={{ fontSize: 18, fontWeight: '900', fontFamily: 'System' }}
          onPress={() => navigation.navigate('CustomerProfile')}
        >
          Confirm Payment
        </Button>
      </View>
    </SafeAreaView>
  );
}

const MethodButton = ({ icon, label, active, onPress, theme }) => (
  <TouchableOpacity
    style={[
      styles.methodBtn,
      { backgroundColor: active ? theme.colors.primary : '#162b21' },
      !active && { borderWidth: 1, borderColor: '#326748' }
    ]}
    onPress={onPress}
  >
    <IconButton icon={icon} size={24} iconColor={active ? '#102218' : '#fff'} style={{ margin: 0 }} />
    <Text style={{ fontSize: 12, fontWeight: active ? 'bold' : '500', color: active ? '#102218' : '#fff', marginTop: 8 }}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 8,
    borderBottomWidth: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 120,
    gap: 24,
  },
  customerCard: {
    padding: 24,
    borderRadius: 16,
    borderWidth: 1,
  },
  customerHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    marginBottom: 24,
  },
  avatarBorder: {
    borderWidth: 2,
    borderColor: 'rgba(0, 232, 90, 0.3)',
    borderRadius: 26,
    overflow: 'hidden',
  },
  balanceBox: {
    alignItems: 'center',
    paddingVertical: 16,
    borderRadius: 12,
  },
  inputSection: {
    width: '100%',
  },
  inputContainer: {
    position: 'relative',
    justifyContent: 'center',
  },
  currencySymbol: {
    position: 'absolute',
    left: 16,
    fontSize: 24,
    fontWeight: 'bold',
    zIndex: 1,
  },
  input: {
    height: 80,
    fontSize: 30,
    fontWeight: 'bold',
    paddingLeft: 40,
  },
  methodsSection: {
    width: '100%',
  },
  methodsGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  methodBtn: {
    flex: 1,
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#00e85a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  summaryBox: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderStyle: 'dashed',
    gap: 8,
  },
  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  summaryDivider: {
    height: 1,
    width: '100%',
    marginVertical: 8,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 32,
    borderTopWidth: 1,
  },
  confirmButton: {
    borderRadius: 16,
    shadowColor: '#00e85a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 24,
    elevation: 8,
  }
});
