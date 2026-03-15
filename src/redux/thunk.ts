import { createAsyncThunk } from '@reduxjs/toolkit'

export const fetchUserById = createAsyncThunk('user/fetchById', async (_, thunkAPI) => {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1').then((res) => res.json())
  console.log(response)
  return response
})
