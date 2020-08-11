import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import axios from 'axios';

export class Step4 extends Component {
  state = {
    proc: [],
    cm: [],
    cg: [],
    ram: [],
    vw: [],
    lg: [],
    cs: [],
    boit: [],
    alim: [],
  }

  componentDidMount() {
    axios.get('http://localhost:3000/category/processeur/').then((res) => {
      const proc = res.data.items;
      this.setState({proc});
    });
    axios.get('http://localhost:3000/category/carte-mere/').then((res) => {
      const cm = res.data.items;
      this.setState({cm});
    });
    axios.get('http://localhost:3000/category/carte-graphique/').then((res) => {
      const cg = res.data.items;
      this.setState({cg});
    });
    axios.get('http://localhost:3000/category/ram/').then((res) => {
      const ram = res.data.items;
      this.setState({ram});
    });
    axios.get('http://localhost:3000/category/ventirad-watercooling/').then((res) => {
      const vw = res.data.items;
      this.setState({vw});
    });
    axios.get('http://localhost:3000/category/lecteur-graveur/').then((res) => {
      const lg = res.data.items;
      this.setState({lg});
    });
    axios.get('http://localhost:3000/category/carte-son/').then((res) => {
      const cs = res.data.items;
      this.setState({cs});
    });
    axios.get('http://localhost:3000/category/boitier/').then((res) => {
      const boit = res.data.items;
      this.setState({boit});
    });
    axios.get('http://localhost:3000/category/alimentation/').then((res) => {
      const alim = res.data.items;
      this.setState({alim});
    });
  }

  continue = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { handleChange, CheckContent } = this.props;
    const optionProc = this.state.proc.map((proc) => {
      return (
        <option key={`${proc.id}`}>{`${proc.name}`}</option>
      );
    });
    const optionCM = this.state.cm.map((cm) => {
      return (
        <option key={`${cm.id}`}>{`${cm.name}`}</option>
      );
    });
    const optionCG = this.state.cg.map((cg) => {
      return (
        <option key={`${cg.id}`}>{`${cg.name}`}</option>
      );
    });
    const optionRAM = this.state.ram.map((ram) => {
      return (
        <option key={`${ram.id}`}>{`${ram.name}`}</option>
      );
    });
    const optionVW = this.state.vw.map((vw) => {
      return (
        <option key={`${vw.id}`}>{`${vw.name}`}</option>
      );
    });
    const optionLG = this.state.lg.map((lg) => {
      return (
        <option key={`${lg.id}`}>{`${lg.name}`}</option>
      );
    });
    const optionCS = this.state.cs.map((cs) => {
      return (
        <option key={`${cs.id}`}>{`${cs.name}`}</option>
      );
    });
    const optionBOIT = this.state.boit.map((boit) => {
      return (
        <option key={`${boit.id}`}>{`${boit.name}`}</option>
      );
    });
    const optionALIM = this.state.alim.map((alim) => {
      return (
        <option key={`${alim.id}`}>{`${alim.name}`}</option>
      );
    });
    return (
      <div className="fullform">
        <div>
          <h2>Question configuration</h2>
        </div>
        <div>
          <h1>Si vous savez ce que vous voulez alors c’est tan mieux ! vous n’avez plus qu’a nous l’indiquer.</h1>
        </div>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>Processeur</Form.Label>

            <Form.Control as="select" onChange={handleChange('config_proc')}>
              {optionProc}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_proc_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_proc_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Carte mére</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_board')}>
              {optionCM}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_board_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control className="Fo" placeholder="Si non laissez vide" onChange={handleChange('config_board_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Carte graphique</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_cg')}>
              {optionCG}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_cg_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_cg_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">RAM</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_ram')}>
              {optionRAM}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_ram_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_ram_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Ventirad / Water cooling</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_refresh')}>
              {optionVW}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_refresh_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_refresh_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Stockage</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_storage')}>
              {optionLG}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_storage_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_storage__link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Carte son</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_boardsound')}>
              {optionCS}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_boardsound_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_boardsound_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Boitier</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_case')}>
              {optionBOIT}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_case_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_case_link')} />
          </Form.Group>
        </Form>

        <Form className="Form__config">
          <Form.Group as={Col} controlId="formGridState">
            <Form.Label className="Form__inside">Alimentation</Form.Label>
            <Form.Control as="select" defaultValue="Fait ton choix !" onChange={handleChange('config_power')}>
              {optionALIM}
            </Form.Control>
            <Form.Label className="Form__inside">Un autre modele ?</Form.Label>
            <Form.Control placeholder="Preciser" onChange={handleChange('config_power_model')} />
            <Form.Label className="Form__inside">Un lien ?</Form.Label>
            <Form.Control placeholder="Si non laissez vide" onChange={handleChange('config_power_link')} />
          </Form.Group>
        </Form>

        <Form.Row>
          <Col>
            <Button className="Form__button" variant="primary" type="submit" onClick={this.back}> Precedent </Button>
          </Col>
          <Col>
            <Button className="Form__button" variant="primary" type="submit" onClick={this.continue}> Suivant </Button>
          </Col>
        </Form.Row>
      </div>
    );
  }
}

export default Step4;
