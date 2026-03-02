import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Text, Avatar, IconButton, useTheme, Appbar, Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CustomerProfile({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Customer Profile" titleStyle={{ fontWeight: 'bold', textAlign: 'center' }} />
        <Button textColor={theme.colors.primary} labelStyle={{ fontWeight: 'bold' }}>Edit</Button>
      </Appbar.Header>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.profileHeader}>
          <View style={styles.avatarContainer}>
            <Avatar.Image size={112} source={{ uri: 'https://i.pravatar.cc/150?u=2' }} style={{ borderWidth: 4, borderColor: '#234833' }} />
            <View style={[styles.starBadge, { backgroundColor: theme.colors.primary, borderColor: theme.colors.background }]}>
              <IconButton icon="star" iconColor={theme.colors.background} size={16} style={{ margin: 0 }} />
            </View>
          </View>
          <Text variant="headlineSmall" style={{ fontWeight: 'bold', marginTop: 16 }}>Sarah Jenkins</Text>
          <View style={styles.phoneRow}>
            <IconButton icon="phone" size={18} iconColor={theme.colors.secondaryText} style={styles.phoneIcon} />
            <Text variant="titleMedium" style={{ color: theme.colors.secondaryText }}>+1 (555) 123-4567</Text>
          </View>
        </View>

        <View style={styles.statsContainer}>
          <Surface style={[styles.statsCard, { backgroundColor: theme.colors.surface, borderColor: '#326748', borderWidth: 1 }]} elevation={1}>
            <Text variant="labelMedium" style={{ color: theme.colors.secondaryText, textTransform: 'uppercase', letterSpacing: 1 }}>Outstanding Balance</Text>
            <Text variant="displaySmall" style={{ color: theme.colors.primary, fontWeight: 'bold', marginTop: 8 }}>$42.50</Text>
            <View style={[styles.overdueBadge, { backgroundColor: 'rgba(239, 68, 68, 0.2)' }]}>
              <View style={[styles.dot, { backgroundColor: theme.colors.error }]} />
              <Text variant="labelSmall" style={{ color: theme.colors.error, fontWeight: 'bold', marginLeft: 4 }}>Overdue</Text>
            </View>
          </Surface>
        </View>

        <View style={styles.historySection}>
          <View style={styles.historyHeader}>
            <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Order History</Text>
            <TouchableOpacity><Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>See All</Text></TouchableOpacity>
          </View>

          <HistoryItem
            icon="receipt"
            amount="$18.50"
            date="Oct 24, 2023 • Order #4023"
            status="Paid"
            statusColor="#22c55e"
            theme={theme}
          />
          <HistoryItem
            icon="hamburger"
            amount="$24.00"
            date="Oct 22, 2023 • Order #4021"
            status="Pending"
            statusColor="#eab308"
            theme={theme}
          />
          <HistoryItem
            icon="close"
            amount="$12.50"
            date="Oct 15, 2023 • Order #3998"
            status="Cancelled"
            statusColor="#6b7280"
            theme={theme}
          />
          <HistoryItem
            icon="receipt"
            amount="$35.20"
            date="Sep 28, 2023 • Order #3802"
            status="Paid"
            statusColor="#22c55e"
            theme={theme}
          />
        </View>
      </ScrollView>

      <View style={[styles.bottomActions, { backgroundColor: theme.colors.background, borderTopColor: 'rgba(255,255,255,0.1)' }]}>
        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor="#000"
          style={styles.actionButton}
          icon="currency-usd"
          onPress={() => navigation.navigate('RecordPayment')}
        >
          Add Payment
        </Button>
        <Button
          mode="outlined"
          textColor={theme.colors.primary}
          style={[styles.actionButton, { borderColor: '#326748', backgroundColor: theme.colors.surface }]}
          icon="chat"
          onPress={() => {}}
        >
          Send WhatsApp Reminder
        </Button>
      </View>
    </SafeAreaView>
  );
}

const HistoryItem = ({ icon, amount, date, status, statusColor, theme }) => (
  <TouchableOpacity style={[styles.historyItem, { borderBottomColor: 'rgba(255,255,255,0.05)' }]}>
    <View style={[styles.historyIcon, { backgroundColor: '#234833' }]}>
      <IconButton icon={icon} size={24} iconColor={theme.colors.text} style={{ margin: 0 }} />
    </View>
    <View style={styles.historyContent}>
      <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{amount}</Text>
      <Text variant="bodyMedium" style={{ color: theme.colors.secondaryText }}>{date}</Text>
    </View>
    <View style={[styles.statusBadge, { backgroundColor: `${statusColor}33` }]}>
      <View style={[styles.dot, { backgroundColor: statusColor }]} />
      <Text variant="labelSmall" style={{ color: statusColor, fontWeight: 'bold', marginLeft: 6 }}>{status}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 160,
  },
  profileHeader: {
    alignItems: 'center',
    padding: 16,
  },
  avatarContainer: {
    position: 'relative',
  },
  starBadge: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderRadius: 20,
    borderWidth: 4,
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  phoneIcon: {
    margin: 0,
    width: 32,
  },
  statsContainer: {
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  statsCard: {
    borderRadius: 16,
    padding: 20,
    alignItems: 'center',
  },
  overdueBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginTop: 8,
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
  historySection: {
    paddingTop: 24,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingBottom: 12,
  },
  historyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  historyIcon: {
    width: 48,
    height: 48,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
  },
  historyContent: {
    flex: 1,
    justifyContent: 'center',
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
  },
  bottomActions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    borderTopWidth: 1,
  },
  actionButton: {
    borderRadius: 12,
    marginBottom: 12,
    height: 48,
    justifyContent: 'center',
  }
});
