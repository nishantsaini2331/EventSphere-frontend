import { createSlice } from "@reduxjs/toolkit";

const favoriteSlice = createSlice({
  name: "favorites",
  initialState: {
    items: [],
  },
  reducers: {
    toggleFavorites(state, action) {
      const event = action.payload;
      const existingEvent = state.items.find(
        (e) => (e.id || e._id) === (event.id || event._id),
      );
      if (existingEvent) {
        // remove
        state.items = state.items.filter(
          (e) => (e.id || e._id) !== (event.id || event._id),
        );
      } else {
        state.items.push(event);
      }
    },
    removeFavorites(state) {},
    clearFavorties(state) {
      state.items = []
    },
  },
});

export const { toggleFavorites, removeFavorites, clearFavorties } =
  favoriteSlice.actions;

export default favoriteSlice.reducer; // connect with store
