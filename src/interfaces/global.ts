export interface ProposalObject {
    param: {
        proposalName: string;
        proposalDescription: string;
        snapshotProposal: string;
        desiredVote?: string;
        endTime?: string;
        gaugeFixed?: string;
        rewardCurrency: string;
        minimumBribe: string;
        loyaltyVote?: string;
        minVoteWeightNum?: number;
        minVoteWeightSlide?: number;
        votePercent?: [];
        votePercentNum?: [];
        range?: [];
        rangeNum?: [];
        payout?: [];
    };
    name: string;
}

export interface LoadProposalObject {
    name: string;
}
