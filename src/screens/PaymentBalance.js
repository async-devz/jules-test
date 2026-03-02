import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, IconButton, useTheme, Surface, Button, RadioButton } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PaymentBalance({ navigation }) {
  const theme = useTheme();
  const [paymentMethod, setPaymentMethod] = useState('balance');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <IconButton icon="arrow-left" size={24} iconColor={theme.colors.text} style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} onPress={() => navigation.goBack()} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 48 }}>Payment</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.totalSection}>
          <Text variant="labelMedium" style={{ color: '#92c9a9', fontWeight: '500', marginBottom: 4 }}>Total Amount</Text>
          <Text variant="displayMedium" style={{ fontWeight: '900', letterSpacing: -1 }}>$24.50</Text>
        </View>

        <Text variant="titleLarge" style={{ fontWeight: 'bold', paddingHorizontal: 16, paddingTop: 8, paddingBottom: 16 }}>Payment Method</Text>

        <View style={styles.methodsList}>
          <PaymentOption
            id="cash"
            icon="cash"
            title="Cash"
            selected={paymentMethod === 'cash'}
            onSelect={() => setPaymentMethod('cash')}
            theme={theme}
          />
          <PaymentOption
            id="qr"
            icon="qrcode-scan"
            title="QR / Bank Transfer"
            selected={paymentMethod === 'qr'}
            onSelect={() => setPaymentMethod('qr')}
            theme={theme}
          />
          <PaymentOption
            id="balance"
            icon="wallet"
            title="Customer Balance"
            selected={paymentMethod === 'balance'}
            onSelect={() => setPaymentMethod('balance')}
            theme={theme}
            isPrimary
          />
        </View>

        {paymentMethod === 'balance' && (
          <View style={[styles.balanceInfoBox, { backgroundColor: '#162920', borderColor: '#1e3a2d' }]}>
            <View style={[styles.customerRow, { borderBottomColor: 'rgba(50, 103, 72, 0.3)' }]}>
              <View style={[styles.customerAvatar, { backgroundColor: '#326748' }]}>
                <IconButton icon="account" size={16} iconColor="#fff" style={{ margin: 0, padding: 0 }} />
              </View>
              <View>
                <Text variant="labelSmall" style={{ color: '#92c9a9' }}>Customer</Text>
                <Text variant="titleSmall" style={{ fontWeight: 'bold' }}>John Doe</Text>
              </View>
            </View>

            <View style={styles.balanceDetailRow}>
              <Text style={{ color: '#92c9a9', fontSize: 14 }}>Current Balance</Text>
              <Text style={{ color: theme.colors.text, fontWeight: 'bold', fontSize: 14 }}>$59.00</Text>
            </View>
            <View style={styles.balanceDetailRow}>
              <Text style={{ color: '#92c9a9', fontSize: 14 }}>Deduction</Text>
              <Text style={{ color: theme.colors.error, fontWeight: 'bold', fontSize: 14 }}>- $24.50</Text>
            </View>

            <View style={[styles.divider, { backgroundColor: 'rgba(50, 103, 72, 0.5)' }]} />

            <View style={styles.balanceDetailRow}>
              <Text style={{ color: theme.colors.primary, fontWeight: 'bold', fontSize: 14 }}>New Balance</Text>
              <Text style={{ color: theme.colors.primary, fontWeight: 'bold', fontSize: 18 }}>$34.50</Text>
            </View>
          </View>
        )}
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: theme.colors.background }]}>
        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor="#112218"
          icon="check"
          contentStyle={{ flexDirection: 'row-reverse', height: 56 }}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          style={styles.confirmButton}
          onPress={() => navigation.navigate('DetailedCashierDashboard')}
        >
          Confirm Payment
        </Button>
      </View>
    </SafeAreaView>
  );
}

const PaymentOption = ({ id, icon, title, selected, onSelect, theme, isPrimary }) => (
  <TouchableOpacity
    style={[
      styles.paymentOption,
      { backgroundColor: '#112218', borderColor: '#326748' },
      isPrimary && selected && { backgroundColor: 'rgba(19, 236, 109, 0.05)', borderColor: theme.colors.primary },
      !isPrimary && selected && { borderColor: 'rgba(19, 236, 109, 0.5)' }
    ]}
    onPress={onSelect}
    activeOpacity={0.8}
  >
    <View style={styles.optionLeft}>
      <RadioButton
        value={id}
        status={selected ? 'checked' : 'unchecked'}
        onPress={onSelect}
        color={theme.colors.primary}
        uncheckedColor="#326748"
      />
      <View style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
        <IconButton icon={icon} size={24} iconColor={selected && isPrimary ? theme.colors.primary : (selected ? theme.colors.primary : '#92c9a9')} style={{ margin: 0 }} />
        <Text variant="titleMedium" style={{ fontWeight: '500' }}>{title}</Text>
      </View>
    </View>
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
    padding: 16,
    paddingBottom: 8,
  },
  scrollContent: {
    paddingBottom: 100,
  },
  totalSection: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 32,
  },
  methodsList: {
    paddingHorizontal: 16,
    gap: 12,
  },
  paymentOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  optionLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  balanceInfoBox: {
    margin: 16,
    padding: 20,
    borderRadius: 12,
    borderWidth: 1,
  },
  customerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    paddingBottom: 12,
    marginBottom: 16,
    borderBottomWidth: 1,
  },
  customerAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  balanceDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
  },
  divider: {
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
  },
  confirmButton: {
    borderRadius: 12,
    shadowColor: '#13ec6d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 6,
  }
});
