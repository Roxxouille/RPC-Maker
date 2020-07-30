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

export class UserForm extends Component {
  state = {
    step: 1,
    surname: '',
    budget: '',
    gap: '',
    utilisation: '',
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
    spec_sli: '',
    spec_overclock: '',
    spec_storage: '',
    spec_storage_quantity: '',
    spec_wifi: '',
    spec_wifi_room: '',
    spec_fiber: '',
    spec_sound: '',
    spec_sound_utilisation: '',
    spec_sound_utilisation_other: '',
    spec_light: '',

  };

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

   // Handle fields change
   handleChange = (input) => (e) => {
     this.setState({ [input]: e.target.value });
   };

   CheckContent = (input) => (e) => {
     this.setState({ [input]: e.target.name });
   };

   render() {
     const { step } = this.state;
     const {
       surname,
       utilisation,
       other_utilisation,
       budget,
       gap,
       config_proc,
       config_proc_model,
       config_proc_link,
       config_board,
       config_board_model,
       config_board_link,
       config_gc,
       config_gc_model,
       config_gc_link,
       config_ram,
       config_ram_model,
       config_ram_link,
       config_refresh,
       config_refresh_model,
       config_refresh_link,
       config_storage,
       config_storage_model,
       config_storage_link,
       config_boardsound,
       config_boardsound_model,
       config_boardsound_link,
       config_case,
       config_case_model,
       config_case_link,
       config_power,
       config_power_model,
       config_power_link,
       spec_important,
       spec_sli,
       spec_overclock,
       spec_storage,
       spec_storage_quantity,
       spec_wifi,
       spec_wifi_room,
       spec_fiber,
       spec_sound,
       spec_sound_utilisation,
       spec_sound_utilisation_other,
       spec_light,
     } = this.state;
     const values = {
       surname,
       utilisation,
       other_utilisation,
       budget,
       gap,
       config_proc,
       config_proc_model,
       config_proc_link,
       config_board,
       config_board_model,
       config_board_link,
       config_gc,
       config_gc_model,
       config_gc_link,
       config_ram,
       config_ram_model,
       config_ram_link,
       config_refresh,
       config_refresh_model,
       config_refresh_link,
       config_storage,
       config_storage_model,
       config_storage_link,
       config_boardsound,
       config_boardsound_model,
       config_boardsound_link,
       config_case,
       config_case_model,
       config_case_link,
       config_power,
       config_power_model,
       config_power_link,
       spec_important,
       spec_sli,
       spec_overclock,
       spec_storage,
       spec_storage_quantity,
       spec_wifi,
       spec_wifi_room,
       spec_fiber,
       spec_sound,
       spec_sound_utilisation,
       spec_sound_utilisation_other,
       spec_light,
     };

     switch (step) {
       case 1:
         return (
          <Step1
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
         );
       case 2:
         return (
           <Step2
             nextStep={this.nextStep}
             prevStep={this.prevStep}
             handleChange={this.handleChange}
             values={values}
           />
         );
       case 3:
         return (
            <Step3
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              CheckContent={this.CheckContent}
              values={values}
            />
         );
       case 4:
         return (
             <Step4
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={values}
             />
         );
       case 5:
         return (
            <Step5
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              CheckContent={this.CheckContent}
              values={values}
            />
         );
       case 6:
         return (
             <Step6
               nextStep={this.nextStep}
               prevStep={this.prevStep}
               handleChange={this.handleChange}
               values={values}
             />
         );
       case 7:
         return (
              <Step7
                nextStep={this.nextStep}
                prevStep={this.prevStep}
                handleChange={this.handleChange}
                values={values}
              />
         );
       case 8:
         return (
               <Inscription
                 nextStep={this.nextStep}
                 prevStep={this.prevStep}
                 handleChange={this.handleChange}
                 values={values}
               />
         );
     }
   }
}

export default UserForm;
