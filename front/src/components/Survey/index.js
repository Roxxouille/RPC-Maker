/* eslint-disable default-case */
/* eslint-disable react/jsx-indent */
import React, { Component } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Step6 from './Step6';
import Step7 from './Step7';
import Inscription from './inscription';
import './styles.scss';
import axios from 'axios';

export class UserForm extends Component {
  state = {
    step: 1,
    budget: null,
    amount: null,
    gap: null,
    utilisation: '',
    utilisation_details: '',
    preconfiguration: null,
    oschoice: null,
    config_proc: '',
    config_proc_model: '',
    config_proc_link: '',
    config_board: '',
    config_board_model: '',
    config_board_link: '',
    config_gc: '',
    config_gc_model: '',
    config_gc_link: '',
    config_ram: '',
    config_ram_model: '',
    config_ram_link: '',
    config_refresh: '',
    config_refresh_model: '',
    config_refresh_link: '',
    config_storage: '',
    config_storage_model: '',
    config_storage_link: '',
    config_boardsound: '',
    config_boardsound_model: '',
    config_boardsound_link: '',
    config_case: '',
    config_case_model: '',
    config_case_link: '',
    config_power: '',
    config_power_model: '',
    config_power_link: '',
    spec_sli: null,
    spec_overclock: null,
    spec_storage: '',
    spec_storage_quantity: parseInt(''),
    spec_wifi: null,
    spec_wifi_room: null,
    spec_fiber: null,
    spec_sound: null,
    spec_light: '',
    spec_important: '',
    spec_sound_utilisation: '',
    spec_sound_utilisation_other: '',
    os: null,
    os_name: '',
    os_active: null,
    os_choice: '',
    device: null,
    device_screen: null,
    device_screen_model: '',
    device_screen_link: '',
    device_screen_size: '',
    device_screen_res: '',
    device_keyboard: '',
    device_keyboard_model: '',
    device_keyboard_link: '',
    device_keyboard_type: '',
    device_keyboard_switch: '',
    device_keyboard_language: '',
    device_mouse: '',
    device_mouse_model: '',
    device_mouse_link: '',
    device_mouse_type: '',
    device_mouse_filaire: null,
    device_mousepad: '',
    device_mousepad_model: '',
    device_mousepad_link: '',
    device_mousepad_type: '',
    device_mousepad_size: '',
    device_headphone: '',
    device_headphone_model: '',
    device_headphone_link: '',
    device_headphone_type: '',
    device_headphone_size: '',
    device_enceinte: '',
    device_enceinte_model: '',
    device_enceinte_link: '',
    device_enceinte_type: '',
    device_enceinte_bass: null,
    device_webcam: '',
    device_webcam_model: '',
    device_webcam_link: '',
    device_webcam_res: '',
    device_printer: '',
    device_printer_model: '',
    device_printer_link: '',
    device_printer_type: '',
    username: '',
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    adress: '',
    inscr_adress2: '',
    city: '',
    zip_code: parseInt(''),
    fail: [],
  };

  // Gerer les pages dynamiques
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

   // Handle pour un int
   handleChange = (input) => (e) => {
     this.setState({ [input]: e.target.value });
   };

   // Handle pour un nombre
   handleAsNumber = (input) => (e) => {
     this.setState({ [input]: e.target.valueAsNumber });
   };

   // Envoi vers le back
   handleSubmit = (event) => {
     alert(`formulaire envoyer ! : ${this.state}`);

     axios.post('http://localhost:3000/user', { ...this.state })
       .then((response) => {
         console.log(response);
         return response.json();
       })
       .catch((error) => {
         console.log(error.response);
         const fail = error.response.data;
         console.log(fail);
         this.setState({ fail });
       });
     event.preventDefault();
   }

   // handle pour les checkbox

   CheckContent = (input) => (e) => {
     this.setState({ [input]: e.target.name });
   };

   //Check true False

   CheckContentFalse = (input) => (e) => {
     this.setState({ [input]: false });
   };

   CheckContentTrue = (input) => (e) => {
     this.setState({ [input]: true });
   };

   render() {
     const { step } = this.state;

     switch (step) {
       case 1:
         return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
          />
         );
       case 2:
         return (
           <Step2
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             CheckContentFalse={this.CheckContentFalse}
             CheckContentTrue={this.CheckContentTrue}
           />
         );
       case 3:
         return (
            <Step3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              CheckContent={this.CheckContent}
              CheckContentFalse={this.CheckContentFalse}
              CheckContentTrue={this.CheckContentTrue}
            />
         );
       case 4:
         return (
             <Step4
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
             />
         );
       case 5:
         return (
            <Step5
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              CheckContent={this.CheckContent}
              CheckContentFalse={this.CheckContentFalse}
              CheckContentTrue={this.CheckContentTrue}
              handleAsNumber={this.handleAsNumber}
            />
         );
       case 6:
         return (
             <Step6
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               CheckContent={this.CheckContent}
               CheckContentFalse={this.CheckContentFalse}
               CheckContentTrue={this.CheckContentTrue}
             />
         );
       case 7:
         return (
              <Step7
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                CheckContent={this.CheckContent}
                CheckContentFalse={this.CheckContentFalse}
                CheckContentTrue={this.CheckContentTrue}
              />
         );
       case 8:
         return (
          <Inscription
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            CheckContent={this.CheckContent}
            CheckContentFalse={this.CheckContentFalse}
            CheckContentTrue={this.CheckContentTrue}
            handleSubmit={this.handleSubmit}
            handleAsNumber={this.handleAsNumber}
          />
         );
     }
   }
}

export default UserForm;
