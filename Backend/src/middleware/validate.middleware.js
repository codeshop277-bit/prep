const validate = (schema) => (req, res, next) => {
    const result = schema.safeParse(req.body);
    console.log('result', result)
    if(!result){
        return res.status(400).json({
            message: 'Validation Failed',
            errors: result.error.errors.map((e) => e.message)
        })
    }
    req.body = result.data;
    next();
};

module.exports = validate;