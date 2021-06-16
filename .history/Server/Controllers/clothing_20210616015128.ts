import express, { Request, Response, NextFunction } from 'express';

import Clothing from "../Models/clothing";   //Clothing is an object in the clothing model

export function DisplayClothingListPage(req: Request, res: Response, next: NextFunction): void
{
    Clothing.find(function(err, clothing){   //uses the find method of mongodb to returns all clothing in the clothing collection
        if(err)
        {
            return console.error(err);
        }

        console.log(clothing); 

        //render the clothing-list content partial page in views ..content..clothing list
        //res.render('index', {title: 'Clothing List', page: 'clothing-list', clothing: clothingCollection})
    });
}