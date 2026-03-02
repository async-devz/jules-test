import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, IconButton, useTheme, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ViewOrderDetails({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: '#234833' }]}>
        <IconButton icon="chevron-left" size={32} iconColor={theme.colors.text} onPress={() => navigation.goBack()} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Order Details</Text>
        <IconButton icon="printer" size={24} iconColor={theme.colors.primary} onPress={() => {}} />
      </View>

      <View style={styles.infoSection}>
        <View style={styles.infoRow}>
          <View style={{ gap: 4 }}>
            <Text variant="displaySmall" style={{ fontWeight: '900', letterSpacing: -1 }}>Order #2044</Text>
            <Text variant="titleMedium" style={{ color: '#9ca3af', fontWeight: '500' }}>Customer: <Text style={{ color: theme.colors.text }}>Sarah Jenkins</Text></Text>
            <Text variant="labelSmall" style={{ color: '#6b7280' }}>Ordered at 10:15 AM</Text>
          </View>
          <View style={{ alignItems: 'flex-end', gap: 8 }}>
            <View style={[styles.statusBadge, { backgroundColor: 'rgba(249, 115, 22, 0.2)', borderColor: 'rgba(249, 115, 22, 0.3)', borderWidth: 1 }]}>
              <Text variant="labelSmall" style={{ color: '#f97316', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>Preparing</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: 'rgba(249, 115, 22, 0.1)' }]}>
              <Text variant="labelSmall" style={{ color: '#f97316', fontWeight: '900', fontSize: 10, textTransform: 'uppercase', letterSpacing: 1 }}>Pending Payment</Text>
            </View>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={[styles.receiptCard, { backgroundColor: '#1a3525', borderColor: '#2a4e3a' }]}>
          <View style={[styles.receiptHeader, { backgroundColor: 'rgba(35, 72, 51, 0.3)', borderBottomColor: '#2a4e3a' }]}>
            <Text variant="labelSmall" style={{ fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 2, color: '#9ca3af' }}>Order Items</Text>
          </View>

          <View style={[styles.itemsContainer, { borderBottomColor: '#2a4e3a' }]}>
            <ItemRow
              icon="hamburger"
              title="1x Veggie Wrap"
              note="Extra sauce, No onions"
              price="$12.40"
              theme={theme}
            />
            <View style={{ height: 1, backgroundColor: '#2a4e3a' }} />
            <ItemRow
              icon="silverware-fork-knife"
              title="1x Onion Rings"
              note="Large size"
              price="$6.50"
              theme={theme}
            />
          </View>

          <View style={[styles.totalsSection, { backgroundColor: 'rgba(35, 72, 51, 0.2)' }]}>
            <View style={styles.totalRow}>
              <Text style={{ color: '#9ca3af', fontSize: 14 }}>Subtotal</Text>
              <Text style={{ color: theme.colors.text, fontSize: 14 }}>$18.90</Text>
            </View>
            <View style={styles.totalRow}>
              <Text style={{ color: '#9ca3af', fontSize: 14 }}>Tax (8%)</Text>
              <Text style={{ color: theme.colors.text, fontSize: 14 }}>$1.51</Text>
            </View>
            <View style={[styles.grandTotal, { borderTopColor: '#2a4e3a' }]}>
              <Text style={{ color: theme.colors.text, fontSize: 20, fontWeight: '900' }}>Total</Text>
              <Text style={{ color: theme.colors.primary, fontSize: 20, fontWeight: '900' }}>$20.41</Text>
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: theme.colors.background }]}>
        <Button
          mode="outlined"
          textColor={theme.colors.text}
          icon="pencil"
          style={[styles.actionBtn, { borderColor: '#2a4e3a', borderWidth: 2 }]}
          contentStyle={{ height: 56 }}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          onPress={() => navigation.navigate('ModifyOrder')}
        >
          Edit Order
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor="#102218"
          icon="cash"
          style={styles.actionBtnPrimary}
          contentStyle={{ height: 56 }}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          onPress={() => navigation.navigate('PaymentBalance')}
        >
          Process Payment
        </Button>
      </View>
    </SafeAreaView>
  );
}

const ItemRow = ({ icon, title, note, price, theme }) => (
  <View style={styles.itemRow}>
    <View style={styles.itemLeft}>
      <View style={[styles.itemIcon, { backgroundColor: '#234833' }]}>
        <IconButton icon={icon} size={20} iconColor="rgba(0, 232, 90, 0.8)" style={{ margin: 0 }} />
      </View>
      <View>
        <Text variant="titleMedium" style={{ fontWeight: 'bold', fontSize: 14 }}>{title}</Text>
        <Text variant="bodySmall" style={{ color: '#9ca3af', fontSize: 12 }}>{note}</Text>
      </View>
    </View>
    <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{price}</Text>
  </View>
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
  infoSection: {
    padding: 24,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  statusBadge: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
  },
  scrollContent: {
    paddingHorizontal: 24,
    paddingBottom: 120,
  },
  receiptCard: {
    borderRadius: 16,
    borderWidth: 1,
    overflow: 'hidden',
  },
  receiptHeader: {
    padding: 16,
    borderBottomWidth: 1,
  },
  itemsContainer: {
    borderBottomWidth: 1,
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  itemIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  totalsSection: {
    padding: 16,
    gap: 8,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  grandTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 8,
    marginTop: 8,
    borderTopWidth: 1,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 24,
    paddingBottom: 40,
    gap: 16,
  },
  actionBtn: {
    flex: 1,
    borderRadius: 12,
  },
  actionBtnPrimary: {
    flex: 1,
    borderRadius: 12,
    shadowColor: '#13ec6d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  }
});
