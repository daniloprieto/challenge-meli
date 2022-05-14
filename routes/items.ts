import express from 'express';
import { RequestHandler } from "express";

const router = express.Router()

export const search: RequestHandler<any> = (req, res, next) => {
  const q = req.query.q;

}

router.get('/', search);
