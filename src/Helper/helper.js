export const generateUniqueID = () => {
    const timestamp = Date.now().toString(16); // Get the current timestamp in hexadecimal
    const randomNum = Math.random().toString(16).slice(2); // Get a random number in hexadecimal

    return `${timestamp}-${randomNum}`;
}

export const stripHtmlTags = (htmlString) => {
    const regex = /<[^>]*>/g;
    return htmlString.replace(regex, '');
  }