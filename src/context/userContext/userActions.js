import {
  GETUSER,
  SAVETOPICS,
  EDITABLEUSER,
  CLEAREDITABLEUSER,
  SAVEAVATAR,
  REMOVEAVATAR
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

export const Save_Avatar = userAvatar => {
  return {
    type: SAVEAVATAR,
    payload: userAvatar
  };
};

export const Remove_Avatar = () => {
  return {
    type: REMOVEAVATAR
  };
};
