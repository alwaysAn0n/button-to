
module.exports = async function(req, res) {
  let allParams = req.allParams();

  console.log('got data:',allParams);

  return res.json([
  {
    username: 'gmaxwell', distance: .2, mbid: 456
  },
  {
    username: 'lukejr', distance: .8, mbid: 125
  },
  {
    username: 'mow-cat', distance: 1.2, mbid: 842
  },
  {
    username: 'yeeee-ha', distance: 2.2, mbid: 122
  },
  {
    username: 'ptodd', distance: 6.2, mbid: 54
  },
  ])
};

