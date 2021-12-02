import { Form, Input, Button } from "antd";
import { useState } from 'react';

const AddFoodForm = (props) => {

    const [formState, setFormState] = useState({})

    const handleSubmit = () => {
        // e.preventDefault() it's placed in the <Form onSubmit=""> from Ant Design (following its documentation)
        props.createFood(formState)      // invokes CB defined in the parent and coming in props, to send state back to the parent  
        setFormState({})                 // reset form
    }

    const handleInput = (e) => {
        let {name, value} = e.target
        setFormState({...formState, [name]: value})
    }

    return (
        <div>
            <Form onFinish={handleSubmit} onSubmit={e => e.preventDefault()}>
            {/* We use "onFinish" because is the way to do it in this UI library (Ant Design)... */}

                <Form.Item label="Name" name="name">
                    <Input name="name" placeholder="Enter a name" value={formState.name || ""} onChange={handleInput} />
                </Form.Item>

                <Form.Item label="Image" name="image">
                    <Input name="image" placeholder="Enter the url of the image" value={formState.image || ""} onChange={handleInput} />
                </Form.Item>

                <Form.Item label="Calories" name="calories">
                    <Input type="number" name="calories" placeholder="calories" value={formState.calories || ""} onChange={handleInput} />
                </Form.Item>

                <Form.Item label="Servings" name="servings">
                    <Input type="number" name="servings" placeholder="servings" value={formState.servings || ""} onChange={handleInput} />
                </Form.Item>

                <Button type="primary" htmlType="submit">Save</Button>
            </Form>
        </div>
    )
}

export default AddFoodForm