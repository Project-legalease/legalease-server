import { Router } from "express";

import MessageResponse from "../interfaces/message_response.interface";
import registerAPI from "./register.route";
import loginAPI from "./login.route";
import bookingAPI from "./booking.route";

const router = Router();

/**
 * @swagger
 * /api/v1/:
 *   get:
 *     summary: Welcome message
 *     tags:
 *       - Status
 *     description: Returns a welcome message for the API.
 *     responses:
 *       200:
 *         description: A JSON object containing a welcome message.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "API - 👋🌎🌍🌏"
 */
router.get<MessageResponse>("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use(registerAPI);
router.use(loginAPI);
router.use(bookingAPI);

export default router;
