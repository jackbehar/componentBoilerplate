
import React, { useState } from "react";

import { CheckBox as CheckBoxMerge, CheckBoxProps} from "../checkBox";


/**
 * @uxpinwrappers
 * SkipContainerWrapper, NonResizableWrapper
 */
function checkBoxWrapped(props: CheckBoxProps) {

  const [checkBoxValue, setCheckBoxValue] = useState(props.value);

  React.useEffect(() => {
    setCheckBoxValue(props.value)
  }, [props.value]); // Only re-run the effect if value prop changes

    return (
      // <div key={(Date.now).toString()}>
        <CheckBoxMerge 
        {...props}
        onPress={() => setCheckBoxValue(!checkBoxValue)}
        value={checkBoxValue}
        elementId="checkBox"
        />
        // </div>
    )
} 


export default checkBoxWrapped