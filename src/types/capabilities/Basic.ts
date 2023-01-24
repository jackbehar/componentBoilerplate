export interface BasicCapabilityParameters {
  deviceId: string;
  deviceNumber: string;
}

export interface BasicWidgetParameters {
  onPress: () => void;
}

type DDMParamsNames<TParams> = {
  [K in keyof TParams]: string;
};

export interface BasicDDmParameters<TParams> {
  currentValues: TParams;
  ddmParams: DDMParamsNames<TParams>;
  disabled: boolean;
  mock?: boolean;
}

export interface BasicWidgetDDmParameters<TParams> {
  currentValues: TParams;
  ddmParams?: DDMParamsNames<TParams>;
}
