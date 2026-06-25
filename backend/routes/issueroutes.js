const express = require('express');

const Issue = require('../models/issue');

 

const router = express.Router();

router.post('/', async (req, res) => {
    try {
        console.log("Request Body:", req.body);

        const newIssue = new Issue(req.body);
        const savedIssue = await newIssue.save();

        res.status(201).json(savedIssue);

    } catch (err) {
        console.log("SAVE ERROR:", err);
        res.status(400).json({ error: err.message });
    }
});


router.get('/', async (req, res) => {

    try {

        const issues = await Issue.find();

        res.status(200).json(issues);

    } catch (err) {

        res.status(500).json({ error: err.message });

    }

});

 



router.put('/:id', async (req, res) => {

    try {

        const updatedIssue = await Issue.findByIdAndUpdate(

            req.params.id,

            req.body,

            { new: true, runValidators: true }

        );

 

        if (!updatedIssue) {

            return res.status(404).json({ error: 'Issue not found' });

        }

 

        res.status(200).json(updatedIssue);

    } catch (err) {

        res.status(400).json({ error: err.message });

    }

});

 



router.delete('/:id', async (req, res) => {

    try {

        const deletedIssue = await Issue.findByIdAndDelete(req.params.id);

 

        if (!deletedIssue) {

            return res.status(404).json({ error: 'Issue not found' });

        }

 

        res.status(200).json({

            message: 'Issue deleted successfully'

        });

    } catch (err) {

        res.status(400).json({ error: err.message });

    }

});

 

module.exports = router;

 