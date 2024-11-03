import mongoose from "mongoose";
import bcrypt from "bcrypt";


const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
            minlength: 8,
            maxlength: 30,
        },
        firstname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 50,
        },
        lastname: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            maxlength: 50,
        },

    }, 
    { timestamps: true }
);

// pre hook - middleware
userSchema.pre("save", async function (next) {
	if (!this.isModified("password")) return next();
	this.password = await bcrypt.hash(this.password, 10);
	next();
});

// we can write our own methods
userSchema.methods.isPasswordCorrect = async function (password) {
	return await bcrypt.compare(password, this.password);
};


export const User = mongoose.model("User", userSchema);