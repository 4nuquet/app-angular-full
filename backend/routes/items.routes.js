import { Router } from 'express';
import { connect } from '../dbhelper';
import Items from '../models/Items';

const router = Router();

router.get('/', async(req, res) => {

    await connect();
    const items = await Items.find();
    res.json(items);

})

router.get('/:id', async(req, res) => {

    await connect();
    const items = await Items.findById(req.params.id);
    res.json(items);

})

router.post('/', async(req, res) => {

    await connect();
    const item = {
        name: req.body.name,
        info: req.body.info,
        code: req.body.code
    }
    const result = new Items(item);
    await result.save();

    res.json(result)

});

router.put('/:id', async(req, res) => {

    const id = req.params.id;
    await connect();

    const item = {
        name: req.body.name,
        info: req.body.info,
        code: req.body.code
    }

    await Items.findByIdAndUpdate(id, item);

    res.json({ msg: 'item Updated' })

});

router.delete('/:id', async(req, res) => {

    const id = req.params.id;
    await connect();

    const result = await Items.findByIdAndDelete(id);

    res.json({ msg: 'item Deleted', item: result });
});

export default router;