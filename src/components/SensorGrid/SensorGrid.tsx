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

import { sensorNameFromIndex } from "state/useSensors";
import { Sensor } from "./Sensor";
import classes from "./SensorGrid.module.css";
import { useSensorGrid } from "./useSensorGrid";

export const SensorGrid = () => {
  useSensorGrid();

  return (
    <div className={classes["sensor-grid"]}>
      {[...Array(100)].map((_, idx) => (
        <Sensor id={sensorNameFromIndex(idx)} key={sensorNameFromIndex(idx)} />
      ))}
    </div>
  );
};
