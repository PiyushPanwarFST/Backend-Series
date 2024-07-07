const asyncHandler = (funct) => async(req, res, next) => {
    try{
        await funct(req, res, next)
    }
    catch(err){
        res.status(500).json({
            success: false,
            message: err.message
        })
    }
}

export default asyncHandler;
