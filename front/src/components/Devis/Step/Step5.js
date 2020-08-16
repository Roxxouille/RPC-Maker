import React, { Component } from 'react';
import { Form, Col, Button } from 'react-bootstrap';
import './styles.scss';
import ErrorField from 'src/components/Utils/Field/ErrorField';
import BinaryButtonField from 'src/components/Utils/Field/BinaryButtonField';
import ChangeStepButton from 'src/components/Devis/Step/ChangeStepButton';
import Field from 'src/components/Utils/Field';

const Step5 = ({
  changeDevis, dataSurvey, changeStep, error, step,
}) => {
  console.log('error:', error);
  return (
    <div className="fullform container">
      <div>
        <h2>Qui est votre personnage?</h2>
      </div>
      <div>
        <h1>
          Aaah on arrive a un moment tres important dans la vie de votre personnage, qui est il? que peut il faire? quel sera son histoire? pour quelles types d'aventures sera t il taille?
          <br />
          <br />
          Tan t de question sans reponse, mais qui en auront bientot pour que l'on puisse creer votre perssonnage et qu'il corresponde au mieux a vous et a ce que vous avez imagine pour lui!
          <br />
          <br />
          Plus vous mettrez d'information et plus votre personnage sera a l'effigie de ce que vous pensez etre le mieux pour lui, donc allez y franco, n'ayez pas peur!
        </h1>
      </div>

      <hr />

      <div>
        <h1>De quelle classe sera votre personnage ?</h1>
        <Form>
          <Form.Check inline name="spec_important" label="Silencieux" value="Le silence" onChange={changeDevis} />
          <Form.Check inline name="spec_important" label="Un juste milieux" value="Un juste milieux" onChange={changeDevis} />
          <Form.Check inline name="spec_important" label="Puissant" value="Les performances" onChange={changeDevis} />
        </Form>
        <ErrorField error={error.specImportant[0]} />
      </div>

      <hr />

      <div>
        <h1>En fonction des batailles que votre personnage va mener il peut avoir besoin de la maitrise double lame qui lui permettra d'aller au devant du danger avec plus d'assurance!</h1>
        <BinaryButtonField label="Voulez vous faire un SLI?" name="spec_sli" value={dataSurvey.spec_sli} handleChange={changeDevis} />
        <ErrorField error={error.specSli[0]} />
      </div>

      <hr />

      <div>
        <h1>
          Dans des moments tres strategiques ou pour des prises de decisions importantes, pour un ultime effort ou pour affronter des ennemis plus fort que prevu,
          votre personnage pourrait avoir besoin de la maitrise berserk qui lui permettra d'avoir un boost de competence !
        </h1>
        <BinaryButtonField label="Voulez vous pouvoir effectuer de l'overclocking ?" name="spec_overclock" value={dataSurvey.spec_overclock} handleChange={changeDevis} />
        <ErrorField error={error.specOverclock[0]} />
      </div>

      <hr />

      <div>
        <h1>
          Tout au long de son aventure votre personnage voudra surement ecire son recit quelque part, garder sur un parchemin des informations essentiel a ses prochaines quetes, eventuellement garder des souvenirs de sees rencontres!
          <br />
          Peut etre meme qu'il aura sa propre grosse bibliotheque !
        </h1>
        <Form>
          <Form.Label>Quel type de stockage voulez vous?</Form.Label>
              <Form.Check name="spec_storage" inline label="HDD" value="HDD" onChange={changeDevis} />
              <Form.Check name="spec_storage" inline label="SSD" value="SSD" onChange={changeDevis} />
              <Form.Check name="spec_storage" inline label="SSHD" value="SSHD" onChange={changeDevis} />
              <Form.Check name="spec_storage" inline label="NVME" value="NVME" onChange={changeDevis} />
          <ErrorField error={error.specStorage[0]} />

          <Field label="Combien ?" name="spec_storage_quantity" value={dataSurvey.spec_storage_quantity} type="number" placeholder="- GO" handleChange={changeDevis} controlId="spec_storage_quantity" />
          <ErrorField error={error.specStorageQuantity[0]} />
        </Form>
      </div>

      <hr />

      <div>
        <h1>
          Pour parcourir le monde votre personnage n'a peut etre pas de pierre de teleportation, c'est toujours mieux mais pas toujours disponible.
          Dans ce cas cela serait peut etre une bonne idee de lui acheter une monture volante !
        </h1>
        <BinaryButtonField label="Voulez vous avoir le wifi?" name="spec_wifi" value={dataSurvey.spec_wifi} handleChange={changeDevis} />
        <ErrorField error={error.specWifi[0]} />
        { dataSurvey.spec_wifi && (
          <>
            <BinaryButtonField label="Si oui, etes vous dans la meme piece que votre box internet ?" name="spec_wifi_room" value={dataSurvey.spec_wifi_room} handleChange={changeDevis} />
            <ErrorField error={error.specWifiRoom[0]} />
            <BinaryButtonField label="Si oui, avez vous la fibre optique ?" name="spec_fiber" value={dataSurvey.spec_fiber} handleChange={changeDevis} />
            <ErrorField error={error.specFiber[0]} />
          </>
        ) }
      </div>

      <hr />

      <div>
        <h1>
          Votre personnage a peut etre des envies artistique? ou bien il veut pouvoir lire un livre de qualite !
          Pour cela il va lui falloir les bons instruments !
        </h1>
        <BinaryButtonField label="Voulez vous une carte son?" name="spec_sound" value={dataSurvey.spec_sound} handleChange={changeDevis} />
        <ErrorField error={error.specSound[0]} />
        {dataSurvey.spec_sound && (
          <>
            <Form.Label>Pour quel utilisation ?</Form.Label>
            <ErrorField error={error.specSoundUtilisation[0]} />
                <Form.Check name="spec_sound_utilisation" inline label="Jeux" value="Jeux"  onChange={changeDevis} />
                <Form.Check name="spec_sound_utilisation" inline label="Home cinéma" value="Home cinema" onChange={changeDevis} />
                <Form.Check name="spec_sound_utilisation" inline label="Musique" value="Musique" onChange={changeDevis} />
                <Form.Check name="spec_sound_utilisation" inline label="Autres" value="Autres" onChange={changeDevis} />
            <Field label="Veuillez préciser les autres utilisations" name="spec_sound_utilisation_other" value={dataSurvey.spec_sound_utilisation_other} type="name" placeholder="Précisez" handleChange={changeDevis} controlId="spec_sound_utilisation_other" />
          </>

        )}
      </div>

      <hr />

      <div>
        <h1>
          Tout est bon ! Il ne vous reste qu'a donner des indications d'esthetique pour votre votre personnage ou nous dire tout autres informations qui nous serait utile le concernant et vous serez quasiment au bout.
        </h1>
        <Field label="Voulez vous un design particulier sur votre tour ? (lumieres,led,couleur harmonieuse, ..)" name="spec_light" type="name" value={dataSurvey.spec_light} placeholder="Message" handleChange={changeDevis} controlId="spec_light" />
      </div>
      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step5;
