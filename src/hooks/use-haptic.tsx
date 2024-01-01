import * as Haptics from "expo-haptics";

type HapticType =
  | "selection"
  | "impactLight"
  | "impactMedium"
  | "impactHeavy"
  | "notificationSuccess"
  | "notificationError"
  | "notificationWarning";

const useHaptic = (type: HapticType): (() => void) => {
  const triggerHaptic = async () => {
    try {
      switch (type) {
        case "selection":
          await Haptics.selectionAsync();
          break;
        case "impactLight":
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light);
          break;
        case "impactMedium":
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
          break;
        case "impactHeavy":
          await Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy);
          break;
        case "notificationSuccess":
          await Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Success
          );
          break;
        case "notificationError":
          await Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Error
          );
          break;
        case "notificationWarning":
          await Haptics.notificationAsync(
            Haptics.NotificationFeedbackType.Warning
          );
          break;
        default:
          // Do nothing or handle an unknown type
          break;
      }
    } catch (error) {
      // Handle haptic feedback error (if needed)
      console.error("Error triggering haptic feedback:", error);
    }
  };

  return triggerHaptic;
};

export { useHaptic };
