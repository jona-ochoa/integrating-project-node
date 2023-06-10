const infoCleaner = (array) => {
  return array.map((element) => {
    return {
      name: element.name,
      email: element.email,
      phone: element.phone,
      created: false,
    };
  });
}

module.exports = infoCleaner;
