const messagereducers = (state, action) => {
    let draftstate = [...state];
  switch (action.type) {
    case "addmessage":
      return  [...draftstate, action.payload];
    // case "deletemessage":
    //   return {
    //     messages: state.messages.filter((message) => message.id !== action.payload),
    //   };
    default:
      return state;
  }
};

export default messagereducers;