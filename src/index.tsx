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

import { SensorGrid } from "components/SensorGrid";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { reportWebVitals } from "./reportWebVitals";

ReactDOM.render(
  <React.StrictMode>
    <SensorGrid />
  </React.StrictMode>,
  document.getElementById("qantum-realtime-react-client-demo")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
