let employee :{
    readonly id: number,
    name: string
} = {id:1, name: 'Atharva'};

// employee.id = 1; readonly doesn't allow the vars declared with it to be changed
employee.name = 'Atharva'; //no nonsenese allowed in ts 