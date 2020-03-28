import { GETUSER, SAVETOPICS } from "./userTypes";

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
