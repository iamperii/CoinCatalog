import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mysql from 'mysql2';

const app = express();
const PORT = 3000;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '4250',
	database: 'coins',
	debug: true,
});

db.connect((err) => {
	if (err) {
		console.error('Database connection failed:', err.message);
		process.exit(1);
	} else {
		console.log('Connected to the database.');
	}
});

app.get('/coins', (req, res) => {
	const sql = `
    SELECT Coins.*, CoinCategories.name AS category_name
    FROM Coins
    LEFT JOIN CoinCategories ON Coins.coin_category_id = CoinCategories.id
  `;

	db.query(sql, (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to fetch coins.' });
		}

		const groupedCoins = results.reduce((acc, coin) => {
			const { category_name } = coin;

			if (!category_name) return acc;

			if (!acc[category_name]) {
				acc[category_name] = [];
			}

			acc[category_name].push(coin);

			return acc;
		}, {});

		res.json(groupedCoins);
	});
});
app.get('/coins/:id', (req, res) => {
	const { id } = req.params;

	const query = 'SELECT * FROM Coins WHERE id = ?';
	db.query(query, [id], (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to fetch coin by ID.' });
		}
		if (results.length === 0) {
			return res.status(404).json({ error: 'Coin not found.' });
		}
		res.json(results[0]);
	});
});

app.get('/coins/list/:category', (req, res) => {
	const { category } = req.params;
	const sql = `
    SELECT Coins.*, CoinCategories.name AS category_name
    FROM Coins
    LEFT JOIN CoinCategories ON Coins.coin_category_id = CoinCategories.id
    WHERE CoinCategories.name = ?
  `;

	db.query(sql, [category], (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to fetch coins.' });
		}

		if (results.length === 0) {
			return res
				.status(404)
				.json({ error: 'No coins found in this category.' });
		}

		res.json(results);
	});
});

app.get('/details/:id', (req, res) => {
	const { id } = req.params;
	const query = 'SELECT * FROM Coins WHERE id = ?';
	db.query(query, [id], (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to fetch the coin.' });
		}
		if (results.length === 0) {
			return res.status(404).json({ error: 'Coin not found.' });
		}
		res.json(results[0]);
	});
});

app.get('/search', (req, res) => {
	const { query } = req.query;

	if (!query) {
		return res.status(400).json({ error: 'Query parameter is required.' });
	}

	const sql = `
    SELECT Coins.*, CoinCategories.name AS category_name
    FROM Coins
    LEFT JOIN CoinCategories ON Coins.coin_category_id = CoinCategories.id
    WHERE Coins.description LIKE ? OR Coins.issuing_country LIKE ? OR CoinCategories.name LIKE ?
  `;

	db.query(sql, [`%${query}%`, `%${query}%`, `%${query}%`], (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to search coins.' });
		}

		if (results.length === 0) {
			return res
				.status(404)
				.json({ error: 'No coins found matching the search criteria.' });
		}

		res.json(results);
	});
});

app.get('/filter', (req, res) => {
	const {
		country,
		denomination,
		quality,
		priceFrom,
		priceTo,
		yearFrom,
		yearTo,
	} = req.query;

	let sql = `
    SELECT Coins.*, CoinCategories.name AS category_name
    FROM Coins
    LEFT JOIN CoinCategories ON Coins.coin_category_id = CoinCategories.id
    WHERE 1=1
  `;

	if (country) {
		sql += ` AND Coins.issuing_country = '${country}'`;
	}
	if (denomination) {
		sql += ` AND Coins.composition = '${denomination}'`;
	}
	if (quality) {
		sql += ` AND Coins.quality = '${quality}'`;
	}
	if (priceFrom) {
		sql += ` AND Coins.price >= ${priceFrom}`;
	}
	if (priceTo) {
		sql += ` AND Coins.price <= ${priceTo}`;
	}
	if (yearFrom) {
		sql += ` AND Coins.year >= ${yearFrom}`;
	}
	if (yearTo) {
		sql += ` AND Coins.year <= ${yearTo}`;
	}

	db.query(sql, (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to fetch filtered coins.' });
		}

		const groupedCoins = results.reduce((acc, coin) => {
			const { category_name } = coin;
			if (!category_name) return acc;

			if (!acc[category_name]) {
				acc[category_name] = [];
			}
			acc[category_name].push(coin);

			return acc;
		}, {});

		res.json(groupedCoins);
	});
});

app.post('/coins', (req, res) => {
	const {
		coin_name,
		issuing_country,
		composition,
		quality,
		denomination,
		year,
		weight,
		description,
		price,
		long_description,
		observe_img,
		reverse_img,
	} = req.body;

	const coin_category_id = 2;
	const coin_type_id = 2;

	const sql = `
        INSERT INTO Coins (
            coin_category_id,
            coin_type_id,
            coin_name,
            issuing_country,
            composition,
            quality,
            denomination,
            year,
            weight,
            description,
            price,
            long_description,
            observe_img,
            reverse_img
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

	const values = [
		coin_category_id,
		coin_type_id,
		coin_name,
		issuing_country,
		composition,
		quality,
		denomination,
		year,
		weight,
		description,
		price,
		long_description,
		observe_img,
		reverse_img,
	];

	db.query(sql, values, (err, result) => {
		if (err) {
			console.error('Failed to insert coin:', err);
			res.status(500).json({ error: 'Database error occurred.' });
		} else {
			res.status(201).json({
				message: 'Coin added successfully!',
				coinId: result.insertId,
			});
		}
	});
});

app.put('/coins/:id', (req, res) => {
	const { id } = req.params;
	const {
		coin_category_id,
		coin_type_id,
		coin_name,
		issuing_country,
		composition,
		quality,
		denomination,
		year,
		weight,
		description,
		long_description,
		price,
		observe_img,
		reverse_img,
	} = req.body;

	if (
		!coin_category_id ||
		!coin_type_id ||
		!coin_name ||
		!issuing_country ||
		!composition ||
		!quality ||
		!denomination ||
		!year ||
		!weight ||
		!description ||
		!long_description ||
		!price ||
		!observe_img ||
		!reverse_img
	) {
		return res.status(400).json({ error: 'All fields are required.' });
	}

	const query = `
        UPDATE Coins 
        SET coin_category_id = ?,
            coin_type_id = ?, 
            coin_name = ?, 
            issuing_country = ?, 
            composition = ?, 
            quality = ?, 
            denomination = ?, 
            year = ?, 
            weight = ?, 
            description = ?, 
            long_description = ?,
            price = ?,
            observe_img = ?,
            reverse_img = ?
        WHERE id = ?
    `;

	const parameters = [
		coin_category_id,
		coin_type_id,
		coin_name,
		issuing_country,
		composition,
		quality,
		denomination,
		year,
		weight,
		description,
		long_description,
		price,
		observe_img,
		reverse_img,
		id,
	];

	db.query(query, parameters, (err, results) => {
		if (err) {
			console.error('SQL Error:', err);
			return res.status(500).json({ error: 'Failed to update coin.' });
		}
		if (results.affectedRows === 0) {
			return res.status(404).json({ error: 'Coin not found.' });
		}
		res.json({ message: 'Coin updated successfully.' });
	});
});

app.delete('/coins/:id', (req, res) => {
	const { id } = req.params;

	const query = 'DELETE FROM Coins WHERE id = ?';
	db.query(query, [id], (err, results) => {
		if (err) {
			return res.status(500).json({ error: 'Failed to delete coin.' });
		}
		if (results.affectedRows === 0) {
			return res.status(404).json({ error: 'Coin not found.' });
		}
		res.json({ message: 'Coin deleted successfully.' });
	});
});

app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
