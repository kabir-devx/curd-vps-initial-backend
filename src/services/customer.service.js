const httpStatus = require("http-status");
const { User } = require("../models");
const ApiError = require("../utils/ApiError");
const { sendEmailVerification } = require("./email.service");
const unlinkImages = require("../common/unlinkImage");

const createCustomer = async (customerBody) => {

  return User.create({ ...customerBody, oneTimeCode });
};


  

module.exports = {
  createCustomer,
};