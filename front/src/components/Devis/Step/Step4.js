import React, { useEffect } from 'react';
import './styles.scss';
import { Form } from 'react-bootstrap';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import SelectField from './SelectField';
import ChangeStepButton from './ChangeStepButton';

const Step4 = ({ dataSurvey, error, changeStep, forceStepUp, getItems, items, handleChange }) => {
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
    <div className="fullform container">
      <div>
        <h2>Un equipement ? J'ai! .. ou pas.</h2>
      </div>
      <div>
        <h1>Avoir un budget c'est bien ! Mais peut etre savez vous deja quel equipement fournir a votre personnage?
        <br />
          <br />
          une epee particuliere ou un bouclier precis, vous savez peut etre meme deja tout les equipements necessaire a votre personnage!
          <br />
          <br />
          Si c'est le cas dites le a votre guide et son travail de recherche n'en sera que plus rapide :)
        </h1>
      </div>
      <div>
        <SelectField label='Processeur' name='config_proc' options={proc} value={dataSurvey.config_proc} valueModel={dataSurvey.config_proc_model} valueLink={dataSurvey.config_proc_link} errorLink={error.configProcLink[0]} handleChange={handleChange} />
        <SelectField label='Carte Mère' name='config_board' options={cm} value={dataSurvey.config_board} valueModel={dataSurvey.config_board_model} valueLink={dataSurvey.config_board_link} errorLink={error.configBoardLink[0]} handleChange={handleChange} />
        <SelectField label='Carte Graphique' name='config_gc' options={cg} value={dataSurvey.config_gc} valueModel={dataSurvey.config_gc_model} valueLink={dataSurvey.config_gc_link} errorLink={error.configGcLink[0]} handleChange={handleChange} />
        <SelectField label='Ram' name='config_ram' options={ram} value={dataSurvey.config_ram} valueModel={dataSurvey.config_ram_model} valueLink={dataSurvey.config_ram_link} errorLink={error.configRamLink[0]} handleChange={handleChange} />
        <SelectField label='Ventirad / Watercooling' name='config_refresh' options={watercool} value={dataSurvey.config_refresh} valueModel={dataSurvey.config_refresh_model} errorLink={error.configRefreshLink[0]} valueLink={dataSurvey.config_refresh_link} handleChange={handleChange} />
        <SelectField label='Carte Son' name='config_boardsound' options={cs} value={dataSurvey.config_boardsound} valueModel={dataSurvey.config_boardsound_model} errorLink={error.configBoardsoundLink[0]} valueLink={dataSurvey.config_boardsound_link} handleChange={handleChange} />
        <SelectField label='Boitier' name='config_case' options={boitier} value={dataSurvey.config_case} valueModel={dataSurvey.config_case_model} errorLink={error.configCaseLink[0]} valueLink={dataSurvey.config_case_link} handleChange={handleChange} />
        <SelectField label='Alimentation' name='config_power' options={alim} value={dataSurvey.config_power} valueModel={dataSurvey.config_power_model} errorLink={error.configPowerLink[0]} valueLink={dataSurvey.config_power_link} handleChange={handleChange} />
        <SelectField label='Stockage' name='config_storage' options={storage} value={dataSurvey.config_storage} valueModel={dataSurvey.config_storage_model} errorLink={error.configStorageLink[0]} valueLink={dataSurvey.config_storage_link} handleChange={handleChange} />
        <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
      </div>

    </div>
  );
};

export default Step4;
