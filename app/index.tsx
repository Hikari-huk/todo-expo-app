import { StyleSheet, View, Text } from "react-native";
import { useThemeColor } from "@/hooks/use-theme-color";
import TodoTable from "@/components/TodoTable";
import TodoForm from "@/components/TodoForm";

export default function TodoScreen() {
  const backgroundColor = useThemeColor({}, "background");

  return (
    <View>
      <TodoForm />
      <TodoTable />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
