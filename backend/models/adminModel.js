import mongoose from 'mongoose';

const adminSchema = new mongoose.Schema({
    secret:{type:String,require:true},
    email:{type:String,require:true,unique:true},
    password:{type:String,require:true,unique:true}
})
const adminModel = mongoose.models.admin || await mongoose.model('admin',adminSchema);
export default adminModel