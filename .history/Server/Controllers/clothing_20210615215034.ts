import express, {Request, Response, NextFunction} from 'express';

import Clothing from "../Models/clothing";   //Clothing is an object in the clothing model

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    Clothing.find(function(err, clothing){
        if(err)
        {
            return console.error(err);
        }

        console.log(clothing);

    });
}