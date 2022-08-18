import ProposalAPI from "./proposal";

const API = (router: any) => {
    // Proposal APIs
    router.post("/create-todo", ProposalAPI.create_todo);
    router.post("/remove-todo", ProposalAPI.remove_todo);
    router.post("/create-task", ProposalAPI.create_task);
    router.post("/update-task", ProposalAPI.update_task);
    router.post("/remove-task", ProposalAPI.delete_task);
    router.post("/load", ProposalAPI.load_data);
};

export default API;
