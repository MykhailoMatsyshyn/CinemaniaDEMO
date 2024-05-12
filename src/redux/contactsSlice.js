// import { createSlice, nanoid } from "@reduxjs/toolkit";

// const contactsInitialState = {
//   items: [
//     { id: nanoid(), name: "Rosie Simpson", number: "459-12-56" },
//     { id: nanoid(), name: "Hermione Kline", number: "443-89-12" },
//     { id: nanoid(), name: "Eden Clements", number: "645-17-79" },
//     { id: nanoid(), name: "Annie Copeland", number: "227-91-26" },
//   ],
// };

// const contactsSlice = createSlice({
//   name: "contacts",
//   initialState: contactsInitialState,
//   reducers: {
//     addContact: {
//       reducer(state, action) {
//         state.items.push(action.payload);
//       },
//       prepare(contact) {
//         return {
//           payload: {
//             ...contact,
//             id: nanoid(),
//           },
//         };
//       },
//     },
//     deleteContact(state, action) {
//       const index = state.items.findIndex(
//         (contact) => contact.id === action.payload
//       );
//       state.items.splice(index, 1);
//     },
//   },
// });

// export const selectContacts = (state) => state.contacts.items;
// export const { addContact, deleteContact } = contactsSlice.actions;
// export default contactsSlice.reducer;
