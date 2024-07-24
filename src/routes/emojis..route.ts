import { Router } from "express";

const router = Router();

type EmojiResponse = string[];

router.get<object, EmojiResponse>('/', (req, res) => {
  res.json(['😀', '😳', '🙄']);
});

export default router;
