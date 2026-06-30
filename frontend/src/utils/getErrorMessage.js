export default function getErrorMessage(error) {

    if (error.response?.data?.detail) {

        return error.response.data.detail;
    }

    return "Something went wrong.";
}