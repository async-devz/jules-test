import React from 'react';
import { View, StyleSheet, ScrollView, TouchableOpacity, ImageBackground } from 'react-native';
import { Text, IconButton, useTheme, Avatar, Surface } from 'react-native-paper';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Defs, LinearGradient, Stop, Path, Circle } from 'react-native-svg';

export default function AdminDashboard({ navigation }) {
  const theme = useTheme();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme.colors.background }]} edges={['top', 'bottom']}>
      <View style={[styles.header, { backgroundColor: theme.colors.background }]}>
        <IconButton icon="menu" size={24} iconColor={theme.colors.text} style={{ backgroundColor: 'rgba(255,255,255,0.1)' }} onPress={() => {}} />
        <Text variant="titleLarge" style={{ fontWeight: 'bold', flex: 1, textAlign: 'center', marginRight: 48 }}>Dashboard</Text>
        <View style={styles.avatarWrapper}>
          <Avatar.Image size={40} source={{ uri: 'https://i.pravatar.cc/150?u=admin' }} style={{ borderWidth: 2, borderColor: theme.colors.primary }} />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <View style={styles.statsGrid}>
          <StatCard
            title="Today's Sales"
            icon="cash"
            iconColor={theme.colors.primary}
            value="$1,240.50"
            trend="+12%"
            trendUp
            theme={theme}
          />
          <StatCard
            title="Expenses"
            icon="wallet"
            iconColor="#f97316"
            value="$430.00"
            trend="-5%"
            trendUp={false}
            theme={theme}
          />
        </View>

        <Surface style={[styles.netProfitCard, { backgroundColor: '#234833' }]} elevation={1}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
            <Text variant="labelMedium" style={{ color: '#d1d5db', fontWeight: '500' }}>Net Profit</Text>
            <IconButton icon="currency-usd" size={20} iconColor={theme.colors.primary} style={{ margin: 0, padding: 0, width: 20, height: 20 }} />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 8 }}>
            <Text variant="headlineMedium" style={{ fontWeight: 'bold' }}>$810.50</Text>
            <View style={[styles.trendBadge, { backgroundColor: 'rgba(19, 236, 109, 0.1)' }]}>
              <IconButton icon="trending-up" size={14} iconColor={theme.colors.primary} style={{ margin: 0, padding: 0, width: 14, height: 14 }} />
              <Text variant="labelSmall" style={{ color: theme.colors.primary, fontWeight: 'bold', marginLeft: 4 }}>+15%</Text>
            </View>
          </View>
        </Surface>

        <View style={styles.sectionHeader}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Quick Actions</Text>
        </View>

        <View style={styles.actionsGrid}>
          <ActionCard
            image="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=200&auto=format&fit=crop"
            icon="receipt"
            title="View Orders"
            subtitle="12 Active"
            theme={theme}
            onPress={() => navigation.navigate('DetailedCashierDashboard')}
          />
          <ActionCard
            image="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=200&auto=format&fit=crop"
            icon="account-group"
            title="Manage Staff"
            subtitle="7 on shift"
            theme={theme}
          />
          <ActionCard
            image="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=200&auto=format&fit=crop"
            icon="file-document-outline"
            title="Expenses"
            subtitle="3 Pending"
            theme={theme}
            onPress={() => navigation.navigate('ExpenseManagement')}
          />
          <ActionCard
            image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=200&auto=format&fit=crop"
            icon="chart-bar"
            title="Reports"
            subtitle="Weekly Summary"
            theme={theme}
          />
        </View>

        <View style={[styles.sectionHeader, { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 16 }]}>
          <Text variant="titleLarge" style={{ fontWeight: 'bold' }}>Weekly Trends</Text>
          <TouchableOpacity><Text style={{ color: theme.colors.primary, fontWeight: '600' }}>View All</Text></TouchableOpacity>
        </View>

        <View style={styles.chartContainer}>
          <Surface style={[styles.chartCard, { backgroundColor: '#234833' }]} elevation={1}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <View style={{ width: 12, height: 12, borderRadius: 6, backgroundColor: theme.colors.primary }} />
                <Text variant="labelSmall" style={{ color: '#d1d5db' }}>Sales</Text>
              </View>
              <Text variant="labelSmall" style={{ color: '#9ca3af', fontWeight: '500' }}>Oct 24 - Oct 30</Text>
            </View>

            {/* Mock Chart Area */}
            <View style={styles.mockChart}>
              <View style={[styles.gridLine, { top: '25%' }]} />
              <View style={[styles.gridLine, { top: '50%' }]} />
              <View style={[styles.gridLine, { top: '75%' }]} />

              <Svg width="100%" height="100%" viewBox="0 0 100 50" preserveAspectRatio="none" style={{ position: 'absolute', bottom: 0 }}>
                <Defs>
                  <LinearGradient id="gradient" x1="0" x2="0" y1="0" y2="1">
                    <Stop offset="0%" stopColor="#13ec6d" stopOpacity="0.4" />
                    <Stop offset="100%" stopColor="#13ec6d" stopOpacity="0" />
                  </LinearGradient>
                </Defs>
                <Path d="M0,50 L0,35 L16.6,25 L33.2,30 L49.8,15 L66.4,20 L83,10 L100,5 L100,50 Z" fill="url(#gradient)" />
                <Path d="M0,35 L16.6,25 L33.2,30 L49.8,15 L66.4,20 L83,10 L100,5" fill="none" stroke="#13ec6d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <Circle cx="0" cy="35" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
                <Circle cx="16.6" cy="25" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
                <Circle cx="33.2" cy="30" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
                <Circle cx="49.8" cy="15" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
                <Circle cx="66.4" cy="20" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
                <Circle cx="83" cy="10" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
                <Circle cx="100" cy="5" r="1.5" fill="#234833" stroke="#13ec6d" strokeWidth="1" />
              </Svg>
            </View>

            <View style={styles.chartXAxis}>
              {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map(day => (
                <Text key={day} style={{ fontSize: 10, color: '#9ca3af', fontWeight: '500', textTransform: 'uppercase', letterSpacing: 1 }}>{day}</Text>
              ))}
            </View>
          </Surface>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const StatCard = ({ title, icon, iconColor, value, trend, trendUp, theme }) => (
  <Surface style={[styles.statCard, { backgroundColor: '#234833' }]} elevation={1}>
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <Text variant="labelMedium" style={{ color: '#d1d5db', fontWeight: '500' }}>{title}</Text>
      <IconButton icon={icon} size={20} iconColor={iconColor} style={{ margin: 0, padding: 0, width: 20, height: 20 }} />
    </View>
    <View style={{ marginTop: 8 }}>
      <Text variant="titleLarge" style={{ fontWeight: 'bold', fontSize: 24 }}>{value}</Text>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', gap: 4, marginTop: 4 }}>
      <IconButton icon={trendUp ? 'trending-up' : 'trending-down'} size={14} iconColor={theme.colors.primary} style={{ margin: 0, padding: 0, width: 14, height: 14 }} />
      <Text variant="labelSmall" style={{ color: theme.colors.primary, fontWeight: 'bold' }}>{trend}</Text>
      <Text variant="labelSmall" style={{ color: '#9ca3af' }}>vs yesterday</Text>
    </View>
  </Surface>
);

const ActionCard = ({ image, icon, title, subtitle, theme, onPress }) => (
  <TouchableOpacity style={[styles.actionCard, { backgroundColor: '#1a2e22' }]} onPress={onPress}>
    <ImageBackground source={{ uri: image }} style={styles.actionImage} imageStyle={{ borderRadius: 8 }}>
      <View style={styles.imageOverlay} />
      <View style={styles.iconWrapper}>
        <IconButton icon={icon} size={20} iconColor="#fff" style={{ margin: 0 }} />
      </View>
    </ImageBackground>
    <View style={{ paddingHorizontal: 4, paddingVertical: 8 }}>
      <Text variant="titleMedium" style={{ fontWeight: '600' }}>{title}</Text>
      <Text variant="labelSmall" style={{ color: '#92c9a9', fontWeight: '500', marginTop: 2 }}>{subtitle}</Text>
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
    paddingTop: 8,
    paddingBottom: 8,
  },
  avatarWrapper: {
    position: 'absolute',
    right: 16,
  },
  scrollContent: {
    paddingBottom: 40,
  },
  statsGrid: {
    flexDirection: 'row',
    gap: 16,
    padding: 16,
    paddingBottom: 8,
  },
  statCard: {
    flex: 1,
    padding: 20,
    borderRadius: 16,
  },
  netProfitCard: {
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 16,
  },
  trendBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 8,
  },
  sectionHeader: {
    paddingHorizontal: 16,
    paddingTop: 24,
    paddingBottom: 8,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
    paddingTop: 8,
    gap: 12,
  },
  actionCard: {
    width: '48%',
    padding: 12,
    borderRadius: 16,
  },
  actionImage: {
    width: '100%',
    aspectRatio: 16/10,
    borderRadius: 8,
    overflow: 'hidden',
    justifyContent: 'flex-end',
  },
  imageOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  iconWrapper: {
    padding: 8,
  },
  chartContainer: {
    padding: 16,
    paddingTop: 8,
    paddingBottom: 32,
  },
  chartCard: {
    borderRadius: 16,
    padding: 16,
    height: 192,
  },
  mockChart: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  gridLine: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: 1,
    backgroundColor: '#9ca3af',
    opacity: 0.2,
    borderStyle: 'dashed',
    borderWidth: 1,
  },
  chartXAxis: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  }
});
