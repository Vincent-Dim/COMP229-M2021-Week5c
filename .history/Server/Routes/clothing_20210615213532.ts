import express from 'express';
const router = express.Router();
export default router;

/* Get clothing-list page - with /clothing-list */
router.get('/', DisplayClothingListPage);

/* display edit/:id page - with /clothing-list/edit:id */

