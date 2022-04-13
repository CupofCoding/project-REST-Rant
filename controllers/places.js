const { route } = require('express/lib/application');
const comments = require("../models/comment.js")

// Add code to create and export an express.Route()
const router = require('express').Router();
const places = require("../models/places.js")

// Reference to models folder
const db = require("../models");
const { findById } = require("../models/places.js");

// Create first route. Will be used in index.js (GET route that will show a list of all places)
router.get('/', (req, res) => {
    res.send('GET /places')
})

// Default Page
router.get("/", (req, res) => {
  db.Place.find()
    // Render index page
    .then((places) => {
      res.render("places/index", { places });
    })
    // to catch any errors
    .catch((err) => {
      console.log(err);
      res.render("error404"); //renders error 404 page
    });
});

//Create
router.post("/", (req, res) => {
  db.Place.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";

        //  ToDo: Find all Validation errors
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}.`;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

//New
router.get("/new", (req, res) => {
  res.render("places/new");
});

//show
router.get("/:id", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/show", { place });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//update
router.put('/:id', (req,res) => {
  console.log(req.body)
  if(req.body.pic === ""){
      req.body.pic = undefined;
  }
  if(req.body.city === ""){
      req.body.city = undefined;
  }
  if(req.body.state === ""){
      req.body.state = undefined;
  }
  console.log(req.body)
  db.Place.findByIdAndUpdate(req.params.id, req.body, {new: true})
      .then(updatedPlace => {
          res.redirect(`/places/${req.params.id}`)
      })
})

//delete
router.delete("/:id", (req, res) => {
  db.Place.findByIdAndDelete(req.params.id)
    .then((place) => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

//edit
router.get("/:id/edit", (req, res) => {
  db.Place.findById(req.params.id)
    .then((place) => {
      res.render("places/edit", { place });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

//Comments
router.post('/:id/comment', (req, res) => {
  console.log(req.params.id)
  req.body.rant = req.body.rant ? true : false
  if(req.body.author === "") {
      req.body.author = undefined
  }
  if(req.body.content === ""){
      req.body.content = undefined
  }
  console.log(req.body)
  db.Place.findById(req.params.id)
      .then(place =>  {
          db.Comment.create(req.body)
              .then(comment =>  {
                  place.comments.push(comment.id)
                  place.save()
                      .then(() => {
                          res.redirect(`/places/${req.params.id}`)
                      })
              })
              .catch(err => {
                  console.log('Failed push')
                  res.render('error404')
              })
      })
      .catch(err =>  {
          console.log('Failed to create')
          res.render('error404')
      })
  // res.send('POST /places/:id/comment stub')
})

module.exports = router;