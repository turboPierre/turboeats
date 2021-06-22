import Command, { CommandInterface } from '../models/command.model';
import { Request, Response, NextFunction} from 'express';


export let getAllCommands = (req: Request, res: Response, next: NextFunction) => {

    Command.find()
        .then((commands) => {
            res.status(200).send(commands);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let getOneCommand = (req: Request, res: Response, next: NextFunction) => {

    Command.findOne({ _id: req.params.id })
        .then((command) => {
            res.status(200).send(command);
        }).catch((err) => {
        res.status(404).send(err.message);
    });

};

export let createCommand = (req: Request, res: Response, next: NextFunction) => {

    const commandObject = req.body;
    delete commandObject._id;

    const command = new Command({ ...commandObject })

    command.save()
        .then(() => {
            res.status(201).send('Command enregistré !')
        }).catch((err) => {
        res.status(400).send(err.message)
    });

};

export let updateCommand = (req: Request, res: Response, next: NextFunction) => {

    const commandID: string = req.params.id;
    const commandObject = { ...req.body };

    Command.updateOne({ _id: commandID }, { commandID, ...commandObject })
        .then(() => {
            res.status(200).send('Objet ' + commandID + ' modifié !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};


export let deleteCommand = (req: Request, res: Response, next: NextFunction) => {

    const commandID: string = req.params.id;

    Command.deleteOne({ _id: commandID })
        .then(() => {
            res.status(200).send('Objet ' + commandID + ' supprimé !');
        }).catch((err) => {
        res.status(400).send(err.message);
    });

};