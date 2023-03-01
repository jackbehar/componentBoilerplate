import uxPinLayout from "../index";
import * as PropTypes from 'prop-types';

export default (
  <uxPinLayout
    uxpId="container-1"
    style={{width:"100%"}}
  />
);

uxPinLayout.propTypes = {
  /**
   * Content of the Link
   * @uxpinpropname label
   * @uxpincontroltype input
   * */
  children: PropTypes.node,
  
};
