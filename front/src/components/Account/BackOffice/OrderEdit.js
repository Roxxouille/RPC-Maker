import React from 'react';
import { useParams } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';

const OrderEdit = ({ command, getCommand, items, getItems, changeItem, submitItems }) => {
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
      <div className="backoffice__body__orderedit__forms__one" key={data.id}>
        <Form.Group>
          <Form.Label> <h5>{data.category.name}</h5> </Form.Label>
          <Form.Control onChange={handleChange} id={index} value={data.id} name={data.category.name} as='select'>
            {dataItems}
          </Form.Control>
        </Form.Group>
      </div>
    );
  });

  return (
    <div className="backoffice__body__orderedit">
      <div className="backoffice__body__orderedit__title">
        <h3> Edition de la commande n°{command.id} :  {command.name}</h3>
      </div>
      <div >
        <Form onSubmit={handleSubmit} >
          <div className="backoffice__body__orderedit__forms">{dataCommand}</div>
          <div className="backoffice__body__orderedit__button">
            <Button type="submit">
              Enregistrer les modifications
          </Button>
          </div>

        </Form>
      </div>

    </div>
  );
};

export default OrderEdit;
