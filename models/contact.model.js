const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Contact name cannot be empty!"],
    },
    email: {
      type: String,
      required: [true, "Email name cannot be empty!"],
    },
    phone: {
      type: String,
      required: [true, "Phone number name cannot be empty!"],
    },
    created_by_user_id: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "user",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("contact", contactSchema);
