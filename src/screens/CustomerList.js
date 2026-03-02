import React, { useState } from 'react';
import { View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Text, TextInput, IconButton, Avatar, FAB, useTheme, Appbar, Chip } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

const CUSTOMERS = [
  { id: '1', name: 'Alex Richardson', phone: '555-0128', balance: 0, status: 'No dues', image: 'https://i.pravatar.cc/150?u=1' },
  { id: '2', name: 'Sarah Miller', phone: '555-0192', balance: -24.50, status: 'Pending', image: 'https://i.pravatar.cc/150?u=2', hasDebt: true },
  { id: '3', name: 'John Doe', phone: '555-0101', balance: 15.00, status: 'Credit', initials: 'JD' },
  { id: '4', name: 'Michael Chen', phone: '555-0245', balance: -125.00, status: 'Overdue', image: 'https://i.pravatar.cc/150?u=4', hasDebt: true },
  { id: '5', name: 'Emily Davis', phone: '555-0312', balance: 0, status: '', image: 'https://i.pravatar.cc/150?u=5' },
  { id: '6', name: 'Robert Wilson', phone: '555-0456', balance: 5.50, status: 'Credit', initials: 'RW' },
];

export default function CustomerList({ navigation }) {
  const theme = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');

  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={[
        styles.listItem,
        { backgroundColor: item.hasDebt ? 'rgba(239, 68, 68, 0.1)' : 'transparent', borderBottomColor: theme.colors.surfaceVariant }
      ]}
      onPress={() => navigation.navigate('CustomerProfile')}
    >
      {item.image ? (
        <Avatar.Image size={48} source={{ uri: item.image }} style={item.hasDebt && { borderWidth: 2, borderColor: '#7f1d1d' }} />
      ) : (
        <Avatar.Text size={48} label={item.initials} style={{ backgroundColor: 'rgba(19, 236, 109, 0.2)' }} color={theme.colors.primary} />
      )}
      <View style={styles.listContent}>
        <Text variant="titleMedium" style={{ fontWeight: 'bold' }}>{item.name}</Text>
        <View style={styles.phoneRow}>
          <IconButton icon="phone" size={16} iconColor={theme.colors.secondaryText} style={styles.phoneIcon} />
          <Text variant="bodySmall" style={{ color: theme.colors.secondaryText }}>{item.phone}</Text>
        </View>
      </View>
      <View style={styles.listRight}>
        <Text
          variant="titleMedium"
          style={{
            fontWeight: 'bold',
            color: item.hasDebt ? theme.colors.error : theme.colors.text
          }}
        >
          {item.balance < 0 ? `-$${Math.abs(item.balance).toFixed(2)}` : `$${item.balance.toFixed(2)}`}
        </Text>
        {!!item.status && (
          <Text
            variant="labelSmall"
            style={{ color: item.hasDebt ? theme.colors.error : item.balance > 0 ? theme.colors.primary : theme.colors.secondaryText }}
          >
            {item.status}
          </Text>
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <Appbar.Header style={{ backgroundColor: theme.colors.background }}>
        <Appbar.BackAction onPress={() => navigation.goBack()} />
        <Appbar.Content title="Customers" titleStyle={{ fontWeight: 'bold', textAlign: 'center', marginRight: 48 }} />
      </Appbar.Header>

      <View style={styles.searchContainer}>
        <TextInput
          placeholder="Search by name or phone"
          value={searchQuery}
          onChangeText={setSearchQuery}
          mode="flat"
          left={<TextInput.Icon icon="magnify" color={theme.colors.secondaryText} />}
          style={[styles.searchInput, { backgroundColor: theme.colors.surface }]}
          textColor={theme.colors.text}
          placeholderTextColor="rgba(146, 201, 169, 0.7)"
          underlineColor="transparent"
          activeUnderlineColor="transparent"
          theme={{ roundness: 12 }}
        />
      </View>

      <View style={styles.chipsContainer}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={['All', 'Pending Balance', 'VIP', 'Regular']}
          keyExtractor={(item) => item}
          contentContainerStyle={styles.chipsContent}
          renderItem={({ item }) => (
            <Chip
              selected={activeFilter === item}
              onPress={() => setActiveFilter(item)}
              style={[
                styles.chip,
                { backgroundColor: activeFilter === item ? theme.colors.primary : theme.colors.surface }
              ]}
              textStyle={{
                color: activeFilter === item ? '#000' : theme.colors.text,
                fontWeight: activeFilter === item ? 'bold' : '500'
              }}
            >
              {item}
            </Chip>
          )}
        />
      </View>

      <FlatList
        data={CUSTOMERS}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        contentContainerStyle={styles.listContainer}
      />

      <FAB
        icon="plus"
        style={[styles.fab, { backgroundColor: theme.colors.primary }]}
        color="#000"
        onPress={() => {}}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  searchInput: {
    height: 48,
    borderRadius: 12,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  chipsContainer: {
    paddingBottom: 16,
  },
  chipsContent: {
    paddingHorizontal: 16,
    gap: 8,
  },
  chip: {
    borderRadius: 20,
    height: 36,
  },
  listContainer: {
    paddingBottom: 80,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
  },
  listContent: {
    flex: 1,
    marginLeft: 16,
    justifyContent: 'center',
  },
  phoneRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
    marginLeft: -10,
  },
  phoneIcon: {
    margin: 0,
    padding: 0,
    width: 24,
    height: 24,
  },
  listRight: {
    alignItems: 'flex-end',
  },
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 0,
    borderRadius: 28,
  },
});
