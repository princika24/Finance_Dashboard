export default function formatDate(date){
    // console.log(date);
    return new Intl.DateTimeFormat(
        "en-IN",
        {
            day:"numeric",
            month:"short",
            year:"numeric"
        }
    ).format(new Date(date))
}