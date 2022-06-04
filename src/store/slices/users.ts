import { createSlice , createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';

const fetchUsers = createAsyncThunk(
    'users/fetch' ,
    async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
        return response.data
    }
)

const usersSlice = createSlice({
    name: 'users',
    initialState: {
      users: [],
    },
    reducers: {

    } ,
    extraReducers: (builder) => {
      builder.addCase(fetchUsers.fulfilled , (state , action) => {
        debugger
        console.log(action.payload)
        state.users = action.payload
      })
    },
  });


  // export const { getUsers } = usersSlice.actions;
  export { fetchUsers }
  
  export default usersSlice.reducer;