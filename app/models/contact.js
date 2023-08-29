import mongoose, { Schema } from "mongoose";

const contactSchema = new Schema({
    firstname: {
        type: String, 
        required:[true, "Frist name is required"],
        trim: true, //this is for adding spaces between strings
        inLength: [2, "Name must be larger than two characters!"],
        maxLength: [40, "Name must be less than 40 characters!"],
    },
    lastname: {
        type: String, 
        required:[true, "Last name is required"],
        trim: true, //this is for adding spaces between strings
        inLength: [2, "Name must be larger than two characters!"],
        maxLength: [40, "Name must be less than 40 characters!"],
    },
    company: {
        type: String, 
        // required:[true, "Company name is required"],
        trim: true, //this is for adding spaces between strings
        inLength: [2, "Name must be larger than two characters!"],
        maxLength: [40, "Name must be less than 40 characters!"],
    },
    phone: {
        type: Number,

    },
    email: {
        type: String,
        required: [true, "Email is reqruied."],
        match: [/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/i, "Invalid email address"],
    },

    message: {
        type: String, 
        required: [true, "Message is required."]
    },

    date: {
        type: Date, 
        default: Date.now,
    },
});

const Contact = mongoose.models.Contact || mongoose.model("Contact", contactSchema);

export default Contact;