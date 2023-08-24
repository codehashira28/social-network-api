const { Schema, Types, model } = require('mongoose');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: formatDate,
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);


// Schema for what makes up a thought
const thoughtSchema = new Schema(
  {
    thoughtText: { 
      type: String, 
      required: true, 
      minlength: 1, 
      maxlength: 280,
    },
    createdAt: { 
      type: Date, 
      default: Date.now, 
      get: formatDate,
    },
    username: { 
      type: String, 
      required: true,
    },
    reactions: [reactionSchema]
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
    id: false,
  }
);

//formatDate function
function formatDate(date) {
  const nowDate = new Date(date);
  const month = nowDate.getMonth() + 1;
  const day = nowDate.getDate();
  const year = nowDate.getFullYear();
  return `${month}/${day}/${year}`;
}

// Create a virtual property `reactionCount` that gets the amount of reactions per user
thoughtSchema.virtual('reactionCount').get(function () {
  return this.reactions.length;
});

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
