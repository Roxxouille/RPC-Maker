import React, {useEffect} from 'react';
import './styles.scss';
import { Form } from 'react-bootstrap';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import SelectField from './SelectField';
import ChangeStepButton from './ChangeStepButton';

const Step4 = ({dataSurvey, error, changeStep, forceStepUp, getItems, items, handleChange}) => {
  useEffect(() => {
    if (dataSurvey.preconfiguration === false) {
      forceStepUp();
    }
    getItems();
  }, []);
  let proc = [];
  let cg = [];
  let ram = [];
  let cm = [];
  let watercool = [];
  let lg = [];
  let cs = [];
  let boitier = [];
  let alim = [];
  let storage = [];

  items.map((item) => {
    if (item.name === 'Processeur') {
      proc = item.items;
    }
    if (item.name === 'Carte mère') {
      cm = item.items;
    }
    if (item.name === 'Carte graphique') {
      cg = item.items;
    }
    if (item.name === 'RAM') {
      ram = item.items;
    }
    if (item.name === 'Ventirad / Watercooling') {
      watercool = item.items;
    }
    if (item.name === 'Boitier') {
      boitier = item.items;
    }
    if (item.name === 'Alimentation') {
      alim = item.items;
    }
    if (item.name === 'Carte son') {
      cs = item.items;
    }
    if (item.name === 'Lecteur / Graveur') {
      lg = item.items;
    }
    if (item.name === 'HDDs') {
      storage = item.items;
    }
    if (item.name === 'SSDs') {
      storage.push(item.items);
    }
  });

  return (
    <div className="fullform">
      <div>
        <h2>Question pratique</h2>
      </div>
      <div>
        <h1>Pour mieux vous servir nous aurions besoin d’en savoir plus sur votre idee.</h1>
      </div>
      <SelectField label='Processeur' name='config_proc' options={proc} value={dataSurvey.config_proc} handleChange={handleChange} />
      <SelectField label='Carte Mère' name='config_board' options={cm} value={dataSurvey.config_board} handleChange={handleChange} />
      <SelectField label='Carte Graphique' name='config_gc' options={cg} value={dataSurvey.config_gc} handleChange={handleChange} />
      <SelectField label='Ram' name='config_ram' options={ram} value={dataSurvey.config_ram} handleChange={handleChange} />
      <SelectField label='Ventirad / Watercooling' name='config_refresh' options={watercool} value={dataSurvey.config_refresh} handleChange={handleChange} />
      <SelectField label='Carte Son' name='config_boardsound' options={cs} value={dataSurvey.config_boardsound} handleChange={handleChange} />
      <SelectField label='Boitier' name='config_case' options={boitier} value={dataSurvey.config_case} handleChange={handleChange} />
      <SelectField label='Alimentation' name='config_power' options={alim} value={dataSurvey.config_power} handleChange={handleChange} />
      <SelectField label='Stockage' name='config_storage' options={storage} value={dataSurvey.config_storage} handleChange={handleChange} />
      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step4;
