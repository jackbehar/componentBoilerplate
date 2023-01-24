import {createSelector} from 'reselect';

// used for view option selector
const viewOptionsState = (viewState: any) => viewState.setting;

const getViewOptionsState = createSelector(viewOptionsState, changedState => {
  return changedState;
});

export {getViewOptionsState};

// used for overlay selector
const isOverlayShownState = (overlayState: any) => overlayState.setting;

const getOverlayShownState = createSelector(
  isOverlayShownState,
  changedState => {
    return changedState;
  },
);

export {getOverlayShownState};

// used for view display selector
const viewOptionsDisplayState = (displayState: any) => displayState.setting;

const getViewOptionsDisplayState = createSelector(
  viewOptionsDisplayState,
  changedState => {
    return changedState;
  },
);

export {getViewOptionsDisplayState};
