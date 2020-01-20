/**
 * @param fieldId id que será usado na criação do campo
 * @param existentFieldId id do campo ja existente
 * @param fieldType tipo do campo que está sendo arrastado
 */
export function createField (fieldType, fieldId, existentFieldId, allFields) {
    console.log('creating', fieldId, existentFieldId)
    let fields = allFields
    const id = existentFieldId ? Number(existentFieldId) : Number(fieldId);
    const exisField = 
        getElementByIdFromNode(fields, Number(id));
    
    const type = exisField ? exisField.type : fieldType

    const allowChildren = exisField ? exisField.allowChildren : isChildrenAllowed(type)
        

    const campo = exisField ? exisField :{
        id: id,
        type: type,
        allowChildren: allowChildren,
        children: type === 'table' ? createTableChildren(id) : null
    }
    return campo
}

function createTableChildren(id){
    let linhas = [];
    for(let tr = 0; tr < 3; tr++){
        let linha = {
            id: id * Math.random(),
            type: 'tr',
            allowChildren: false,
            
        }
        let colunas = []
        for(let td = 0; td < 3; td++){
            let coluna = {
                id: linha.id *Math.random(),
                type: 'td',
                allowChildren: true,
                children: null
            }
            colunas.push(coluna)
        }
        linha.children = colunas
        linhas.push(linha)
    }
    return linhas
}

export function isChildrenAllowed(type){
    const notAllowChildrenTypes = ['input', 'button', 'checkbox', 'table']
    return !notAllowChildrenTypes.includes(type)
}

export function getElementByIdFromNode(nodes, id){
    for(let i = 0; i < nodes.length; i++){
        let child = nodes[i];
        if(child.id === id){
            nodes.splice(i, 1);
            return child;
        }
        if(!child.children){
            continue;
        }
        child = getElementByIdFromNode(child.children, id);
        if(child !== null){
            return child;
        }
    }
    return null;
}

export function addElementByIdFromNode(nodes, element, id, isNewField){
    for(let i = 0; i < nodes.length; i++){
        let child = nodes[i];
        if(child.id === id){
            if(child.allowChildren){
                if(!child.children){
                    child.children = []
                }
                child.children.splice(child.children.length, 0, element)
            }else{
                nodes.splice(i + 1, 0, element);
            }
            return child;
        }
        if(!child.children){
            continue;
        }
        child = addElementByIdFromNode(child.children, element, id);
        if(child !== null){
            return child;
        }
    }
    return null;
}