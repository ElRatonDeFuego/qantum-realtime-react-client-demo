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

import { PieChart } from "react-minimal-pie-chart";
import classes from "./Sensor.module.css";
import { useSensor } from "./useSensor";

export const Sensor = ({ id }: { id: string }) => {
  const { sensorColor, sensorValue } = useSensor({ id });

  return (
    <div className={classes.sensor}>
      <PieChart
        animate={true}
        background="#bfbfbf"
        data={[
          {
            color: sensorColor,
            value: 100,
          },
        ]}
        totalValue={100}
        lineWidth={20}
        label={() => `${sensorValue} %`}
        labelStyle={{
          fill: "teal",
          fontSize: "25px",
        }}
        labelPosition={0}
        reveal={sensorValue}
        rounded={true}
        style={{ height: "100px", width: "100px" }}
      />
      <div className={classes["sensor-id"]}>{id}</div>
    </div>
  );
};
