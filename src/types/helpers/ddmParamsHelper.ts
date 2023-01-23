import {RootState} from '../../store/config/store-config';

export type ShadowState = Record<string, string | number>;
export type GWInventoryState = {
  CLOUD_CLASS: string;
  DEVICE_AVL: string;
  INSTANCE: string;
  INV: string;
};

export type ExpectedDDMParamsList = {
  class: Readonly<string>;
  params: ReadonlyArray<string>;
};

export interface useDDMParamsProps<
  TExpectedDDMParamsList extends ReadonlyArray<ExpectedDDMParamsList>,
  TDeviceNumber extends string,
> {
  expectedDDMParamsList: TExpectedDDMParamsList;
  deviceNumber?: TDeviceNumber;
  deviceId: string;
}

export type TransformDDMParamsNames<
  TExpectedDDMParamsList extends ReadonlyArray<ExpectedDDMParamsList>,
  TDeviceNumber extends string,
> = {
  [TParam in TExpectedDDMParamsList[number] as `${TParam['class']}${TParam['params'][number]}`]: `${TParam['class']}${TDeviceNumber}${TParam['params'][number]}`;
};

export type TransformDDMParams<
  TExpectedDDMParamsList extends ReadonlyArray<ExpectedDDMParamsList>,
> = {
  [TParam in TExpectedDDMParamsList[number] as `${TParam['class']}${TParam['params'][number]}`]:
    | string
    | number
    | undefined
    | Array<GWInventoryState>;
};

export type GetParamValueInput = {
  deviceId: string;
  paramClass: string;
  param: string;
  deviceNumber?: number;
};

export interface useDDMValues<
  TExpectedDDMParamsList extends ReadonlyArray<ExpectedDDMParamsList>,
  TDeviceNumber extends string,
> {
  DDMParams: TransformDDMParams<TExpectedDDMParamsList>;
  DDMParamNames: TransformDDMParamsNames<TExpectedDDMParamsList, TDeviceNumber>;
  getParamValue: (
    input: GetParamValueInput,
  ) => string | number | boolean | Array<GWInventoryState>;
  shadowState: RootState['shadowState'];
}
