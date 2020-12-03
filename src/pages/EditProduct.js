import React, { Component } from 'react';
import {Form, Col, Button} from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

import { FormWrapper } from "../components/styled/EditProduct-styled";

export class EditProduct extends Component {

    state = {
        "prd_name":"",
        "prd_brand":"",
        "prd_price":"",
        "cndtn_id":"",
        "prd_description":"",
        "size_id":"",
        "prd_image":"",
        "prd_ctg":"",
        "created_at":"",
        "updated_at":"",
        "prd_rating":"",
    }

    componentDidMount = async() =>{
        const { match } = this.props;
        const res = await axios.get("http://localhost:8000/product/" + match.params.id);
        const {prd_name, prd_brand, prd_price, prd_description, prd_image, prd_rating } = res.data.data[0];

        this.setState({ 
            prd_name: prd_name,
            prd_brand: prd_brand,
            prd_price: prd_price,
            cndtn_id:"",
            prd_description: prd_description,
            size_id:"",
            prd_image: prd_image,
            prd_ctg: "",
            prd_rating: prd_rating,
            created_at:"",
            updated_at:"",
        })
    }
    
    handlerChange = (e) => {
        this.setState({ [e.target.name] :e.target.value })
    }

    handlerSubmit = async () => {
        const { match } = this.props;
        // eslint-disable-next-line no-restricted-globals
        event.preventDefault();
        await axios.put(('http://localhost:8000/product/' + match.params.id), this.state)
        this.props.history.push('/')
    }

    render() {
        const {prd_name, prd_brand, prd_price, prd_description, prd_image, prd_rating} = this.state;

        return (
            <div className="container">
                <h1 className="text-center">Edit Produk</h1>
                <FormWrapper onSubmit={this.handlerSubmit}>
                    <Form.Group>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Nama
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_name" value={prd_name} placeholder="Nama" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Brand
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_brand" value={prd_brand} placeholder="Brand" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Price
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_price" value={prd_price} placeholder="Price" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Condition
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="cndtn_id" placeholder="Condition" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Description
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_description" value={prd_description} placeholder="Description" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Size
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="size_id" placeholder="Size" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Image Link
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_image" value={prd_image} placeholder="Image Link" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Category
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_ctg" placeholder="Category" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Created At
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="created_at" placeholder="Rating" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Updated At
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="updated_at" placeholder="Created At" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Form.Label column lg={2}>
                        Rating
                        </Form.Label>
                        <Col>
                        <Form.Control type="text" name="prd_rating" value={prd_rating} placeholder="Update At" onChange={this.handlerChange}/>
                        </Col>
                    </Form.Row>
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Submit
                    </Button>
                </FormWrapper>
            </div>
        )
    }
}

export default EditProduct;
