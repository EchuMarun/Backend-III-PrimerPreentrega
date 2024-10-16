export const transformSinglePet = pet => {
  const { name, specie, adopted } = pet;
  return {
    name,
    specie,
    adopted,
  };
};
export const transformArrayPets = array => {
  const transformedArray = array.map(p => {
    return transformSinglePet(p);
  });
  return transformedArray;
};
