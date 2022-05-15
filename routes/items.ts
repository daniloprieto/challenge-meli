import express from 'express';
import { RequestHandler } from "express";
import { Item } from '../core/models/model';

const router = express.Router()

import { searchItems, getItem } from '../services/items';

type Params = {};
type ResBody = {};
type ReqBody = {};
type ReqQuery = { q: string }

export const search: RequestHandler<Params, ResBody, ReqBody, ReqQuery> = (req, res, next) => {
  const q = req.query.q;

  console.log('aca anda')

  searchItems(q)
  .then((result) => {
    res.send(result)
  })
  .catch((error) => {
    return next(error)
  });

}

router.get('/', search);

router.get('/:id', (req, res, next) => {
  const code = req.params.id;

  getItem(code)
  .then((result) => {
    res.send(result)
  })  
  .catch((error) => {
    return next(error)
  });

});

export default router;
