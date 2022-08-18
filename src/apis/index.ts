import ProposalAPI from "./proposal";

const API = (router: any) => {
    // Proposal APIs
    router.post("/creat", ProposalAPI.create_proposal);
    router.post("/update", ProposalAPI.load_proposal);
    router.post("/remove", ProposalAPI.load_proposal);
    router.post("/load", ProposalAPI.load_proposal);
};

export default API;
