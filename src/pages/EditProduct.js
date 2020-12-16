import React, { Component } from "react";
import { Form, Col, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { FormWrapper } from "../components/styled/EditProduct-styled";

const getUrl = "http://localhost:8000/product/";

export class EditProduct extends Component {
  state = {
    prd_image: null,
    prd_name: "",
    prd_brand: "",
    prd_price: "",
    cndtn_id: "",
    prd_description: "",
    size_id: "",
    prd_ctg: "",
    created_at: "",
    updated_at: "",
    prd_rating: "",
  };

  componentDidMount = async () => {
    const { match } = this.props;
    // const res = await axios.get(
    //   "http://localhost:8000/product/" + match.params.id
    // );

    const config = {
      headers: {
        "x-access-token": "Bearer " + localStorage.getItem("token"),
      },
    };
    axios
      .get(getUrl + match.params.id, config)
      .then((res) => {
        console.log(res);
        this.setState({
          product: res.data.data[0],
          prd_name: res.data.data[0].prd_name,
          prd_brand: res.data.data[0].prd_brand,
          prd_price: res.data.data[0].prd_price,
          cndtn_id: res.data.data[0].cndtn_id,
          prd_description: res.data.data[0].prd_description,
          size_id: res.data.data[0].size_id,
          //prd_image: res.data.data[0].prd_image,
          prd_ctg: res.data.data[0].prd_ctg,
          prd_rating: res.data.data[0].prd_rating,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handlerChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handlerSubmit = async (e) => {
    const { match } = this.props;
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
      .patch("http://localhost:8000/update/" + match.params.id, data, config)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
    // await axios.patch(
    //   "http://localhost:8000/update/" + match.params.id,
    //   this.state
    // );
    this.props.history.push("/");
  };

  render() {
    const {
      prd_name,
      prd_brand,
      prd_price,
      prd_description,
      prd_rating,
      cndtn_id,
      size_id,
      prd_ctg,
    } = this.state;

    return (
      <div className="container">
        <h1 className="text-center">Edit Produk</h1>
        <FormWrapper onSubmit={this.handlerSubmit}>
          <Form.Group>
            <Form.Row>
              <Form.Label column lg={2}>
                Name
              </Form.Label>
              <Col>
                <Form.Control
                  type="text"
                  name="prd_name"
                  value={prd_name}
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
                  value={prd_brand}
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
                  value={prd_price}
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
                  value={cndtn_id}
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
                  value={prd_description}
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
                  value={size_id}
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
                  value={prd_ctg}
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
                  value={prd_rating}
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

export default EditProduct;
