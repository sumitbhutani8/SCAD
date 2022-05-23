
import {createSlice } from '@reduxjs/toolkit';

const slice = createSlice({

name: "testing",
initialState: {
    details: {
        name: "",
        age: 0,
        degree: "B.Tech"
    },
    currentUser: {},
    loading: false

},
reducers: {
    detailsRequested : (testing, action) =>{
        testing.loading = true;
    },
    fetchDetails: (testing, action) => {
        var test = action.payload;
        testing.details.name= test.name;
        testing.details.age=  test.age;
        testing.details.degree= test.degree;
    },

    setDetails: (testing, action) => {
        var test = action.payload;
        testing.details = test.selectedDetails;
        // testing.details.age=  test.selectedDetails.age;
        // testing.details.degree= test.selectedDetails.degree;
    }

}


});
export const { detailsRequested, fetchDetails, setDetails } = slice.actions;
export default slice.reducer;