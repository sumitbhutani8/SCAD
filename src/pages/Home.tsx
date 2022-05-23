import React from "react";
import { Row, Col, Card } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
class HomeComponent extends React.Component {
  state = {
    content: [
      { title: "title", body: "body" },
      { title: "title2", body: "body2" },
    ],
    showList: true,
    selectedItem: {},
  };

  // listClickListener = (data) => {
  //   const temp = this.state.showList;
  //   var item = null;
  //   if (data != undefined && data != null) {
  //     item = this.state.content.find(function (x) {
  //       if (x.title == data.title) return x;
  //     });
  //   }
  //   this.setState({ showList: !temp, selectedItem: item });
  // };

  componentDidMount() {
    // axios.get(`http://localhost:5000/get-allContent`).then((res) => {
    //   const content = res.data;
    //   // for (var i = 0; i < content.length; i++) {
    //   //   var temp = content[i];
    //   //   var test = temp.body;
    //   //   if (test.length > 20) {
    //   //     test = test.substring(0, 20) + " .......";
    //   //   }
    //   // }
    //   this.setState({ content: content });
    // });
  }

  render() {
    return (
      <div>
        <h1
          className="heading"
          style={{ marginLeft: "19px", marginTop: "30px" }}
        >
          {" "}
          Articles{" "}
        </h1>
        <div className={this.state.showList ? "" : "hidden"}>

        </div>
        <div className={this.state.showList ? "hidden" : ""}>
          <Card style={{ margin: "20px" }} >
            <Card.Header>
              <div className="pull-left">
                {this.state.selectedItem != null &&
                this.state.selectedItem != undefined ? (
                  <div>
                    <Card.Title>Card title</Card.Title>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="pull-right">
                <CloseIcon />
              </div>
            </Card.Header>
            <Card.Body>

            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default HomeComponent;
