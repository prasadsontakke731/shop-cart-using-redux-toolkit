
import { Button, Card, CardFooter } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { removeCartItem } from "../store/cartSlice"

const Cart = () => {
    const dispatch = useDispatch()

    const removeItem = (id) => {
        dispatch(removeCartItem(id))
    }
    const products = useSelector(store => store.cart)
    const cards = products.map((item) => (
        <div key={item.id} className="d-flex col-md-12  mb-4">
            <Card style={{ height: "100", width: "100%" }}>
                <div className="text-center">
                    <Card.Img variant="top" src={item.image} style={{ width: "100px", height: "130px" }} />
                </div>
                <Card.Body>
                    <Card.Title className="text-center">{item.title}</Card.Title>
                    <Card.Text className="text-center">
                        INR. {item.price}
                    </Card.Text>
                </Card.Body>
                <CardFooter className="text-center bg-white">
                    <Button variant="danger" className="text-center" onClick={() => removeItem(item.id)}>Remove from Cart</Button>
                </CardFooter>
            </Card>
        </div>
    ))
    return (
        <div className="container-fluid ">
            <div className="row  ">
                {cards}
            </div>

        </div>
    )
}

export default Cart