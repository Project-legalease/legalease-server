import { Router } from "express";

import {
  validateRole,
  validateUser,
  registration,
} from "../middlewares/registration.middleware";

const router = Router();

/**
 * 
 * @swagger
 * /api/v1/auth/register:
 *   post:
 *     summary: Register a new user or lawyer
 *     description: This endpoint allows for the registration of a new user or lawyer. It validates the role and user details before creating the account.
 *     tags:
 *       - Authentication
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 example: "user@example.com"
 *               password:
 *                 type: string
 *                 example: "password123"
 *               firstName:
 *                 type: string
 *                 example: "John"
 *               lastName:
 *                 type: string
 *                 example: "Doe"
 *               role:
 *                 type: string
 *                 enum: [user, lawyer]
 *                 example: "user"
 *               username:
 *                 type: string
 *                 example: "johndoe"
 *               profilePic:
 *                 type: string
 *                 example: "http://example.com/profile.jpg"
 *                 nullable: true
 *               qualification:
 *                 type: string
 *                 example: "LLB"
 *                 nullable: true
 *               specialization:
 *                 type: string
 *                 example: "Corporate Law"
 *                 nullable: true
 *               experience:
 *                 type: string
 *                 example: "5 years"
 *                 nullable: true
 *               location:
 *                 type: string
 *                 example: "New York"
 *                 nullable: true
 *             examples:
 *               user:
 *                 summary: Example of a user registration
 *                 value:
 *                   email: "user@example.com"
 *                   password: "password123"
 *                   firstName: "John"
 *                   lastName: "Doe"
 *                   role: "user"
 *                   username: "johndoe"
 *                   profilePic: "http://example.com/profile.jpg"
 *               lawyer:
 *                 summary: Example of a lawyer registration
 *                 value:
 *                   email: "lawyer@example.com"
 *                   password: "password123"
 *                   firstName: "Jane"
 *                   lastName: "Smith"
 *                   role: "lawyer"
 *                   username: "janesmith"
 *                   profilePic: "http://example.com/profile.jpg"
 *                   qualification: "LLB"
 *                   specialization: "Corporate Law"
 *                   experience: "5 years"
 *                   location: "New York"
 *     responses:
 *       200:
 *         description: Registration successful
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Registration successful"
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
 *       403:
 *         description: Validation error
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Validation error message"
 *                 success:
 *                   type: boolean
 *                   example: false
 *                 status:
 *                   type: integer
 *                   example: 403
 */
router.post("/auth/register", validateRole, validateUser, registration);

export default router;
