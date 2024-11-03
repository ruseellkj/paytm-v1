import zod from "zod";
import { User } from "../models/user.models.js";
import { Account } from "../models/account.models.js";
import jwt from "jsonwebtoken";

const signupSchema = zod.object({
	username: zod.string().email(),
	password: zod.string(),
	firstname: zod.string(),
	lastname: zod.string(),
});

const signupUser = async (req, res) => {
	// these are the steps/algo that we have written and needs to be followed

	// validate the user
	// check if the same user already exists in db or not
	// create user object - create entry in db
	// remove password field from response
	// check for user creation
	// return res
	const { firstname, lastname, username, password } = req.body;

	const { success } = signupSchema.safeParse({ firstname, lastname, username, password });

	if (!success) {
		return res.status(411).send({
			msg: "Invalid inputs",
		});
	}

	const existingUser = await User.findOne({
		$or: [{ username }],
	});

	if (existingUser) {
		return res.status(409).send({
			msg: "User already exists",
		});
	}

	// create user object
	const user = await User.create({
		firstname,
		lastname,
		password,
		username,
	});

	const createdUser = await User.findById(user._id).select("-password");

	if (!createdUser) {
		return res.status(500).send({
			msg: "Error while creating user",
		});
	}

    const userId = user._id
	// create account of the user
	const account = await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    });

    if (!account) {
		return res.status(500).send({
			msg: "Error while creating account",
		});
	}

	const token = jwt.sign(
		{
			_id: user._id,
		},
		process.env.JWT_SECRET,
        { expiresIn: '1h' }
	);


	return res.status(200).send({
		msg: "User registred Successfully",
		token: token,
        balance: account.balance
	});
};


const signinSchema = zod.object({
	username: zod.string(),
	password: zod.string(),
});

const signinUser = async (req, res) => {
	// these are the steps/algo that we have written and needs to be followed

	// write the algo for the logining for the user
	// get the details from the user
	// check the username or email is valid or not
	// check if the user exists either by username or email
	// send the response to the user or the validation message

	const { username, password } = req.body;

	const { success } = signinSchema.safeParse(req.body);

	if (!success) {
		return res.status(411).send({
			msg: "Invalid inputs",
		});
	}

	const user = await User.findOne({
		$or: [{ username }, { password }],
	});

	if (!user) {
		return res.status(411).send({
			msg: "Error while logging in",
		});
	}

	const token = jwt.sign(
		{
			_id: user._id,
		},
		process.env.JWT_SECRET
	);

	return res.status(200).send({
		token: token,
        firstname: user.firstname,
        
	});


};


const updateAccountDetailsSchema = zod.object({
	password: zod.string().optional(),
	firstname: zod.string().optional(),
	lastname: zod.string().optional(),
});

const updateAccountDetails = async (req, res) => {
	// these are the steps/algo that we have written and needs to be followed
	// update kon kar sakta h ? -> jo logged in h woh hi 


	const { password, firstname, lastname } = req.body;


	const { success } = updateAccountDetailsSchema.safeParse(req.body);

	if (!success) {
		return res.status(411).send({
			msg: "Error while updating information"
		});
	}

	// find the user by id and update
	const user = await User.findByIdAndUpdate(
		req.user?._id,
		{
			$set: {
				password,
				firstname,
				lastname
			},
		},
		{
			new: true,
		}
	)


	return res.status(200).send({
		msg: "Updated successfully",
	});
}


const getUsers = async (req, res) => {
	const filter = req.query.filter || "";

	const users = await User.find({
        $or: [{
            firstname: {
                "$regex": filter
            }
        }, {
            lastname: {
                "$regex": filter
            }
        }]
    })

	res.json({
        user: users.map(user => ({
            username: user.username,
            firstname: user.firstname,
            lastname: user.lastname,
            _id: user._id
        }))
    })

}

export { signupUser, signinUser, updateAccountDetails, getUsers }