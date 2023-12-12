const asyncHandler = require("express-async-handler");

const { BadRequestError } = require("../errors/errors");
const Contact = require("../models/contact.model");

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ msg: "Get all contacts!" });
});

//@desc Get a contact
//@route GET /api/contact/:id
//@access public
const getContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findById(id);
  res.status(200).json({ success: true, data });
});

//@desc Create a contact
//@route POST /api/contacts
//@access public
const createContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;

  console.log(name, email, phone);

  if (!name || !email || !phone) {
    throw new BadRequestError("All fields are mandatory!");
  }

  const contact = await Contact.create({
    name,
    email,
    phone,
  });

  res.status(201).json({ msg: "Contact created!", data: { ...contact } });
});

module.exports = { getAllContacts, createContact, getContact };