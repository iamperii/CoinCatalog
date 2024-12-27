import bcrypt from 'bcrypt';
import express from 'express';
import jwt from 'jsonwebtoken';
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

const users = [
	{
		username: 'iamperii',
		password: bcrypt.hashSync('4250', 10),
	},
];

app.post('/login', async (req, res) => {
	const { username, password } = req.body;

	const user = users.find((u) => u.username === username);

	if (!user) {
		console.log('User not found');
		return res.status(401).json({ message: 'Invalid username or password' });
	}

	const isValidPassword = await bcrypt.compare(password, user.password);
	if (!isValidPassword) {
		console.log('Invalid password');
		return res.status(401).json({ message: 'Invalid username or password' });
	}

	const token = jwt.sign({ username: user.username }, 'secret_key', {
		expiresIn: '1h',
	});
	res.json({ token });
});

app.get('/', (req, res) => {
	res.json(users);
});

const PORT = 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
