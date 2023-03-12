import { Router } from "express";
const router = Router();

const users = [{
    id: 1,
    name: "Alexander"
}];

/**
 * @openapi
 * /api/users:
 *   get:
 *     description: Get all users
 *     responses:
 *       200:
 *         description: Returns all users
 */
router.get("/api/users", (req, res) => {
    res.send({ data: users });
});

/**
 * 
 * @openapi
 *info:
    *  version: 1.0.0
    * title: OpenAPI Example API
*components:
*  schemas:
*    User:
*      type: object
*      properties:
*        id:
*          type: integer
*        name: 
*          type: string
*          minLength: 1
*          maxLength: 50
 * Paths:
 * /api/users:
 *   post:
 *     description: Create a new user
 *     requestBody:
 *       description: User object that needs to be added to the system
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       '201':
 *         description: User created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       '400':
 *         description: Invalid input, object invalid or missing required fields
 *       '500':
 *         description: Internal server error
 */
router.post("/api/users", (req, res) => {
    const user = req.body;
    users.push(user);
    res.send({ data: user });
});


/** 
 * @openapi
 * /api/users/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     description: Deletes a user by the specified ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: The ID of the user to delete.
 *         schema:
 *           type: integer
 *     responses:
 *       204:
 *         description: The user was deleted succe ssfully.
 *       404:
 *         description: The specified user ID was not found.
 */

router.delete("/api/users", (req, res) => {
    const user = req.body;
    users.pop(user);
    res.send({data: user});
}); 


export default router;
