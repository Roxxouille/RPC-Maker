import { CHANGE_ARRAY_DEVIS, CHANGE_DEVIS, CHANGE_STEP_STATE, SET_ERROR_STEP } from '../actions/devis';

export const initialState = {
  dataSurvey: {
    step: 1,
    budget: false,
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
    spec_storage_quantity: null,
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
    device_screen: '',
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
    device_mouse_filaire: '',
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
    device_enceinte_bass: '',
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
    city: '',
    zip_code: null,
  },
  fail: {
    budget: [''],
    amount: [''],
    gap: [''],
    utilisation: [''],
    utilisationDetails: [''],
    preconfiguration: [''],
    oschoice: [''],
    configProc: [''],
    configProcModel: [''],
    configProcLink: [''],
    configBoard: [''],
    configBoardModel: [''],
    configBoardLink: [''],
    configGc: [''],
    configGcModel: [''],
    configGcLink: [''],
    configRam: [''],
    configRamModel: [''],
    configRamLink: [''],
    configRefresh: [''],
    configRefreshModel: [''],
    configRefreshLink: [''],
    configStorage: [''],
    configStorageModel: [''],
    configStorageLink: [''],
    configBoardsound: [''],
    configBoardsoundModel: [''],
    configBoardsoundLink: [''],
    configCase: [''],
    configCaseModel: [''],
    configCaseLink: [''],
    configPower: [''],
    configPowerModel: [''],
    configPowerLink: [''],
    specSli: [''],
    specOverclock: [''],
    specStorage: [''],
    specStorageQuantity: [''],
    specWifi: [''],
    specWifiRoom: [''],
    specFiber: [''],
    specSound: [''],
    specLight: [''],
    specImportant: [''],
    specSoundUtilisation: [''],
    specSoundUtilisationOther: [''],
    os: [''],
    osName: [''],
    osActive: [''],
    osChoice: [''],
    device: [''],
    deviceScreen: [''],
    deviceScreenModel: [''],
    deviceScreenLink: [''],
    deviceScreenSize: [''],
    deviceScreenRes: [''],
    deviceKeyboard: [''],
    deviceKeyboardModel: [''],
    deviceKeyboardLink: [''],
    deviceKeyboardType: [''],
    deviceKeyboardSwitch: [''],
    deviceKeyboardLanguage: [''],
    deviceMouse: [''],
    deviceMouseModel: [''],
    deviceMouseLink: [''],
    deviceMouseType: [''],
    deviceMouseFilaire: [''],
    deviceMousepad: [''],
    deviceMousepadModel: [''],
    deviceMousepadLink: [''],
    deviceMousepadType: [''],
    deviceMousepadSize: [''],
    deviceHeadphone: [''],
    deviceHeadphoneModel: [''],
    deviceHeadphoneLink: [''],
    deviceHeadphoneType: [''],
    deviceHeadphoneSize: [''],
    deviceEnceinte: [''],
    deviceEnceinteModel: [''],
    deviceEnceinteLink: [''],
    deviceEnceinteType: [''],
    deviceEnceinteBass: [''],
    deviceWebcam: [''],
    deviceWebcamModel: [''],
    deviceWebcamLink: [''],
    deviceWebcam_res: [''],
    devicePrinter: [''],
    devicePrinterModel: [''],
    devicePrinterLink: [''],
    devicePrinterType: [''],
    username: [''],
    firstname: [''],
    lastname: [''],
    email: [''],
    password: [''],
    adress: [''],
    inscr_adress2: [''],
    city: [''],
    zip_code: [''],
  },
  currentStep: 1,
};

const devis = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_DEVIS:
      let value;
      if (action.value === 'false') {
        value = false;
      }
      else if (action.value === 'true') {
        value = true;
      }
      else {
        value = action.value;
      }
      if (action.name === 'zip_code') {
        value = parseInt(action.value);
      }
      return {
        ...state,
        dataSurvey: {
          ...state.dataSurvey,
          [action.name]: value,
        },
      };
    case CHANGE_STEP_STATE:
      return {
        ...state,
        dataSurvey: {
          ...state.dataSurvey,
          step: action.step,
        },
      };
    case SET_ERROR_STEP:
      return {
        ...state,
        fail: {
          ...state.fail,
          ...action.error,
        },
      };
    case CHANGE_ARRAY_DEVIS:
      /* const utilisation = state.utilisation;
      const index = utilisation.find(action.value);
      if(index === undefined){
        utilisation.push(action.value);
      } else {
        utilisation.splice(index, 1, action.value);
      } */ /*
      const configComponents = state.dataSurvey.config_components;
      const index = configComponents.find(action.name);
      if(index === undefined){
        configComponents.push(action.value);
      } else {
        configComponents.splice(index, 1, action.value);
      } */ 
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default devis;
