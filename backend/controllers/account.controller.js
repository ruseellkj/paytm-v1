import { Account } from "../models/account.models.js";
import zod from "zod";
import mongoose from "mongoose";

// An endpoint for user to get their balance.
const getBalance = async (req, res) => {
    // these are the steps/algo that we have written and needs to be followed
    // through userid get the get balance

    const account = await Account.findOne({
        userId: req.userId,
    });

    return res.status(200).send({
        balance: account.balance,
    });
};

const transferSchema = zod.object({
    toUser: zod.string(),
    amount: zod.number(),
});

// An endpoint for user to transfer money to another account
const transferMoney = async (req, res) => {
    // these are the steps/algo that we have written and needs to be followed

    // --------------------Start the session & txn-----------------------
    const session = await mongoose.startSession();
    session.startTransaction();

    const { toUser, amount } = req.body;

    const { success } = transferSchema.safeParse(req.body);

    if (!success) {
        return res.status(400).send({
            msg: "Invalid inputs",
        });
    }

    console.log(`Logged-in user: ${req.userId}`); // Debugging log
    console.log(`Receiver userId: ${toUser}, Amount: ${amount}`); // Debugging log
    

    // Fetch the accounts within the transaction
    const senderAccount = await Account.findOne({ userId: req.userId }).session(session);

    console.log(senderAccount)
    console.log(senderAccount.balance)

    if (senderAccount.balance < amount) {
        await session.abortTransaction();
        return res.status(400).json({
            msg: "Insufficient balance",
        });
    }

    console.log(`Sender's current balance: ${senderAccount.balance}`);

    const receiverAccount = await Account.findOne({
        userId: toUser,
    }).session(session);

    if (!receiverAccount) {
        await session.abortTransaction();
        return res.status(400).json({
            message: "Invalid account",
        });
    }

    console.log(`Receiver's current balance: ${receiverAccount.balance}`);

    // ------------------Perform the transfer-------------------
    // Decrement the balance of the fromAccount
    // Perform the transfer
    await Account.updateOne(
        {
            userId: req.userId,
        },
        {
            $inc: {
                balance: -amount,
            },
        }
    ).session(session);

    await Account.updateOne(
        { 
            userId: toUser 
        },
        {
            $inc: {
                balance: amount,
            },
        }
    ).session(session);

    // Commit the transaction
    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successful",
    });
};

export { getBalance, transferMoney };
