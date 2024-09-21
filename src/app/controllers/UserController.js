import { v4 } from 'uuid';

import User from '../models/User';

class UserController {
    async store (req, res) {
        const { name, email, password_hash, admin } = request.body;

        const user = await User.create({
            id: v4(),
            name,
            email,
            password_hash,
            admin,
        });
    
        return response.status(201).json
    } 
}

export default new UserController();