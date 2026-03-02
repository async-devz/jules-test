import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, IconButton, useTheme, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ModifyOrder({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: '#234833' }]}>
        <IconButton icon="chevron-left" size={28} iconColor={theme.colors.text} onPress={() => navigation.goBack()} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Modify Order</Text>
        <IconButton icon="dots-vertical" size={24} iconColor="transparent" onPress={() => {}} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.statusSection}>
          <View style={[styles.statusCard, { backgroundColor: 'rgba(250, 204, 21, 0.1)', borderColor: 'rgba(250, 204, 21, 0.2)' }]}>
            <View>
              <Text variant="labelSmall" style={{ color: '#facc15', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>Order Status</Text>
              <Text variant="headlineMedium" style={{ color: '#eab308', fontWeight: '900' }}>Order #2044</Text>
            </View>
            <View style={[styles.statusBadge, { backgroundColor: '#eab308' }]}>
              <IconButton icon="silverware-fork-knife" size={14} iconColor="#fff" style={{ margin: 0 }} />
              <Text variant="labelMedium" style={{ color: '#fff', fontWeight: 'bold', marginLeft: 4 }}>Preparing</Text>
            </View>
          </View>
        </View>

        <View style={styles.itemsSection}>
          <View style={styles.itemsHeader}>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Order Items</Text>
            <TouchableOpacity style={[styles.addButton, { backgroundColor: 'rgba(0, 232, 90, 0.1)' }]}>
              <IconButton icon="plus" size={18} iconColor={theme.colors.primary} style={{ margin: 0, padding: 0, width: 18, height: 18 }} />
              <Text style={{ color: theme.colors.primary, fontWeight: 'bold', fontSize: 14 }}>Add Item</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.itemsList}>
            <ItemCard
              title="Double Cheese Burger"
              note="No Onions, Extra Pickle"
              price="$12.50"
              qty={2}
              theme={theme}
            />
            <ItemCard
              title="Large Truffle Fries"
              note="Standard"
              price="$6.40"
              qty={1}
              isDelete
              theme={theme}
            />
            <ItemCard
              title="Chocolate Milkshake"
              note="Adding New..."
              price="+$4.50"
              qty={1}
              isNew
              theme={theme}
            />
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: theme.colors.background, borderTopColor: '#234833' }]}>
        <View style={styles.totalsRow}>
          <View>
            <Text variant="labelSmall" style={{ color: '#9ca3af', fontWeight: '600' }}>Price Difference</Text>
            <Text variant="headlineSmall" style={{ color: theme.colors.primary, fontWeight: '900' }}>+$4.50</Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text variant="labelSmall" style={{ color: '#9ca3af', fontWeight: '600' }}>New Total</Text>
            <Text variant="titleLarge" style={{ color: theme.colors.text, fontWeight: 'bold' }}>$23.40</Text>
          </View>
        </View>

        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor="#102218"
          icon="bell-alert"
          style={styles.updateButton}
          contentStyle={{ height: 64 }}
          labelStyle={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}
          onPress={() => {}}
        >
          Update Order & Notify Kitchen
        </Button>
      </View>
    </SafeAreaView>
  );
}

const ItemCard = ({ title, note, price, qty, isDelete, isNew, theme }) => (
  <View style={[
    styles.itemCard,
    { backgroundColor: '#1a3525', borderColor: '#2a4e3a' },
    isNew && { backgroundColor: 'rgba(0, 232, 90, 0.05)', borderColor: 'rgba(0, 232, 90, 0.4)', borderStyle: 'dashed' }
  ]}>
    <View style={{ flex: 1 }}>
      <Text variant="titleMedium" style={[{ fontWeight: 'bold' }, isNew && { color: theme.colors.primary }]}>{title}</Text>
      <Text variant="bodySmall" style={{ color: isNew ? 'rgba(0, 232, 90, 0.7)' : '#92c9a9', marginTop: 2 }}>{note}</Text>
      <Text variant="titleMedium" style={{ color: theme.colors.primary, fontWeight: 'bold', marginTop: 4 }}>{price}</Text>
    </View>
    <View style={[styles.qtyControl, { backgroundColor: isNew ? 'rgba(0, 232, 90, 0.1)' : '#234833' }]}>
      <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: '#1a3525' }]}>
        <IconButton icon={isDelete ? 'delete' : 'minus'} size={20} iconColor={isDelete ? '#ef4444' : '#9ca3af'} style={{ margin: 0 }} />
      </TouchableOpacity>
      <Text style={{ width: 24, textAlign: 'center', fontWeight: 'bold', color: theme.colors.text }}>{qty}</Text>
      <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: theme.colors.primary }]}>
        <IconButton icon="plus" size={20} iconColor="#102218" style={{ margin: 0 }} />
      </TouchableOpacity>
    </View>
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
  scrollContent: {
    paddingBottom: 140,
  },
  statusSection: {
    padding: 16,
  },
  statusCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  itemsSection: {
    paddingHorizontal: 16,
  },
  itemsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  addButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  itemsList: {
    gap: 12,
  },
  itemCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 4,
    borderRadius: 12,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
  },
  totalsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingHorizontal: 8,
  },
  updateButton: {
    borderRadius: 16,
    shadowColor: '#00e85a',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  }
});
