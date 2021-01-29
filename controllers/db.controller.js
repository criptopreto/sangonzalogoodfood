const db = require('../models');
const Categoria = db.categorias;
const Grupo = db.grupos;
const Op = db.sequelize.Op;

exports.createCategoria = (catData) =>{
    return new Promise((res, rej)=>{
        Categoria.create(catData).then(data=>{
            res(data);
        }).catch(err=>{
            rej(err);
        });
    })
}

exports.createGrupo = ((groupData) =>{
    return new Promise((res, rej)=>{
        Grupo.create(groupData).then(data=>{
            res(data);
        }).catch(err=>{
            rej(err);
        })
    })
})

exports.getCategorias = async ()=>{
    return await Categoria.findAll();
}

exports.getCategoriasAndGrupos = async ()=>{
    const categoria = await Categoria.findAll({include: [{
        model: Grupo
    }]});
    return categoria;
}