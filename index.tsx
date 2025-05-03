import { StyleSheet, View, Pressable, Text } from "react-native";
import { ThemedView } from "@/components/ThemedView";
import { useState } from "react";

export default function HomeScreen() {
    const [input, setInput] = useState<string>("");

    const handlePress = (value: string) => {
        setInput((prev) => prev + value);
    };

    const handleClear = () => setInput("");

    const handleCalculate = () => {
        try {
            setInput(eval(input).toString());
        } catch (error) {
            setInput("Error");
        }
    };

    const renderButton = (
        label: string,
        onPress: () => void,
        color?: string
    ) => (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                styles.button,
                { backgroundColor: color || "#333" },
                pressed && { opacity: 0.7 },
            ]}
        >
            <Text style={styles.buttonText}>{label}</Text>
        </Pressable>
    );

    return (
        <ThemedView style={styles.container}>
            <View>
                <Text
                    style={{
                        fontSize: 20,
						padding: 10,
						paddingTop: 30,
                        color: "#000",
                        fontWeight: "bold",
                    }}
                >
                    Created by Maria Qureshi
                </Text>
            </View>
            <View style={styles.screen}>
                <Text style={styles.result}>{input || "0"}</Text>
            </View>
            <ThemedView style={styles.buttonsContainer}>
                <View style={styles.buttonRow}>
                    {renderButton("1", () => handlePress("1"))}
                    {renderButton("2", () => handlePress("2"))}
                    {renderButton("3", () => handlePress("3"))}
                    {renderButton("/", () => handlePress("/"), "#FF9500")}
                </View>
                <View style={styles.buttonRow}>
                    {renderButton("4", () => handlePress("4"))}
                    {renderButton("5", () => handlePress("5"))}
                    {renderButton("6", () => handlePress("6"))}
                    {renderButton("*", () => handlePress("*"), "#FF9500")}
                </View>
                <View style={styles.buttonRow}>
                    {renderButton("7", () => handlePress("7"))}
                    {renderButton("8", () => handlePress("8"))}
                    {renderButton("9", () => handlePress("9"))}
                    {renderButton("-", () => handlePress("-"), "#FF9500")}
                </View>
                <View style={styles.buttonRow}>
                    {renderButton("0", () => handlePress("0"))}
                    {renderButton("C", handleClear, "#FF3B30")}
                    {renderButton("=", handleCalculate, "#34C759")}
                    {renderButton("+", () => handlePress("+"), "#FF9500")}
                </View>
            </ThemedView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white", // Black background
    },
    screen: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "flex-end",
        padding: 20,
    },
    result: {
        fontSize: 60,
        color: "#000",
        fontWeight: "bold",
    },
    buttonsContainer: {
        flex: 2,
        padding: 10,
        justifyContent: "space-around",
    },
    buttonRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginBottom: 10,
    },
    button: {
        flex: 1,
        margin: 5,
        aspectRatio: 1, // Makes buttons square
        borderRadius: 12,
        justifyContent: "center",
        alignItems: "center",
    },
    buttonText: {
        fontSize: 28,
        color: "#fff",
        fontWeight: "bold",
    },
});
