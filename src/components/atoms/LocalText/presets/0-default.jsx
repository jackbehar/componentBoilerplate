import LocalText from "../LocalText";
import * as PropTypes from 'prop-types';

export default (
  <LocalText
    uxpId="local-text-1"
    color="TEXT_DARK"
    size="DisplayS"
    style={{}}>
    Local Text Component
  </LocalText>
);

LocalText.propTypes = {
  /**
   * Content of the Link
   * @uxpinpropname label
   * @uxpincontroltype input
   * */
  children: PropTypes.node,
  
};