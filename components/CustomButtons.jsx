// import React from "react";
// import { Text, TouchableOpacity } from "react-native";

// const CustomButtons = ({
//   title,
//   handlePress,
//   containerStyles,
//   textStyles,
//   isLoading,
// }) => {
//   return (
//     <TouchableOpacity
//       onPress={handlePress}
//       activeOpacity={0.7}
//       className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
//         isLoading ? "opacity-50" : " "
//       }`}
//       disabled={isLoading}
//     >
//       <Text className={`text-yellow-300 font-psemibold text-3xl ${textStyles}`}>
//         {title}
//       </Text>
//     </TouchableOpacity>
//   );
// };

// export default CustomButtons;

import React from "react";
import { Text, TouchableOpacity } from "react-native";

const CustomButton = ({
  title,
  handlePress,
  contentContainerStyle,
  textStyles,
  isLoading,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${contentContainerStyle} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
