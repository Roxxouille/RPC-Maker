import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const OrderEdit = ({command, getCommand, items, getItems, changeItem, submitItems}) => {
  const { id } = useParams();
  console.log('editordercommand:', command, 'items:', items);

  const handleChange = (e) => {
    changeItem(e.target.value, e.target.id, e.target.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitItems();
  };

  if (command.slug !== id) {
    getCommand(id);
  }
  if (items.length === 0) {
    getItems();
  }

  let total = 0;

  const dataCommand = command.item.map((data, index) => {
    const price = parseInt(data.price);
    total += price; 
    const dataItems = items.map((item) => {
      if (item.name === data.category.name) {
        const dataOptions = item.items.map((option) => {
          return (
            <option key={option.id} value={option.id}>{option.name}</option>
          );
        });

        return dataOptions;
      }
    });
    return (
      <Form.Group key={data.name}>
        <Form.Label>{data.category.name}</Form.Label>
        <Form.Control onChange={handleChange} id={index} value={data.id} name={data.category.name} as='select'>
          {dataItems}
        </Form.Control>
      </Form.Group>
    );
  });

  return (
    <div className="order">
      <Form onSubmit={handleSubmit}>
        {dataCommand}
        <Button type="submit">
          Modifier
        </Button>
      </Form>
    </div>
  );
};

export default OrderEdit;
