import Joi from "joi";

export const validateCreateUser = (user: unknown) => {
  const userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    firstName: Joi.string().min(2).required(),
    lastName: Joi.string().min(2).required(),
    role: Joi.string().required(),
    username: Joi.string().alphanum().min(3).max(30).required(),
    profilePic: Joi.string().optional(),
  });

  return userSchema.validate(user);
};

export const validateCreateLawyer = (user: unknown) => {
  const userSchema = Joi.object({
    qualification: Joi.string().required(),
    specialization: Joi.string().required(),
    experience: Joi.string().min(10).max(1000).required(),
    location: Joi.string().required(),
  });

  return userSchema.validate(user);
};

export const validateLogin = (credentials: unknown) => {
  const loginSchema = Joi.object({
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
  });

  return loginSchema.validate(credentials);
};

export const validateEmail = (credentials: unknown) => {
  const loginSchema = Joi.object({
    email: Joi.string().required(),
  });

  return loginSchema.validate(credentials);
};

export const validateNewPassword = (credentials: unknown) => {
  const loginSchema = Joi.object({
    otp: Joi.number().required(),
    password: Joi.string().min(6).required(),
  });

  return loginSchema.validate(credentials);
};
