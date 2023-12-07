// 云函数入口文件
const cloud = require('wx-server-sdk');

cloud.init({env: "to-do-list-6g8tj0yl491e4fa5"}); // 使用当前云环境

// 云函数入口函数
exports.main = async (event, context) => {
    const wxContext = cloud.getWXContext()
    let {things} = event
    if (!wxContext.OPENID)
        return {
            success: false,
            msg: '获取用户信息失败',
        };
    const db = cloud.database();
    const things_db = db.collection('things');
    const exist = await things_db.doc(wxContext.OPENID).get().catch(err => {
        return {
            success: false,
            msg: '数据库读取失败',
            err: err,
        };
    }).then(res => {
        return {
            success: true,
            msg: '获取成功',
            data: res.data,
        }
    });
    if (!exist.success || exist.data.length === 0) {
        return await things_db.add({
            data: {
                _id: wxContext.OPENID,
                openid: wxContext.OPENID,
                things: things,
            },
        }).catch(err => {
            return {
                success: false,
                msg: '数据库写入失败',
                err: err,
            };
        }).then(res => {
            return {
                success: true,
                msg: '上传成功',
                res: res,
            }
        });
    } else {
        return await things_db.doc(wxContext.OPENID).update({
            data: {
                things: things,
            },
        }).catch(err => {
            return {
                success: false,
                msg: '数据库更新失败',
                err: err,
            };
        }).then(res => {
            return {
                success: true,
                msg: '更新成功',
                res: res,
            }
        });
    }
}