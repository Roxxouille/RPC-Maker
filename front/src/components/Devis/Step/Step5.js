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
        <h2>Qui est votre personnage ?</h2>
      </div>
      <div>
        <h1>
          Aaah on arrive à un moment très important dans la vie de votre personnage, qui est-il ? Que peut-il faire ? Quelle sera son histoire? Pour quels types d'aventures sera t-il taillé ?
          <br />
          <br />
          Tant de question sans réponse, mais qui en auront bientôt pour que l'on puisse créer votre personnage et qu'il corresponde au mieux à vous et à ce que vous avez imaginé pour lui !
          <br />
          <br />
          Plus vous mettrez d'informations et plus votre personnage sera à l'effigie de ce que vous pensez être le mieux pour lui, donc allez y franco, n'ayez pas peur !
        </h1>
      </div>

      <hr />

      <div>
        <h1>De quelle classe sera votre personnage ?</h1>
        <Form>
          <Form.Check inline name="spec_important" label="Silencieux" value="Le silence" onChange={changeDevis} />
          <Form.Check inline name="spec_important" label="Un juste milieu" value="Un juste milieu" onChange={changeDevis} />
          <Form.Check inline name="spec_important" label="Puissant" value="Les performances" onChange={changeDevis} />
        </Form>
        <ErrorField error={error.specImportant[0]} />
      </div>

      <hr />

      <div>
        <h1>En fonction des batailles que votre personnage va mener, il peut avoir besoin de la maîtrise double lame qui lui permettra d'aller au devant du danger avec plus d'assurance !</h1>
        <BinaryButtonField label="Voulez vous faire un SLI?" name="spec_sli" value={dataSurvey.spec_sli} handleChange={changeDevis} />
        <ErrorField error={error.specSli[0]} />
      </div>

      <hr />

      <div>
        <h1>
          Dans des moments très stratégiques ou pour des prises de décisions importantes, pour un ultime effort ou pour affronter des ennemis plus fort que prévu,
          votre personnage pourrait avoir besoin de la maîtrise berserk qui lui permettra d'avoir un boost de compétence !
        </h1>
        <BinaryButtonField label="Voulez vous pouvoir effectuer de l'overclocking ?" name="spec_overclock" value={dataSurvey.spec_overclock} handleChange={changeDevis} />
        <ErrorField error={error.specOverclock[0]} />
      </div>

      <hr />

      <div>
        <h1>
          Tout au long de son aventure, votre personnage voudra sûrement écrire son récit quelque part, garder sur un parchemin des informations essentielles à ses prochaines quêtes, éventuellement garder des souvenirs de ses rencontres !
          <br />
          Peut-être même qu'il aura sa propre grosse bibliothèque !
        </h1>
        <Form>
          <Form.Label>Quel type de stockage voulez vous ?</Form.Label>
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
          Pour parcourir le monde, votre personnage n'a peut-être pas de pierre de téléportation, c'est toujours mieux mais pas toujours disponible.
          Dans ce cas, cela serait peut-être une bonne idée de lui acheter une monture volante !
        </h1>
        <BinaryButtonField label="Voulez vous avoir le wifi?" name="spec_wifi" value={dataSurvey.spec_wifi} handleChange={changeDevis} />
        <ErrorField error={error.specWifi[0]} />
        { dataSurvey.spec_wifi && (
          <>
            <BinaryButtonField label="Êtes vous dans la même pièce que votre box internet ?" name="spec_wifi_room" value={dataSurvey.spec_wifi_room} handleChange={changeDevis} />
            <ErrorField error={error.specWifiRoom[0]} />
            <BinaryButtonField label="Avez vous la fibre optique ?" name="spec_fiber" value={dataSurvey.spec_fiber} handleChange={changeDevis} />
            <ErrorField error={error.specFiber[0]} />
          </>
        ) }
      </div>

      <hr />

      <div>
        <h1>
          Votre personnage à peut-être des envies artistique ? Ou bien il veut pouvoir lire un livre de qualité !
          Pour cela il va lui falloir les bons instruments !
        </h1>
        <BinaryButtonField label="Voulez vous une carte son?" name="spec_sound" value={dataSurvey.spec_sound} handleChange={changeDevis} />
        <ErrorField error={error.specSound[0]} />
        {dataSurvey.spec_sound && (
          <>
            <Form.Label>Pour quelle utilisation ?</Form.Label>
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
          Tout est bon ! Il ne vous reste qu'à donner des indications d'esthétique pour votre personnage ou nous dire tout autres informations qui nous serait utile le concernant et vous serez quasiment au bout.
        </h1>
        <Field label="Voulez-vous un design particulier sur votre tour ? (lumières, led, couleurs harmonieuses, ..)" name="spec_light" type="name" value={dataSurvey.spec_light} placeholder="Message" handleChange={changeDevis} controlId="spec_light" />
      </div>
      <ChangeStepButton step={dataSurvey.step} changeStep={changeStep} />
    </div>
  );
};

export default Step5;
