import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    userType: {
        type: String,
        enum: ["User", "Seller"],
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        refPath: 'userType',
        required: true,
    },
    message: {
        type: String,
        required: [true, "Notification message is required"],
    },
    isRead: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Notification = mongoose.model("Notification", notificationSchema);

export default Notification;
