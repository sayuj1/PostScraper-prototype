import {
  GETUSER,
  SAVETOPICS,
  EDITABLEUSER,
  CLEAREDITABLEUSER
} from "./userTypes";

export const Get_User = () => {
  return {
    type: GETUSER
  };
};

export const Save_Topics = topics => {
  return {
    type: SAVETOPICS,
    payload: topics
  };
};

export const Editable_User = editUser => {
  return {
    type: EDITABLEUSER,
    payload: editUser
  };
};

export const Clear_Editable_User = () => {
  return {
    type: CLEAREDITABLEUSER
  };
};
