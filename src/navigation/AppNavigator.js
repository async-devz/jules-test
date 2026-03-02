import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import CustomerList from '../screens/CustomerList';
import CustomerProfile from '../screens/CustomerProfile';
import KitchenDisplay from '../screens/KitchenDisplay';
import StaffLogin from '../screens/StaffLogin';
import ExpenseManagement from '../screens/ExpenseManagement';
import ModifyOrder from '../screens/ModifyOrder';
import CashierDashboard from '../screens/CashierDashboard';
import RecordPayment from '../screens/RecordPayment';
import CreateOrder from '../screens/CreateOrder';
import DetailedCashierDashboard from '../screens/DetailedCashierDashboard';
import ViewOrderDetails from '../screens/ViewOrderDetails';
import AdminDashboard from '../screens/AdminDashboard';
import KitchenOrderDetails from '../screens/KitchenOrderDetails';
import PaymentBalance from '../screens/PaymentBalance';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator
      initialRouteName="StaffLogin"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="StaffLogin" component={StaffLogin} />
      <Stack.Screen name="CustomerList" component={CustomerList} />
      <Stack.Screen name="CustomerProfile" component={CustomerProfile} />
      <Stack.Screen name="KitchenDisplay" component={KitchenDisplay} />
      <Stack.Screen name="ExpenseManagement" component={ExpenseManagement} />
      <Stack.Screen name="ModifyOrder" component={ModifyOrder} />
      <Stack.Screen name="CashierDashboard" component={CashierDashboard} />
      <Stack.Screen name="RecordPayment" component={RecordPayment} />
      <Stack.Screen name="CreateOrder" component={CreateOrder} />
      <Stack.Screen name="DetailedCashierDashboard" component={DetailedCashierDashboard} />
      <Stack.Screen name="ViewOrderDetails" component={ViewOrderDetails} />
      <Stack.Screen name="AdminDashboard" component={AdminDashboard} />
      <Stack.Screen name="KitchenOrderDetails" component={KitchenOrderDetails} />
      <Stack.Screen name="PaymentBalance" component={PaymentBalance} />
    </Stack.Navigator>
  );
}
