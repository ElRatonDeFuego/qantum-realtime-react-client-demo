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

import { useMemo } from "react";
import { useSensors } from "state/useSensors";

const randomHex = () => (Math.floor(Math.random() * 236) + 20).toString(16);
const randomColor = () => `#${randomHex()}${randomHex()}${randomHex()}`;

export const useSensor = ({ id }: { id: string }) => {
  const [sensorValue] = useSensors((state) => Math.floor(state.sensors[id]));

  const sensorColor = useMemo(randomColor, []);

  return {
    sensorColor,
    sensorValue,
  };
};
