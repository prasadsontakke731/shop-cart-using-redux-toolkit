import { useEffect, useState } from "react"
import { Button, Card, CardFooter } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { addToCart } from "../store/cartSlice"
import { getProducts } from "../store/productSlice"


const Product = () => {
    const dispatch = useDispatch()
    const { data } = useSelector(store => store.product)

    useEffect(() => {
        async function fetchData() {
            //
            // const data = await fetch("https://fakestoreapi.com/products")
            // const res = await data.json()
            // console.log(res);
            // setData(res)

            //dispatch and action for fetch products
            dispatch(getProducts())

        }
        fetchData()
    }, [])


    const addToCartItem = (item) => {
        //dispatch an add action
        dispatch(addToCart(item))

    }
    const cards = data.map((item) => (
        <div key={item.id} className="col-md-3 mb-4">
            <Card style={{ width: '18rem', height: "100" }}>
                <div className="text-center">
                    <Card.Img variant="top" src={item.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title>{item.title}</Card.Title>
                    <Card.Text className="text-center">
                        INR. {item.price}
                    </Card.Text>
                </Card.Body>
                <CardFooter className="text-center bg-white">
                    <Button onClick={() => addToCartItem(item)} variant="primary" className="text-center">Add To Cart</Button>
                </CardFooter>
            </Card>
        </div>
    ))
    return (
        <div className="container-fluid">
            <div className="row">
                {cards}
            </div>

        </div>
    )
}

export default Product