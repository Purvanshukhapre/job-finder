const myData = [];

export const changeCart = (state = myData, action) => {
  switch (action.type) {
    case "ADD":
      if (!action.payload || !action.payload.id) {
        console.warn("ADD action received with invalid payload:", action.payload);
        return state;
      }
      else{
        const check = state.find(job => job.id === action.payload.id);
        if (check){
            return state;
        }
        else{
            return [...state, action.payload];
        }
      }

    case "REMOVE":
      return state.filter(job => job.id !== action.payload);

    default:
      return state;
  }
}
