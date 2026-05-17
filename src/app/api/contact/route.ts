import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

// 1. Define the Database Schema (What the data looks like)
const contactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  company: { type: String },
  message: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

// 2. Create the Model (Checking if it already exists to prevent Next.js hot-reload errors)
const Contact = mongoose.models.Contact || mongoose.model('Contact', contactSchema);

export async function POST(request: Request) {
  try {
    const data = await request.json();
    
    // 3. Connect to MongoDB (using the URL stored in .env)
    const MONGODB_URI = process.env.MONGODB_URI;
    
    if (!MONGODB_URI) {
      throw new Error('Please define the MONGODB_URI environment variable');
    }

    // Only connect if we aren't already connected
    if (mongoose.connection.readyState !== 1) {
      await mongoose.connect(MONGODB_URI);
    }

    // 4. Save the form data to the database!
    const newContact = new Contact(data);
    await newContact.save();
    
    console.log('Successfully saved to MongoDB:', data);

    return NextResponse.json(
      { message: 'Thank you for getting in touch! We will respond shortly.' },
      { status: 200 }
    );
  } catch (error) {
    console.error("Database Error:", error);
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    );
  }
}
