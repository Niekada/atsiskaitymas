import axios from "axios";

export const fetchItems = (
): any => {
    return axios
        .get(`https://react-test-sejo6.ondigitalocean.app/v1/content/skills/?id=${process.env.REACT_APP_UNSPLASH_KEY}`)
        .then((response) => response)
};