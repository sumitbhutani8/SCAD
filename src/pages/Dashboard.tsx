import React from "react";
//To use below imports at later stage. Commented for now
import { css } from "@emotion/react";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class DashboardComponent extends React.Component {
  render() {
    return (
      <div>
        <div>
          <div className="row" style={{ margin: "15px 0px 15px 0px" }}>
            <div className="col-lg-12 page-header">Dashboard</div>
          </div>
          <div
            className="row"
            style={{ padding: 0, borderTop: "1px solid #ccc" }}
          >
            <div className="row" style={{ margin: "15px 0px 15px 0px" }}>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashboardComponent;
