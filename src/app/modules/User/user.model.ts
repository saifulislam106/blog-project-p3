/* eslint-disable @typescript-eslint/no-this-alias */


import { model, Schema } from 'mongoose';
import { TName, TUser } from './user.interface';
import config from '../../config';
import bcrypt from 'bcrypt';

export const userNameSchema = new Schema<TName>({
  firstName: {
    type: String,
    required: [true, 'First Name is required'],
    trim: true,
  },
  middleName: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, 'Last Name is required'],
    trim: true,
  },
});

export const userSchema = new Schema<TUser>({
  name: {
    type: userNameSchema,
    required: [true, 'Name is required'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    validate: {
      validator: function (value: string) {
        return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(value);
      },
      message: '{VALUE} is not a valid email',
    },
    immutable: true,
  },
  password:{
    type:String,
    required: [true, 'Email is required'],
    select:0
  },
  role:{
    type : String,
    enum:['user', 'admin'],
    default:'user'
  },
  isBlocked:{
    type:Boolean,
    default:false
  }
},{
    timestamps:true
}
);

userSchema.pre('save', async function (next) {
  const user = this; 
  // hashing password and save into DB
  user.password = await bcrypt.hash(
    user.password,
    Number(config.bcrypt_salt_rounds),
  );
  next();
});

// set '' after saving password
userSchema.post('save', function (doc, next) {
  doc.password = '';
  next();
});

export const User = model<TUser>("User" , userSchema)