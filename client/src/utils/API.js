import axios from "axios";

export default {
    getGoogleBooks: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyC8HgxWw_D8vcTmt9eWVBMvWhfqleJHskQ")
    }
};

//Double check API key?????????????????????