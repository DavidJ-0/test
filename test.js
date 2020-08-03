import * as types from "../../actions/mutation_type";

const initHomeStore = {
  homeName: "sdfasdf",
};

const mutation = {
  [types.QUERY_HOME_NAME](state, action) {
    return { ...state };
  },
  [types.UPDATE_HOME_NAME](state, action) {
    return {
      ...state,
      homeName: action.payload,
    };
  },
};
//这是一个函数
export default function (state = initHomeStore, action) {
  if (!mutation[action.type]) return state;
  return mutation[action.type](state, action);
}
