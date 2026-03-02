import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, IconButton, useTheme, Appbar, Chip, Button, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CreateOrder({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: 'rgba(255,255,255,0.05)' }]}>
        <IconButton icon="close" size={24} iconColor={theme.colors.text} onPress={() => navigation.goBack()} style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>New Order</Text>
        <TouchableOpacity style={{ width: 48, alignItems: 'flex-end', paddingRight: 8 }}>
          <Text style={{ color: theme.colors.primary, fontWeight: 'bold' }}>Reset</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.categoryChips} style={{ flexGrow: 0 }}>
        <Chip selected style={[styles.chip, { backgroundColor: theme.colors.primary }]} textStyle={{ color: '#000', fontWeight: 'bold' }}>All</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Burgers</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Fries</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Drinks</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Desserts</Chip>
        <Chip style={[styles.chip, { backgroundColor: '#234833' }]} textStyle={{ color: theme.colors.text }}>Combos</Chip>
      </ScrollView>

      <ScrollView contentContainerStyle={styles.menuList} showsVerticalScrollIndicator={false}>
        <MenuItem
          image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop"
          title="Double Cheeseburger"
          price="$8.50"
          qty={2}
          theme={theme}
        />
        <MenuItem
          image="https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=200&auto=format&fit=crop"
          title="Large Fries"
          price="$3.50"
          qty={1}
          theme={theme}
        />
        <MenuItem
          image="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200&auto=format&fit=crop"
          title="Cola Zero"
          price="$2.00"
          qty={0}
          theme={theme}
        />
        <MenuItem
          image="https://images.unsplash.com/photo-1562967914-608f82629710?q=80&w=200&auto=format&fit=crop"
          title="Chicken Nuggets (6)"
          price="$4.50"
          qty={0}
          theme={theme}
        />
      </ScrollView>

      <Surface style={[styles.bottomPanel, { backgroundColor: '#1c2e24', borderTopColor: 'rgba(255,255,255,0.05)' }]} elevation={8}>
        <View style={styles.customerRow}>
          <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', gap: 12 }}>
            <View style={{ backgroundColor: 'rgba(19, 236, 109, 0.2)', padding: 8, borderRadius: 20 }}>
              <IconButton icon="account" size={20} iconColor={theme.colors.primary} style={{ margin: 0, padding: 0, width: 20, height: 20 }} />
            </View>
            <View>
              <Text variant="labelSmall" style={{ color: theme.colors.secondaryText, fontWeight: '500', textTransform: 'uppercase', letterSpacing: 1 }}>Customer</Text>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4 }}>
                <Text variant="titleSmall" style={{ fontWeight: 'bold' }}>Walk-in Customer</Text>
                <IconButton icon="chevron-down" size={18} iconColor={theme.colors.secondaryText} style={{ margin: 0, padding: 0, width: 18, height: 18 }} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={{ alignItems: 'flex-end' }}>
            <Text variant="labelSmall" style={{ color: theme.colors.secondaryText, fontWeight: '500', textTransform: 'uppercase', letterSpacing: 1 }}>Total Items</Text>
            <Text variant="titleSmall" style={{ fontWeight: 'bold' }}>3 Items</Text>
          </View>
        </View>

        <View style={styles.actionRow}>
          <View style={[styles.totalBox, { backgroundColor: theme.colors.background, borderColor: 'rgba(255,255,255,0.05)' }]}>
            <Text variant="labelSmall" style={{ color: theme.colors.secondaryText, fontWeight: 'bold', textTransform: 'uppercase' }}>Total</Text>
            <Text variant="headlineSmall" style={{ fontWeight: 'bold', letterSpacing: -0.5 }}>$20.50</Text>
          </View>
          <Button
            mode="contained"
            buttonColor={theme.colors.primary}
            textColor="#102218"
            icon="arrow-right"
            contentStyle={{ flexDirection: 'row-reverse', height: 64 }}
            labelStyle={{ fontSize: 18, fontWeight: '900' }}
            style={styles.chargeButton}
            onPress={() => navigation.navigate('PaymentBalance')}
          >
            Charge Order
          </Button>
        </View>
      </Surface>
    </SafeAreaView>
  );
}

const MenuItem = ({ image, title, price, qty, theme }) => (
  <View style={[styles.menuItem, { backgroundColor: '#1c2e24', borderColor: 'transparent' }]}>
    <View style={styles.itemLeft}>
      <ImageBackground source={{ uri: image }} style={styles.itemImage} imageStyle={{ borderRadius: 8 }} />
      <View style={{ flex: 1, marginLeft: 16 }}>
        <Text variant="titleMedium" style={{ fontWeight: 'bold', lineHeight: 20 }} numberOfLines={1}>{title}</Text>
        <Text variant="bodyMedium" style={{ color: theme.colors.secondaryText, marginTop: 4 }}>{price}</Text>
      </View>
    </View>
    <View style={[styles.qtyControl, { backgroundColor: '#234833' }]}>
      <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: 'transparent' }]}>
        <IconButton icon="minus" size={20} iconColor={qty > 0 ? theme.colors.text : theme.colors.secondaryText} style={{ margin: 0 }} />
      </TouchableOpacity>
      <Text style={{ width: 16, textAlign: 'center', fontWeight: 'bold', color: qty > 0 ? theme.colors.text : theme.colors.secondaryText }}>{qty}</Text>
      <TouchableOpacity style={[styles.qtyBtn, { backgroundColor: 'transparent' }]}>
        <IconButton icon="plus" size={20} iconColor={theme.colors.text} style={{ margin: 0 }} />
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
    padding: 16,
    paddingBottom: 8,
    borderBottomWidth: 1,
  },
  categoryChips: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    gap: 12,
  },
  chip: {
    borderRadius: 20,
    height: 36,
  },
  menuList: {
    paddingHorizontal: 16,
    gap: 8,
    paddingBottom: 160,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
  },
  itemLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    marginRight: 16,
  },
  itemImage: {
    width: 64,
    height: 64,
    backgroundColor: '#374151',
    borderRadius: 8,
  },
  qtyControl: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 8,
    padding: 4,
  },
  qtyBtn: {
    width: 32,
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  bottomPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 16,
    paddingBottom: 32,
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderTopWidth: 1,
  },
  customerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  actionRow: {
    flexDirection: 'row',
    gap: 16,
  },
  totalBox: {
    flex: 1,
    borderRadius: 12,
    padding: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
  },
  chargeButton: {
    flex: 2,
    borderRadius: 12,
    shadowColor: '#13ec6d',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
    elevation: 6,
  }
});
