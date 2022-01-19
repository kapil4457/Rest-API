let users = [];
import {v4 as uuidv4} from 'uuid';

export const createUser = (req, res) => {
	const user = req.body;
	users.push({ ...user, id: uuidv4() });
	res.send(`User with the name ${user.firstName} added successfully`);
};

export const deleteUser = (req, res) => {
	const id = req.params.id;
	users = users.filter((user) => user.id != id);
	res.send(`User with the id ${id} deleted from database `);
};

export const getUsers = (req, res) => {
	res.send(users);
};
export const getUser = (req,res)=>{
    console.log(req.params);
    const foundUser = users.find((user=>user.id === req.params.id))
    const {id} = req.params.id;
    res.send(foundUser);
}

export const UpdateUser = (req, res) => {
	const { id } = req.params;
	const { firstName, lastName, age } = req.params;
	const user = users.find((user) => user.id === id);
	if (firstName) user.firstName = firstName;
	if (lastName) user.lastName = lastName;
	if (age) user.age = age;

	res.send(`Use with the ${id} updated successfully`);
};

