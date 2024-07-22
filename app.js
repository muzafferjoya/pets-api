const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Pet = require('./models/pets');
const Owner = require('./models/owners');

//mongoose.connect('mongodb://localhost/pets-api', { useNewUrlParser: true, useUnifiedTopology: true });

//mongoose.connect('mongodb://mongodb:27017/pets-api', { useNewUrlParser: true, useUnifiedTopology: true });


//mongoose.connect('mongodb://mongo:27017/pets-api', { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connect('mongodb://mongo:27017/pets-api', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));


app.use(express.json());

// Pets API
app.get('/api/pets', async (req, res) => {
  try {
    const pets = await Pet.find().populate('owner');
    res.json(pets);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching pets' });
  }
});

app.post('/api/pets', async (req, res) => {
  try {
    const pet = new Pet(req.body);
    await pet.save();
    res.status(201).json(pet);
  } catch (err) {
    console.error('Error creating pet:', err);  // Log the actual error to the console
    res.status(400).json({ message: 'Error creating pet', error: err.message });  // Send detailed error message in the response
  }
});

app.get('/api/pets/:id', async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id).populate('owner');
    if (!pet) {
      res.status(404).json({ message: 'Pet not found' });
    } else {
      res.json(pet);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching pet' });
  }
});

app.put('/api/pets/:id', async (req, res) => {
  try {
    const pet = await Pet.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(pet);
  } catch (err) {
    res.status(400).json({ message: 'Error updating pet' });
  }
});

app.delete('/api/pets/:id', async (req, res) => {
  try {
    await Pet.findByIdAndRemove(req.params.id);
    res.json({ message: 'Pet deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting pet' });
  }
});

// Owners API
app.get('/api/owners', async (req, res) => {
  try {
    const owners = await Owner.find();
    res.json(owners);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching owners' });
  }
});

app.post('/api/owners', async (req, res) => {
  try {
    const owner = new Owner(req.body);
    await owner.save();
    res.status(201).json(owner);
  } catch (err) {
    res.status(400).json({ message: 'Error creating owner' });
  }
});

app.get('/api/owners/:id', async (req, res) => {
  try {
    const owner = await Owner.findById(req.params.id);
    if (!owner) {
      res.status(404).json({ message: 'Owner not found' });
    } else {
      res.json(owner);
    }
  } catch (err) {
    res.status(500).json({ message: 'Error fetching owner' });
  }
});

app.put('/api/owners/:id', async (req, res) => {
  try {
    const owner = await Owner.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(owner);
  } catch (err) {
    res.status(400).json({ message: 'Error updating owner' });
  }
});

app.delete('/api/owners/:id', async (req, res) => {
  try {
    await Owner.findByIdAndRemove(req.params.id);
    res.json({ message: 'Owner deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting owner' });
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
