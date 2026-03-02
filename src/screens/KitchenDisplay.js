import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, IconButton, useTheme, Chip, Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KitchenDisplay({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: 'rgba(255,255,255,0.1)' }]}>
        <IconButton icon="menu" size={24} iconColor={theme.colors.text} onPress={() => {}} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Kitchen Display</Text>
        <IconButton icon="history" size={24} iconColor={theme.colors.text} onPress={() => {}} />
      </View>

      <View style={styles.statsRow}>
        <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>Incoming{'\n'}Orders</Text>
        <View style={{ alignItems: 'flex-end' }}>
          <Text variant="labelMedium" style={{ color: theme.colors.secondaryText }}>Avg Time</Text>
          <Text variant="titleLarge" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>4m 12s</Text>
        </View>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.filterChips} style={{ flexGrow: 0 }}>
        <Chip selected style={[styles.chip, { backgroundColor: theme.colors.primary }]} textStyle={{ color: '#000', fontWeight: 'bold' }}>All</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>New (4)</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Preparing (2)</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Ready</Chip>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.ordersList} showsVerticalScrollIndicator={false}>
        <OrderCard
          orderNumber="#205"
          status="NEW"
          statusColor="#3b82f6"
          time="1 min ago"
          items={[
            { id: 1, qty: 1, name: 'Double Smash Burger', note: '+ Extra Cheese, No Onion' },
            { id: 2, qty: 2, name: 'Large Fries' },
            { id: 3, qty: 2, name: 'Vanilla Shake' }
          ]}
          actionText="Start Preparing"
          actionIcon="play"
          theme={theme}
        />
        <OrderCard
          orderNumber="#204"
          status="PREP"
          statusColor="#f97316"
          time="4 mins ago"
          items={[
            { id: 1, qty: 1, name: 'Spicy Chicken Sandwich' },
            { id: 2, qty: 1, name: 'Onion Rings', done: true }
          ]}
          actionText="Mark Ready"
          actionIcon="check-circle"
          actionColor={theme.colors.primary}
          theme={theme}
          onPress={() => navigation.navigate('KitchenOrderDetails')}
        />
        <OrderCard
          orderNumber="#203"
          status="LATE"
          statusColor="#ef4444"
          time="12 mins"
          isLate
          items={[
            { id: 1, qty: 4, name: 'Family Feast Combo', subItems: ['4 Burgers', '4 Fries', '4 Drinks'] }
          ]}
          actionText="Mark Ready"
          actionIcon="check-circle"
          actionColor={theme.colors.primary}
          theme={theme}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const OrderCard = ({ orderNumber, status, statusColor, time, items, actionText, actionIcon, actionColor, isLate, theme, onPress }) => (
  <Surface style={[styles.card, { backgroundColor: '#162b20', borderLeftColor: statusColor, borderLeftWidth: 4 }]} elevation={2}>
    <TouchableOpacity onPress={onPress} activeOpacity={0.8}>
      <View style={[styles.cardHeader, { backgroundColor: `${statusColor}1A`, borderBottomColor: 'rgba(255,255,255,0.05)' }]}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Text variant="headlineSmall" style={{ fontWeight: 'bold' }}>{orderNumber}</Text>
          <View style={[styles.statusBadge, { backgroundColor: statusColor }]}>
            <Text variant="labelSmall" style={{ color: '#fff', fontWeight: 'bold' }}>{status}</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
          <IconButton icon={isLate ? 'alert' : 'clock-outline'} size={16} iconColor={statusColor} style={{ margin: 0, padding: 0, width: 16, height: 16 }} />
          <Text variant="labelLarge" style={{ color: statusColor, fontWeight: 'bold' }}>{time}</Text>
        </View>
      </View>

      <View style={styles.cardItems}>
        {items.map((item, idx) => (
          <View key={idx} style={[styles.itemRow, item.done && { opacity: 0.5 }]}>
            <View style={[styles.qtyBox, { backgroundColor: item.done ? 'rgba(34, 197, 94, 0.3)' : 'rgba(255,255,255,0.1)' }]}>
              {item.done ? (
                <IconButton icon="check" size={16} iconColor="#4ade80" style={{ margin: 0, padding: 0 }} />
              ) : (
                <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.qty}</Text>
              )}
            </View>
            <View style={{ flex: 1 }}>
              <Text variant="titleMedium" style={[{ fontWeight: 'bold', lineHeight: 22 }, item.done && { textDecorationLine: 'line-through' }]}>{item.name}</Text>
              {item.note && <Text variant="bodySmall" style={{ color: theme.colors.secondaryText, marginTop: 2 }}>{item.note}</Text>}
              {item.subItems && (
                <View style={{ marginTop: 4 }}>
                  {item.subItems.map((sub, i) => (
                    <View key={i} style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                      <View style={{ width: 4, height: 4, borderRadius: 2, backgroundColor: '#9ca3af' }} />
                      <Text variant="bodySmall" style={{ color: theme.colors.secondaryText }}>{sub}</Text>
                    </View>
                  ))}
                </View>
              )}
            </View>
          </View>
        ))}
      </View>
    </TouchableOpacity>

    <View style={[styles.cardAction, { backgroundColor: 'rgba(0,0,0,0.2)' }]}>
      <Button
        mode="contained"
        icon={actionIcon}
        buttonColor={actionColor || '#2563eb'}
        textColor={actionColor === theme.colors.primary ? '#000' : '#fff'}
        style={{ borderRadius: 8 }}
        labelStyle={{ fontWeight: 'bold', fontSize: 16 }}
        onPress={onPress}
      >
        {actionText}
      </Button>
    </View>
  </Surface>
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
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  filterChips: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  chip: {
    borderRadius: 20,
    height: 40,
  },
  ordersList: {
    padding: 16,
    gap: 16,
    paddingBottom: 32,
  },
  card: {
    borderRadius: 12,
    overflow: 'hidden',
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    paddingBottom: 12,
    borderBottomWidth: 1,
  },
  statusBadge: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  cardItems: {
    padding: 16,
    gap: 12,
  },
  itemRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 16,
  },
  qtyBox: {
    width: 32,
    height: 32,
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardAction: {
    padding: 8,
  }
});
