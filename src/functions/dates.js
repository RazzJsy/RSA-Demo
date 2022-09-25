export function localDate (date) {
    return new Date(date).toLocaleDateString(navigator.language);
}