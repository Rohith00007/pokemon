import {createSlice} from '@reduxjs/toolkit';

const counter = createSlice({
    name:'counter',
    initialState:{
        //id=1,
        value: 0,
        name:'',
        description:'',
        popUp:false,
        allValues:[]
    },
    reducers:{
        increment : (state) =>{state.value += 1},
        decrement : (state) =>{state.value += 1},
        setStoreName : (state,action) =>   {
                    state.name = action.payload.name;
                    state.Description = action.payload.description;
    },
     clearName : (state)=>{
        state.name = "";
        state.Description = "";
     },
     setPopUp: (state,action) =>{
        state.popUp = action.payload.popUp;
     },
     setallValues: (state, action) => {
        const newId = state.allValues.length + 1;
        state.allValues.push({
          id: newId,
          name: action.payload.name,
          description: action.payload.description,
        });
      },
    },
});

export const {increment,decrement,setStoreName,clearName ,setPopUp,setallValues} = counter.actions;
export default counter.reducer;
