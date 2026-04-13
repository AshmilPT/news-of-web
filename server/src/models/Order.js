import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({
  serviceType: {
    type: String,
    required: true,
    enum: ['Landing Page', 'E-commerce', 'Portfolio', 'Custom Web App']
  },
  businessDetails: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: 'Pending',
    enum: ['Pending', 'In Progress', 'Completed']
  },
  githubIssueUrl: {
    type: String,
  }
}, { timestamps: true });

const Order = mongoose.model('Order', orderSchema);
export default Order;
