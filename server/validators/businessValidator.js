import { isEmpty } from 'lodash';
import Validator from 'validator';

export const verifyInput = (req, res, next) => {
  const {
    name, description, location, category
  } = req.body;

  const error = {};

  if (!name) {
    error.name = 'Name is required';
  }

  if (name && Validator.isEmpty(name.trim() || '')) {
    error.name = 'Name is required';
  }

  if (!description) {
    error.description = 'Description for is required';
  }

  if (description && Validator.isEmpty(description.trim() || '')) {
    error.description = 'Description for is required';
  }

  if (!location) {
    error.location = 'Location is required';
  }

  if (location && Validator.isEmpty(location.trim() || '')) {
    error.ingredients = 'Location is required';
  }

  if (!category) {
    error.category = 'Category is required';
  }

  if (category && Validator.isEmpty(category.trim() || '')) {
    error.category = 'Category is required';
  }

  if (isEmpty(error)) return next();
  return res.status(400).json({ error });
};

export const verifyLenght = (req, res, next) => {
  const {
    name, description, location, category
  } = req.body;

  // Check for Lenght
  if (!Validator.isLength(name, { min: 3, max: 30 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'Business name should be between 3 to 30 characters',
      });
  }
  // Check for Lenght
  if (!Validator.isLength(description, { min: 10, max: 200 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'Description must be between 10 to 200 characters',
      });
  }
  // Check for Lenght
  if (!Validator.isLength(location, { min: 3, max: 30 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'Location should be between 3 to 30 characters',
      });
  }
  // Check for Lenght
  if (!Validator.isLength(category, { min: 3, max: 30 })) {
    res.status(406)
      .send({
        status: 'Fail',
        message: 'Category should be between 3 to 30 characters',
      });
  }
  next();
};

export const verifyId = (req, res, next) => {
  const { id } = req.params;

  const error = {};

  if (Number.isNaN(parseInt(id, 10))) {
    error.id = 'The Id must be a number';
  }

  if (isEmpty(error)) return next();
  return res.status(400).json({ error });
};
