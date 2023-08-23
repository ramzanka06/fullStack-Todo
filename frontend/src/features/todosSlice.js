import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const defaultState = {
  todos: [],
  error: null,
  loading: false,
};

export const fetchTodo = createAsyncThunk(
  "todos/fetchTodo",
  async (data, thunkAPI) => {
    try {
      const res = await fetch("http://localhost:3000/todo");
      const todo = await res.json();

      return todo;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const removeTodo = createAsyncThunk(
  "remove/todo",
  async (id, thunkAPI) => {
    try {
      const res = await fetch(
        `http://localhost:3000/todo/${id.id}`,
        {
          method: "DELETE",
          // headers: {
          //   "Content-Type": "application/json",
          // },
          // body: JSON.stringify({ title: }),
        },
      )
      if (res.ok) {
        return id;
      }
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const todosSlice = createSlice({
  name: "Todo",
  initialState: defaultState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodo.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.loading = false;
      })
      .addCase(fetchTodo.rejected, (state, action) => {
        state.error = action.payload.message;
        state.loading = fasle;
      })
      .addCase(fetchTodo.pending, (state) => {
        state.loading = true;
      })
      .addCase(removeTodo.fulfilled, (state, action) => {
        state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        state.loading = false;
      })
      .addCase(removeTodo.pending, (state, action) => {
        state.todos = state.todos.map((todo) => {
          if (todo.id === action.meta.arg) {
            todo.loading = true;
          }
          return todo
        });
      });
  },
});
export default todosSlice.reducer;
