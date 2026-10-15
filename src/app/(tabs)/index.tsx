import CompletedItems from "@/components/list/CompletedItems";
import ListHeroCard from "@/components/list/ListHeroCard";
import PendingItemCard from "@/components/list/PendingItemCard";
import TabScreenBackground from "@/components/TabScreenBackeground";
import { useGroceryStore } from "@/store/grocery-store";
import { FlatList, Text, View } from "react-native";

const LIstScreen = () => {
  const { items } = useGroceryStore();

  const pendingItems = items.filter((items) => !items.purchased);

  return (
    <FlatList
      className="flex-1 bg-background"
      data={pendingItems}
      keyExtractor={(items) => items.id}
      renderItem={({ item }) => <PendingItemCard item={item} />}
      contentContainerStyle={{ padding: 10, gap: 14 }}
      contentInsetAdjustmentBehavior="automatic"
      ListHeaderComponent={
        <View style={{ gap: 14 }}>
          <TabScreenBackground />
          <ListHeroCard />
          <View className="flex-row items-center justify-between px-1">
            <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
              Shopping items
            </Text>
            <Text className="text-sm text-muted-foreground">
              {pendingItems.length} active
            </Text>
          </View>
        </View>
      }
      ListFooterComponent={<CompletedItems />}
      ListEmptyComponent={<Text>No Item yet</Text>}
    />
  );
};
export default LIstScreen;

//if we using .map

{
  /* <ScrollView
      className="flex-1 bg-background py-4"
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ padding: 20, gap: 14 }}
    >
      <TabScreenBackground />
      <ListHeroCard />

      <View className="flex-row items-center justify-between px-1">
        <Text className="text-sm font-semibold uppercase tracking-[1px] text-muted-foreground">
          Shopping items
        </Text>
        <Text className="text-sm text-muted-foreground">
          {pendingItems.length} active
        </Text>
      </View>
      {pendingItems.map((item) => (
        <PendingItemCard key={item.id} item={item} />
      ))}

      <CompletedItems />
    </ScrollView>
  );
}; */
}
