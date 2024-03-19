import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const usersSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

usersSchema.plugin(uniqueValidator);

const Users = mongoose.model("Users", usersSchema);

export default Users;
