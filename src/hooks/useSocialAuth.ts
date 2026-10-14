import { useSSO } from "@clerk/expo";
import { useState } from "react";
import { Alert } from "react-native";

const useSocialAuth = () => {
  const [isLoadingStrategy, setIsLoadingStrategy] = useState<string | null>(null);
  const { startSSOFlow } = useSSO();
  const handleSocialAuth = async (
   strategy: "oauth_google" | "oauth_github" | "oauth_apple"
  ) => {

    if(isLoadingStrategy) return;
    setIsLoadingStrategy(strategy);

    try {
     const { createdSessionId, setActive } = await startSSOFlow({ strategy });

      if (!createdSessionId || !setActive) {
        Alert.alert(
          "Sign-in failed",
          "Sign-in did not complete. Please try again.",
        );
        return;
      }

      await setActive({ session: createdSessionId });
    } catch (error) {
      console.log("Error during social auth:", error);
      Alert.alert(
        "Sign-in failed",
        "An error occurred during sign-in. Please try again.",
      );
    } finally {
      setIsLoadingStrategy(null);
    }
  };

  return { isLoadingStrategy, handleSocialAuth };
};

export default useSocialAuth ;