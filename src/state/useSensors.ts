/*!
 * Copyright (C) QoS Energy
 *
 * All rights reserved
 * https://www.qosenergy.com/terms-of-use
 *
 * All information contained herein is, and remains the property of
 * QoS Energy and its suppliers, if any. The intellectual and technical
 * concepts contained herein are proprietary to QoS Energy and its suppliers
 * and may be covered by foreign patents, patents in process, and are
 * protected by trade secret or copyright law. Dissemination of this
 * information or reproduction of this material is strictly forbidden unless
 * prior written permission is obtained from QoS Energy.
 */

import React from "react";
import { default as createSharedStoreHook, Store } from "use-global-hook";

interface SensorsState {
  sensors: { [sensorName: string]: number };
}

export interface SensorsActions {
  setSensorValue(sensorName: string, sensorValue: number): void;
}

export const sensorNameFromIndex = (idx: number) =>
  `sensor${(idx + 1).toString().padStart(3, "0")}`;

const initialState: SensorsState = {
  sensors: [...Array(100)].reduce((values: SensorsState["sensors"], _, idx) => {
    values[sensorNameFromIndex(idx)] = 0;

    return values;
  }, {}),
};

const actionsWithInjectedStore = {
  setSensorValue: (
    store: Store<SensorsState, SensorsActions>,
    sensorName: string,
    sensorValue: number
  ) => {
    store.setState({
      sensors: { ...store.state.sensors, [sensorName]: sensorValue },
    });
  },
};

export const useSensors = createSharedStoreHook<SensorsState, SensorsActions>(
  React,
  initialState,
  actionsWithInjectedStore
);
