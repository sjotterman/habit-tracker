export const currentDateTime = () => {
    var today = new Date();
    const currentDateTime = formatDateShort(today);
    return currentDateTime;
}

export const formatDateShort = (date) => {
    var dd = date.getDate();
    var mm = date.getMonth() + 1; //January is 0!
    var yyyy = date.getFullYear();

    if (dd < 10) {
        dd = '0' + dd;
    }

    if (mm < 10) {
        mm = '0' + mm;
    }
    const currentDateTime = `${yyyy}-${mm}-${dd}`;
    return currentDateTime;

}