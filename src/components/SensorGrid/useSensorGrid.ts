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

import { useEffect } from "react";
import { default as socketIOClient } from "socket.io-client";
import { useSensors } from "state/useSensors";
import { SOCKETIO_SERVER, USER_CREDENTIALS } from "utils/Env";

interface SensorData {
  array: [string, number];
}

const logError = (
  socket: SocketIOClient.Socket,
  errorName: string,
  errorMessage: string | object
) => {
  // tslint:disable-next-line: no-console
  console.log(
    `%c[socket${socket.id ? ` ID "${socket.id}"` : ""}] ${errorName}: ${
      typeof errorMessage === "string" ? errorMessage : errorMessage.toString()
    }`,
    "background-color: #290000; color: #db6b6d; font-size: larger; font-weight:bold; padding: 1em; border: dashed #db6b6d;"
  );
};

export const useSensorGrid = () => {
  const [, { setSensorValue }] = useSensors(() => undefined);

  useEffect(
    () => {
      let socket: SocketIOClient.Socket;

      socket = socketIOClient(SOCKETIO_SERVER, {
        query: { user_credentials: USER_CREDENTIALS },
      });

      `disconnect
       error`
        .split(/\s+/)
        .filter((s) => s)
        .forEach((errorName) => {
          socket.on(errorName, (error: string | object) => {
            logError(socket, errorName, error);
          });
        });

      socket.on("SENSOR_DATA", (data: SensorData) => {
        const [sensorName, sensorValue] = data.array;

        setSensorValue(sensorName, sensorValue);
      });
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );
};
