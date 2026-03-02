import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, TextInput, IconButton, useTheme, Button } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CashierDashboard({ navigation }) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: '#234833' }]}>
        <IconButton icon="menu" size={28} iconColor={theme.colors.text} onPress={() => {}} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Cashier Dashboard</Text>
        <IconButton icon="bell" size={24} iconColor={theme.colors.text} onPress={() => {}} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.createBtnContainer}>
          <Button
            mode="contained"
            buttonColor={theme.colors.primary}
            textColor="#102218"
            icon="plus-circle"
            style={styles.createBtn}
            contentStyle={{ height: 64 }}
            labelStyle={{ fontSize: 18, fontWeight: 'bold', letterSpacing: 1 }}
            onPress={() => navigation.navigate('CreateOrder')}
          >
            Create New Order
          </Button>
        </View>

        <View style={styles.searchSection}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold', marginBottom: 12 }}>Customer Search</Text>
          <TextInput
            mode="flat"
            placeholder="Search by name or phone number"
            value={searchQuery}
            onChangeText={setSearchQuery}
            left={<TextInput.Icon icon="magnify" color="#92c9a9" />}
            style={[styles.searchInput, { backgroundColor: '#234833' }]}
            textColor={theme.colors.text}
            placeholderTextColor="#92c9a9"
            underlineColor="transparent"
            activeUnderlineColor="transparent"
            theme={{ roundness: 12 }}
          />
        </View>

        <View style={styles.recentSection}>
          <View style={styles.recentHeader}>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Recent Orders</Text>
            <TouchableOpacity><Text style={{ color: theme.colors.primary, fontWeight: '600' }}>View All</Text></TouchableOpacity>
          </View>

          <View style={styles.ordersList}>
            <OrderCard
              id="2045"
              time="Today, 10:23 AM"
              amount="$24.50"
              status="Paid"
              icon="hamburger"
              color={theme.colors.primary}
              theme={theme}
            />
            <OrderCard
              id="2044"
              time="Today, 10:15 AM"
              amount="$18.90"
              status="Pending"
              icon="food"
              color="#f97316"
              theme={theme}
              onPress={() => navigation.navigate('ViewOrderDetails')}
            />
            <OrderCard
              id="2043"
              time="Today, 09:45 AM"
              amount="$8.50"
              status="Paid"
              icon="ice-cream"
              color={theme.colors.primary}
              theme={theme}
            />
            <OrderCard
              id="2042"
              time="Today, 09:30 AM"
              amount="$12.00"
              status="Paid"
              icon="coffee"
              color={theme.colors.primary}
              theme={theme}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const OrderCard = ({ id, time, amount, status, icon, color, theme, onPress }) => (
  <TouchableOpacity style={[styles.orderCard, { backgroundColor: '#1a3525', borderColor: '#2a4e3a' }]} onPress={onPress}>
    <View style={styles.cardLeft}>
      <View style={[styles.iconContainer, { backgroundColor: `${color}1A` }]}>
        <IconButton icon={icon} size={24} iconColor={color} style={{ margin: 0 }} />
      </View>
      <View>
        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>Order #{id}</Text>
        <Text variant="bodySmall" style={{ color: '#9ca3af' }}>{time}</Text>
      </View>
    </View>
    <View style={styles.cardRight}>
      <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>{amount}</Text>
      <View style={[styles.statusBadge, { backgroundColor: `${color}33` }]}>
        <Text variant="labelSmall" style={{ color: color, fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>{status}</Text>
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
    padding: 8,
    borderBottomWidth: 1,
  },
  scrollContent: {
    padding: 16,
    paddingBottom: 32,
    gap: 24,
  },
  createBtnContainer: {
    width: '100%',
  },
  createBtn: {
    borderRadius: 12,
    shadowColor: '#13ec6d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 4,
  },
  searchSection: {
    width: '100%',
  },
  searchInput: {
    height: 56,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  recentSection: {
    flex: 1,
  },
  recentHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  ordersList: {
    gap: 12,
  },
  orderCard: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderRadius: 12,
    borderWidth: 1,
  },
  cardLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  iconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardRight: {
    alignItems: 'flex-end',
    gap: 4,
  },
  statusBadge: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 12,
  }
});
