
import React, { useState } from "react";

import { CheckBox as CheckBoxMerge, CheckBoxProps} from "../checkBox";

function checkBoxWrapped(props: CheckBoxProps) {

  const [checkBoxValue, setCheckBoxValue] = useState(props.value);

  React.useEffect(() => {
    setCheckBoxValue(props.value)
  }, [props.value]); // Only re-run the effect if value prop changes

    return (
     
        <CheckBoxMerge 
        {...props}
        onPress={() => setCheckBoxValue(!checkBoxValue)}
        value={checkBoxValue}
        elementId="checkBox"
        />
   
    )
} 


export default checkBoxWrapped