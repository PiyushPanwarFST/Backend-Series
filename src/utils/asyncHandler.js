const asyncHandler = (funct) => async(req, res, next) => {
    try{
        return await funct(req, res, next)
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export default asyncHandler;
