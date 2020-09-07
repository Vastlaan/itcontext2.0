export const respond = (type: string, content: string): string | undefined => {
    if (type === "s") {
        return `@media only screen and (min-width: 576px){
    ${content}
  }`;
    } else if (type === "m") {
        return `@media only screen and (min-width: 780px){
    ${content}
  }`;
    } else if (type === "l") {
        return `@media only screen and (min-width: 1050px){
    ${content}
  }`;
    } else if (type === "xxl") {
        return `@media only screen and (min-width: 1662px){
    ${content}
  }`;
    }
};
