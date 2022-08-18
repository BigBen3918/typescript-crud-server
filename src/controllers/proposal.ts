import { ProposalSchema } from "../models";
import { ProposalObject } from "../interfaces/global";

const Proposal = {
    create: async (props: ProposalObject) => {
        const { name, param } = props;

        try {
            var result: any = await ProposalSchema.find({});

            if (result.length === 0) {
                const defaultData = new ProposalSchema({
                    QIDAO: [],
                    AAVE: [],
                });
                const saveData = await defaultData.save();
                if (!saveData) {
                    throw new Error("Database Error");
                }
            }

            if (name === "aave") {
                const aaveNewProposal = {
                    proposalName: param.proposalName,
                    proposalDescription: param.proposalDescription,
                    snapshotProposal: param.snapshotProposal,
                    loyaltyVote: param.loyaltyVote,
                    endTime: param.endTime,
                    rewardCurrency: param.rewardCurrency,
                    minimumBribe: param.minimumBribe,
                    payout: param.payout,
                    minVoteWeightNum: param.minVoteWeightNum,
                    minVoteWeightSlide: param.minVoteWeightSlide,
                };

                result = await ProposalSchema.updateOne({
                    $push: {
                        AAVE: aaveNewProposal,
                    },
                });
            } else {
                const qidaoNewProposal = {
                    proposalName: param.proposalName,
                    proposalDescription: param.proposalDescription,
                    snapshotProposal: param.snapshotProposal,
                    desiredVote: param.desiredVote,
                    endTime: param.endTime,
                    gaugeFixed: param.gaugeFixed,
                    rewardCurrency: param.rewardCurrency,
                    minimumBribe: param.minimumBribe,
                    loyaltyVote: param.loyaltyVote,
                    minVoteWeightNum: param.minVoteWeightNum,
                    minVoteWeightSlide: param.minVoteWeightSlide,
                    votePercent: param.votePercent,
                    votePercentNum: param.votePercentNum,
                    range: param.range,
                    rangeNum: param.rangeNum,
                    payout: param.payout,
                };

                result = await ProposalSchema.updateOne({
                    $push: {
                        QIDAO: qidaoNewProposal,
                    },
                });
            }

            return result;
        } catch (err: any) {
            console.log(err.message);
            throw new Error(err.message);
        }
    },
    find: async (props: any) => {
        const { filter } = props;

        try {
            const result = await ProposalSchema.find({}, filter);

            return result[0];
        } catch (err: any) {
            console.log(err.message);
            throw new Error(err.message);
        }
    },
};

export default Proposal;
