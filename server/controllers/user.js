
const userModels=require('../models/user.js');

// 根据id查询用户详细信息
const queryUserById = async ctx => {
    const { userName } = ctx.query;
    try {
        // 根据用户id查询用户详细信息
        const user = await userModels.find({ userName });
        ctx.body = {
            code: 200,
            message: '查询成功',
            data: user
        };
    } catch (error) {
        ctx.status = ctx.response.status;
        ctx.body = {
            code: ctx.response.status,
            message: error,
            data: null
        };
    }
};

// 删除用户
const deleteUserById =async (ctx)=>{
  
    let id=ctx.query.id;
    let data={'_id':id};
    console.log(data,22222);
    await userModels.remove(data);
    ctx.body = {
        code: 200,
        message: '删除成功',
    };
}

const getUsers =async (ctx)=>{
    const user=await userModels.find();
    ctx.body = {
        code: 200,
        message: '查询成功',
        data:user
    };
}

// 新增
const addUser =async (ctx)=>{
    console.log(ctx.request.body,7777);
    let data=ctx.request.body
    console.log(data,7777);
    await userModels.create(data);
    ctx.body = {
        code: 200,
        message: '新增成功',
    };
}

// 更新
const updateUser =async (ctx)=>{
    let data={
        userName:ctx.request.body.userName,
        password:ctx.request.body.password,
    };
    let whereStr={"_id":ctx.request.body._id}
    await userModels.updateOne(whereStr,data);
    ctx.body = {
        code: 200,
        message: '更新成功',
    };
}



module.exports = {
    queryUserById,
    deleteUserById,
    getUsers,
    addUser,
    updateUser
};