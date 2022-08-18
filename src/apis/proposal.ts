import { Request, Response } from "express";
import controllers from "../controllers";
import { ProposalObject, LoadProposalObject } from "../interfaces/global";

const create = async (req: Request, res: Response) => {
    try {
        const { name, param }: ProposalObject = req.body;

        const result = await controllers.Proposal.create({ param, name });

        if (result) {
            res.status(200).json({
                success: true,
            });
        }
    } catch (err: any) {
        console.log("proposal create error : ", err.message);
        res.status(500).send(err.message);
    }
};

const load_proposal = async (req: Request, res: Response) => {
    try {
        const { name }: LoadProposalObject = req.body;

        const result = await controllers.Proposal.find({
            filter: {
                [name.toUpperCase()]: 1,
            },
        });

        res.status(200).json({ data: result });
    } catch (err: any) {
        console.log("proposal load error: ", err);
        res.status(500).send(err.message);
    }
};

export default { create_proposal, load_proposal };
