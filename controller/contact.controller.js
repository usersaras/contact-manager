const asyncHandler = require("express-async-handler");
const { BadRequestError } = require("../errors/errors");
const Contact = require("../models/contact.model");
const { StatusCodes } = require("http-status-codes");
const logger = require("../config/logger");
const ObjectId = require("mongodb").ObjectId;

//@desc Get all contacts
//@route GET /api/contacts
//@access public
const getAllContacts = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ msg: "Get all contacts!" });
});

//@desc Get a contact
//@route GET /api/contacts/:id
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

//@desc Update a contact
//@route PUT /api/contacts/:id
//@access public
const updateContact = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, email, phone } = req.body;

  const contact = await Contact.findById(id);
  if (!contact) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: `Cannot find contact with id ${id}!` });
    return;
  }

  const updt = await Contact.findByIdAndUpdate(
    id,
    { name, email, phone },
    { new: true }
  );

  res
    .status(StatusCodes.CREATED)
    .json({ success: true, message: `Updated contact for id ${id}!` });
});

//@desc Delete a contact
//@route DELETE /api/contacts/:id
//@access public
const deleteContact = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const contact = await Contact.findById(id);
  if (!contact) {
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ success: false, message: `Cannot find contact with id ${id}!` });
    return;
  }

  const del = await Contact.deleteOne({
    _id: new ObjectId(id),
  });

  if (del.deletedCount === 1) {
    res
      .status(StatusCodes.CREATED)
      .json({ success: true, message: `Deleted contact of id ${id}!` });
  } else {
    throw new Error(`Could not delete contact of id ${id}! `);
  }
});

module.exports = {
  getAllContacts,
  createContact,
  getContact,
  updateContact,
  deleteContact,
};
