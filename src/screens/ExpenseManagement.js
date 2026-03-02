import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, IconButton, useTheme, Appbar, FAB, Surface, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function ExpenseManagement({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Expenses" titleStyle={{ fontWeight: 'bold', textAlign: 'center' }} />
        <Appbar.Action icon="magnify" onPress={() => {}} />
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.summaryContainer}>
          <Surface style={[styles.summaryCard, { backgroundColor: '#1c3829' }]} elevation={4}>
            <View style={styles.blob} />
            <Text variant="labelMedium" style={{ color: '#92c9a9', fontWeight: '500' }}>Total Expenses (Oct)</Text>
            <Text variant="displaySmall" style={{ color: '#fff', fontWeight: 'bold', marginVertical: 8 }}>-$12,450.00</Text>
            <View style={styles.trendBadge}>
              <IconButton icon="trending-up" size={14} iconColor={theme.colors.primary} style={{ margin: 0, padding: 0, width: 14, height: 14 }} />
              <Text variant="labelSmall" style={{ color: theme.colors.primary, fontWeight: 'bold', marginLeft: 4 }}>+2.4% vs last month</Text>
            </View>
          </Surface>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsContainer}>
          <Chip selected style={[styles.chip, { backgroundColor: theme.colors.primary }]} textStyle={{ color: '#0e1f15', fontWeight: 'bold' }}>All</Chip>
          <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Materials</Chip>
          <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Salaries</Chip>
          <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Utilities</Chip>
          <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Marketing</Chip>
        </ScrollView>

        <View style={styles.listSection}>
          <View style={styles.sectionHeader}>
            <Text variant="labelMedium" style={{ color: '#92c9a9', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>Today</Text>
          </View>
          <ExpenseItem icon="package-variant" title="Potatoes (50kg)" category="Materials • Cash" amount="-$45.00" time="10:42 AM" theme={theme} />
          <ExpenseItem icon="truck" title="Delivery Fee" category="Logistics • Card ****4291" amount="-$12.50" time="09:15 AM" theme={theme} />
        </View>

        <View style={styles.listSection}>
          <View style={styles.sectionHeader}>
            <Text variant="labelMedium" style={{ color: '#92c9a9', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1 }}>Yesterday</Text>
          </View>
          <ExpenseItem icon="account-group" title="Staff Wages - Week 42" category="Salaries • Transfer" amount="-$1,200.00" time="4:00 PM" theme={theme} />
          <ExpenseItem icon="water" title="Water Bill (Q3)" category="Utilities • Direct Debit" amount="-$185.20" time="1:30 PM" theme={theme} />
          <ExpenseItem icon="tools" title="Fryer Maintenance" category="Repairs • Invoice #992" amount="-$450.00" time="10:00 AM" theme={theme} />
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>

      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        color="#0e1f15"
        onPress={() => {}}
      />

      <View style={[styles.bottomNav, { backgroundColor: '#1c3829', borderTopColor: '#234833' }]}>
        <NavItem icon="home" label="Home" theme={theme} />
        <NavItem icon="receipt" label="Orders" theme={theme} />
        <View style={{ width: 48 }} />
        <NavItem icon="wallet" label="Expenses" active theme={theme} />
        <NavItem icon="cog" label="Settings" theme={theme} />
      </View>
    </SafeAreaView>
  );
}

const ExpenseItem = ({ icon, title, category, amount, time, theme }) => (
  <TouchableOpacity style={[styles.expenseItem, { borderBottomColor: 'rgba(35,72,51,0.5)' }]}>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
      <View style={[styles.iconBox, { backgroundColor: '#234833' }]}>
        <IconButton icon={icon} size={24} iconColor="#fff" style={{ margin: 0 }} />
      </View>
      <View>
        <Text variant="titleMedium" style={{ fontWeight: '600' }}>{title}</Text>
        <Text variant="bodySmall" style={{ color: '#92c9a9' }}>{category}</Text>
      </View>
    </View>
    <View style={{ alignItems: 'flex-end' }}>
      <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{amount}</Text>
      <Text variant="labelSmall" style={{ color: '#92c9a9' }}>{time}</Text>
    </View>
  </TouchableOpacity>
);

const NavItem = ({ icon, label, active, theme }) => (
  <TouchableOpacity style={[styles.navItem, active ? { opacity: 1 } : { opacity: 0.6 }]}>
    <IconButton icon={icon} size={24} iconColor={active ? theme.colors.primary : theme.colors.text} style={{ margin: 0 }} />
    <Text style={{ fontSize: 10, fontWeight: active ? 'bold' : '500', color: active ? theme.colors.primary : theme.colors.text }}>{label}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
  },
  summaryContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  summaryCard: {
    borderRadius: 16,
    padding: 24,
    alignItems: 'center',
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    top: -40,
    right: -40,
    width: 128,
    height: 128,
    borderRadius: 64,
    backgroundColor: 'rgba(19, 236, 109, 0.2)',
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(19, 236, 109, 0.2)',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 16,
    marginTop: 8,
  },
  chipsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  chip: {
    borderRadius: 20,
    height: 36,
  },
  listSection: {
    marginTop: 8,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  expenseItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    minHeight: 72,
    borderBottomWidth: 1,
  },
  iconBox: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fab: {
    position: 'absolute',
    bottom: 80,
    right: 16,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomNav: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderTopWidth: 1,
  },
  navItem: {
    alignItems: 'center',
    justifyContent: 'center',
  }
});
