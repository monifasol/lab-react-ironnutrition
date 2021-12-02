import { Card, Col, Button } from "antd";

const FoodBox = (props) => {
    
    const { food } = props

    const deleteFood = (food) => { 
        props.deleteFood(food)        
    }

    return (
            <Col>
                <Card title={food.name}
                        style={{ width: 230, height: 300, margin: 10 }}>
                        <img src={food.image} height="60px" alt={food.name} />
                        <p>Calories: {food.calories}</p>
                        <p>Servings: {food.servings}</p>
                        <p><b>Total Calories: {food.calories * food.servings } </b> kcal</p>
                        <Button type="primary" onClick={ () => deleteFood(food)}> Delete </Button>
                </Card>
            </Col>
    )
}

export default FoodBox