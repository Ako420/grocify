import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import UserProfile from '@/components/insights/UserProfile';
import InsightsStatsSection from '@/components/insights/InsightsStatsSection';
import ClearCompletedButton from '@/components/insights/ClearCompletedButton';
import InsightsCategorySection from '@/components/insights/InsightsCategorySection';
import InsightsPrioritySection from '@/components/insights/InsightsPrioritySection';

const insignts = () => {
  return (
    <ScrollView className="flex-1 bg-background py-4"
    showsHorizontalScrollIndicator={false}
    contentContainerStyle ={{padding: 20, gap:14}}
    contentInsetAdjustmentBehavior="automatic"
    >
      <UserProfile />
      <InsightsStatsSection />
      <InsightsCategorySection />
      <InsightsPrioritySection />
      <ClearCompletedButton />
      <Text>insignts</Text>
    </ScrollView>
  )
}

export default insignts