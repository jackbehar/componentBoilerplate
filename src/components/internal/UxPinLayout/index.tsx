import React from "react";
import { View, ViewProps } from "react-native";


export default function uxPinLayout({...rest}:ViewProps) {
    const style = React.useMemo(() => {
        return rest.style;
      }, [rest.style]);
    
  return (
    <View style={style} {...rest}/>
  )
}
