interface IEmployee {
    code: number,
    name: string,
}

const christian = {} as IEmployee

christian.code = 1475
christian.name = 'Christian Herber'

function meet(): string {
    return(`Hi! I'm ${christian.name} and my code is ${christian.code}`)
}

console.log(meet())