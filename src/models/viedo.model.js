import mongoose, {Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const viedoSchema = new Schema ({
    viedoFile: {
        type: String, //cloudnary
        required: true
    },
    thumbnail: {
        type: String, //cloudnary
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,  //cloudnary
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps});

viedoSchema.plugin(mongooseAggregatePaginate);

export const Viedo = mongoose.model("Viedo", viedoSchema);