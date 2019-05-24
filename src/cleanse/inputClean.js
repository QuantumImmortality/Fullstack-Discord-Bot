/**
 * Mozzila helper function for dealing with metacharacters
 * @param str the string to search
 * @returns {void | string | *}
 */
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}

/**
 * Replace all occurrences of a sequence in a string with a desired sequence
 * @param str the string to search
 * @param find sequence to replace
 * @param replace the replacement sequence
 * @returns {void | string | *}
 */
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

module.exports = {
    replaceAll:replaceAll
};