//Ducks pattern
// import a function and a type 
 
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 10,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    //increment
    incremented(state){
      state.value++
    },
    //decrement
    decremented(state){
      state.value--
    },
    //reset
    reseted(state){
      state.value = 0;
    },
    //add amount
    amountAdded(state, action: PayloadAction<number>){
      state.value += action.payload
    }
  }
})

export const { incremented, amountAdded } =  counterSlice.actions;
export default counterSlice.reducer;