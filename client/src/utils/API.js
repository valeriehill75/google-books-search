import axios from "axios";

export default {
    getGoogleBooks: function () {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=&key=AIzaSyC8HgxWw_D8vcTmt9eWVBMvWhfqleJHskQ")
    },
    getBook: function(id) {
        return axios.get("/api/books/" + id);
    },
    //Delete Book
    deleteBook: function(id) {
        return axios.delete("/api/books/" + id)
    },
    //Save Book
    saveBook: function(bookData) {
        return axios.post("/api/books", bookData);
    }
};

//Double check API key?????????????????????