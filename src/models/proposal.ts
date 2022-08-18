/** @format */

import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Element
const OtherSchema = new Schema({
    value: [Number],
});

// Basic Schema
const BasicSchema = new Schema({
    desiredVote: {
        type: String,
        default: "",
    },
    endTime: {
        type: String,
        default: "",
    },
    gaugeFixed: {
        type: String,
        default: "",
    },
    loyaltyVote: {
        type: String,
        default: "",
    },
    minVoteWeightNum: {
        type: String,
        default: "",
    },
    minVoteWeightSlide: {
        type: String,
        default: "",
    },
    minimumBribe: {
        type: String,
        default: "",
    },
    payout: {
        type: String,
        default: "",
    },
    proposalDescription: {
        type: String,
        default: "",
    },
    proposalName: {
        type: String,
        default: "",
    },
    rewardCurrency: {
        type: String,
        default: "",
    },
    snapshotProposal: {
        type: String,
        default: "",
    },
    range: [OtherSchema],
    rangeNum: [OtherSchema],
    votePercent: [OtherSchema],
    votePercentNum: [OtherSchema],
});

// Main Schema
const QIDaoSchema = new Schema({
    QIDAO: [BasicSchema],
    AAVE: [BasicSchema],
});

export default mongoose.model("proposals", QIDaoSchema);
