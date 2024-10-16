import bcrypt from 'bcrypt';

export const hashPassword = password => {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

export const validatePassword = (userPassword, passwordDataBase) => {
  return bcrypt.compareSync(userPassword, passwordDataBase);
};
