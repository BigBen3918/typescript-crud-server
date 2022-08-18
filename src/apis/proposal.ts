import { Request, Response } from "express";
import { delay } from "../utils";

var todoData: any = [];

const load_data = async (req: Request, res: Response) => {
    try {
        const { message } = req.body;

        console.log(message);

        res.status(200).json({
            data: todoData,
        });
    } catch (err: any) {
        console.log("load error : ", err.message);
        res.status(500).end();
    }
};

// Todo Actions
const create_todo = async (req: Request, res: Response) => {
    try {
        const { name }: any = req.body;

        let isValidation = todoData.filter((item: any) => {
            return item.name == name.trim();
        });
        if (isValidation.length > 0) {
            throw new Error("Name already exist");
        }

        todoData.push({ name: name, items: [] });

        res.status(200).json({
            success: true,
        });
    } catch (err: any) {
        console.log("todo create error : ", err.message);
        res.status(500).send(err.message);
    }
};

const remove_todo = async (req: Request, res: Response) => {
    try {
        const { name }: any = req.body;

        let filterData = todoData.filter((item: any) => item.name !== name);
        todoData = filterData;

        res.status(200).end();
    } catch (err: any) {
        console.log("todo remove error: ", err);
        res.status(500).send(err.message);
    }
};

// TaskList Action
const create_task = async (req: Request, res: Response) => {
    try {
        const { name, itemname, description, endTime, priority }: any =
            req.body;

        await todoData.filter((item: any) => {
            if (item.name === name) {
                return item.items.push({
                    itemname: itemname,
                    description: description,
                    endTime: endTime,
                    priority: priority,
                });
            }
        });

        res.status(200).json({
            success: true,
        });
    } catch (err: any) {
        console.log("task create error : ", err.message);
        res.status(500).send(err.message);
    }
};

const update_task = async (req: Request, res: Response) => {
    try {
        const {
            index,
            name,
            editName,
            editDesc,
            editEndTime,
            editPriority,
        }: any = req.body;

        todoData.filter((item: any) => {
            if (item.name === name) {
                item.items[index].itemname = editName;
                item.items[index].description = editDesc;
                item.items[index].endTime = editEndTime;
                item.items[index].priority = editPriority;
            }
        });

        res.status(200).json({
            success: true,
        });
    } catch (err: any) {
        console.log("task update error : ", err.message);
        res.status(500).send(err.message);
    }
};

const delete_task = async (req: Request, res: Response) => {
    try {
        const { name, itemname }: any = req.body;

        await todoData.filter((item: any) => {
            if (item.name === name) {
                let index: any = -1;
                item.items.filter(function (value: any, idx: any, arr: any) {
                    if (value.itemname === itemname) index = idx;
                });

                item.items.splice(index, 1);
            }
        });

        res.status(200).json({
            success: true,
        });
    } catch (err: any) {
        console.log("task delete error : ", err.message);
        res.status(500).send(err.message);
    }
};

export default {
    create_todo,
    remove_todo,
    create_task,
    update_task,
    delete_task,
    load_data,
};
