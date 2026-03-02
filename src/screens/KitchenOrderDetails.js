import React, { useState } from 'react';
import { View, StyleSheet, ScrollView, ImageBackground } from 'react-native';
import { Text, IconButton, useTheme, Surface, Button, Checkbox } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function KitchenOrderDetails({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { borderBottomColor: '#1e3a2d' }]}>
        <IconButton icon="arrow-left" size={24} iconColor={theme.colors.text} onPress={() => navigation.goBack()} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Kitchen Display</Text>
        <View style={{ width: 48 }} />
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.orderHeader}>
          <Text variant="displaySmall" style={{ fontWeight: '900', textAlign: 'center' }}>Order #2045</Text>
          <View style={[styles.timeBadge, { backgroundColor: '#1e3a2d' }]}>
            <IconButton icon="clock-outline" size={18} iconColor="#92c9a9" style={{ margin: 0, padding: 0, width: 18, height: 18 }} />
            <Text variant="labelMedium" style={{ color: '#92c9a9', fontWeight: '500', marginLeft: 4 }}>12:34 PM • <Text style={{ color: theme.colors.primary }}>Dine-in</Text></Text>
          </View>
        </View>

        <View style={[styles.divider, { backgroundColor: '#1e3a2d' }]} />

        <View style={styles.itemsList}>
          <KitchenItem
            image="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=200&auto=format&fit=crop"
            title="2x Double Cheeseburger"
            subtitle="Combo #1 • Large Fries"
            tags={[
              { label: 'No Onions', color: '#ef4444', bg: 'rgba(239, 68, 68, 0.2)' },
              { label: 'Extra Pickles', color: theme.colors.primary, bg: 'rgba(19, 236, 109, 0.2)' }
            ]}
            theme={theme}
          />
          <KitchenItem
            image="https://images.unsplash.com/photo-1576107232684-1279f3908594?q=80&w=200&auto=format&fit=crop"
            title="1x Large Fries"
            theme={theme}
          />
          <KitchenItem
            image="https://images.unsplash.com/photo-1622483767028-3f66f32aef97?q=80&w=200&auto=format&fit=crop"
            title="1x Vanilla Shake"
            subtitle="No Whipped Cream"
            theme={theme}
          />
          <KitchenItem
            image="https://images.unsplash.com/photo-1639024471283-03518883512d?q=80&w=200&auto=format&fit=crop"
            title="1x Onion Rings (6pc)"
            theme={theme}
          />
        </View>

        <View style={styles.notesSection}>
          <Text variant="labelSmall" style={{ color: '#fff', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: 1, opacity: 0.6, marginBottom: 8 }}>Order Note</Text>
          <View style={[styles.noteBox, { backgroundColor: '#162b21', borderLeftColor: '#eab308' }]}>
            <Text variant="bodyMedium" style={{ color: '#d1d5db', lineHeight: 22 }}>
              Customer requested extra napkins and sauces on the side.
            </Text>
          </View>
        </View>
      </ScrollView>

      <View style={[styles.bottomBar, { backgroundColor: theme.colors.background, borderTopColor: '#1e3a2d' }]}>
        <Button
          mode="outlined"
          textColor={theme.colors.primary}
          icon="skillet"
          style={[styles.actionBtn, { borderColor: '#326748', borderWidth: 1 }]}
          contentStyle={{ height: 56 }}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          onPress={() => {}}
        >
          Start Preparing
        </Button>
        <Button
          mode="contained"
          buttonColor={theme.colors.primary}
          textColor="#0b1d12"
          icon="check-circle"
          style={styles.actionBtnPrimary}
          contentStyle={{ height: 56 }}
          labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
          onPress={() => navigation.goBack()}
        >
          Mark as Ready
        </Button>
      </View>
    </SafeAreaView>
  );
}

const KitchenItem = ({ image, title, subtitle, tags, theme }) => {
  const [checked, setChecked] = useState(false);

  return (
    <Surface style={[styles.kitchenItem, { backgroundColor: '#162b21' }, checked && { opacity: 0.5, borderColor: theme.colors.primary, borderWidth: 1 }]} elevation={1}>
      <View style={styles.itemLeft}>
        <ImageBackground source={{ uri: image }} style={styles.itemImage} imageStyle={{ borderRadius: 8 }} />
        <View style={styles.itemDetails}>
          <Text variant="titleMedium" style={[{ fontWeight: 'bold', fontSize: 16 }, checked && { textDecorationLine: 'line-through' }]}>{title}</Text>
          {subtitle && <Text variant="bodySmall" style={{ color: '#92c9a9', marginTop: 4 }}>{subtitle}</Text>}
          {tags && (
            <View style={styles.tagsContainer}>
              {tags.map((tag, i) => (
                <View key={i} style={[styles.tag, { backgroundColor: tag.bg, borderColor: tag.color }]}>
                  <Text variant="labelSmall" style={{ color: tag.color, fontWeight: 'bold', fontSize: 10 }}>{tag.label}</Text>
                </View>
              ))}
            </View>
          )}
        </View>
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox.Android
          status={checked ? 'checked' : 'unchecked'}
          onPress={() => setChecked(!checked)}
          color={theme.colors.primary}
          uncheckedColor="#326748"
        />
      </View>
    </Surface>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 12,
    borderBottomWidth: 1,
  },
  scrollContent: {
    paddingBottom: 120,
    maxWidth: 480,
    width: '100%',
    alignSelf: 'center',
  },
  orderHeader: {
    alignItems: 'center',
    paddingVertical: 24,
    paddingHorizontal: 16,
  },
  timeBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },
  divider: {
    height: 1,
    width: '100%',
    marginVertical: 8,
  },
  itemsList: {
    paddingHorizontal: 16,
    paddingTop: 8,
    gap: 12,
  },
  kitchenItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: 'transparent',
  },
  itemLeft: {
    flexDirection: 'row',
    flex: 1,
    gap: 16,
  },
  itemImage: {
    width: 64,
    height: 64,
    borderRadius: 8,
    backgroundColor: '#374151',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.05)',
  },
  itemDetails: {
    flex: 1,
    justifyContent: 'center',
  },
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 4,
    borderWidth: 1,
  },
  checkboxContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 8,
  },
  notesSection: {
    paddingHorizontal: 16,
    marginTop: 24,
  },
  noteBox: {
    padding: 16,
    borderRadius: 16,
    borderLeftWidth: 4,
  },
  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    padding: 16,
    paddingBottom: 32,
    gap: 16,
    borderTopWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -10 },
    shadowOpacity: 0.3,
    shadowRadius: 40,
    elevation: 20,
  },
  actionBtn: {
    flex: 1,
    borderRadius: 12,
  },
  actionBtnPrimary: {
    flex: 1,
    borderRadius: 12,
    shadowColor: '#13ec6d',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.3,
    shadowRadius: 15,
    elevation: 8,
  }
});
