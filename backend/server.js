const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const JustWatch = require('justwatch');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Search endpoint
app.get('/api/search', async (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.status(400).json({ error: 'Query required' });
  }
  const justwatch = new JustWatch({ locale: 'en_US' });
  try {
    const result = await justwatch.search({ query, content_types: ['movie'] });
    const movies = result.items.filter(item => item.object_type === 'movie' && item.original_release_year >= 2000);
    const processed = movies.map(m => ({
      id: m.id,
      title: m.title,
      year: m.original_release_year,
      poster: m.poster,
      offers: m.offers?.map(o => ({ provider_id: o.provider_id, monetization_type: o.monetization_type, url: o.urls?.standard_web })) || []
    }));
    res.json({ movies: processed.slice(0, 5) });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch' });
  }
});

app.use(express.static('../frontend'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
