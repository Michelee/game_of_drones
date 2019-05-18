export default (error) => {
  const { status } = error.response;
  switch (status) {
    case 404:
      return "The resource you requested could not be found.";
    default:
      return "There was an unexpected error, try again";
  }
};
