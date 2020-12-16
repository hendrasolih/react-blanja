import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { FormWrapper } from "../components/styled/EditProduct-styled";

export default class AddProduct extends Component {
  state = {
    prd_name: "",
    prd_brand: "",
    prd_price: "",
    cndtn_id: "",
    prd_description: "",
    size_id: "",
    prd_image: null,
    prd_ctg: "",
    created_at: "",
    updated_at: "",
    prd_rating: "",
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (e) => {
    // eslint-disable-next-line no-restricted-globals
    e.preventDefault();
    const data = new FormData();
    data.append("prd_name", this.state.prd_name);
    data.append("prd_brand", this.state.prd_brand);
    data.append("prd_price", this.state.prd_price);
    data.append("cndtn_id", this.state.cndtn_id);
    data.append("prd_description", this.state.prd_description);
    data.append("size_id", this.state.size_id);
    data.append("prd_ctg", this.state.prd_ctg);
    data.append("created_at", this.state.created_at);
    data.append("updated_at", this.state.updated_at);
    data.append("prd_rating", this.state.prd_rating);
    data.append("image", this.state.prd_image);
    const config = {
      headers: {
        "x-access-token": "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .post("http://localhost:8000/products", data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h1 className="text-center">Tambah Produk</h1>
        <FormWrapper
          enctype="multipart/form-data"
          onSubmit={this.handlerSubmit}
        >
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_name"
                  placeholder="Name"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Brand
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_brand"
                  placeholder="Brand"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Price
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_price"
                  placeholder="Price"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Condition
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="cndtn_id"
                  placeholder="Condition"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Description
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_description"
                  placeholder="Description"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Size
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="size_id"
                  placeholder="Size"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Image
              </Form.Label>
              <Col>
                <Form.Control
                  type="file"
                  name="prd_image"
                  placeholder="Image"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    this.setState({ prd_image: file });
                  }}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Category
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_ctg"
                  placeholder="Category"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Created At
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="created_at"
                  placeholder="Created At"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Updated At
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="updated_at"
                  placeholder="Update At"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
            <Form.Row>
              <Form.Label column lg={2}>
                Rating
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_rating"
                  placeholder="Rating"
                  onChange={this.handlerChange}
                />
              </Col>
            </Form.Row>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </FormWrapper>
      </div>
    );
  }
}
