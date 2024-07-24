import { Router, Response } from "express";
import passport from "passport";
import DefaultResponse from "../interfaces/default_response.interface";

const router = Router();

/**
 * @swagger
 * /api/v1/session/booking/:
 *   post:
 *     summary: Book a session
 *     description: This endpoint allows bookings
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *     responses:
 *       200:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Login successful"
 *                 success:
 *                   type: boolean
 *                   example: true
 *                 status:
 *                   type: integer
 *                   example: 200
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: string
 *                       example: "60d0fe4f5311236168a109ca"
 *                     email:
 *                       type: string
 *                       example: "user@example.com"
 *                     firstName:
 *                       type: string
 *                       example: "John"
 *                     lastName:
 *                       type: string
 *                       example: "Doe"
 *                     role:
 *                       type: string
 *                       example: "user"
 *                     username:
 *                       type: string
 *                       example: "johndoe"
 *                     profilePic:
 *                       type: string
 *                       example: "http://example.com/profile.jpg"
 *                     accessToken:
 *                       type: string
 *                       example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9..."
 *       401:
 *         description: Invalid credentials
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Invalid email or password"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: integer
 *                   example: 401
 */
router.post(
  "/session/booking/",
  passport.authenticate("jwt", {
    session: false,
  }),
  (req, res: Response<DefaultResponse>) => {
    res.json({
      message: "Booking successful",
      success: true,
      status: 200,
      data: {
        id: "60d0fe4f5311236168a109ca",
      },
    });
  }
);

export default router;
