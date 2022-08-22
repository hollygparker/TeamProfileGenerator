const Manager = require('../lib/Manager')

describe('Manager', () => {
    it('Should return office number', () => {
        const officeNumber = 99
        const office = new Manager('Abby', 369, 'purple369@mail.com', officeNumber)
        expect(office.getOfficeNumber()).toBe(officeNumber)
    })
})

// describe('Manager', () => {
//     it('Should invoke getOfficeNumber function', () => {
//         const invokeOfficeNumber = 99
//         const test = new Manager('Abby', 369, 'purple369@mail.com', invokeOfficeNumber)
//         expect(test.invokeOfficeNumber()).toBe(invokeOfficeNumber)
//     })
// })

describe('Manager', () => {
    it('Should invoke getRole function', () => {
        const invokeRole = 'Manager'
        const test = new Manager('Abby', 369, 'purple369@mail.com', 99, invokeRole)
        expect(test.getRole()).toBe(invokeRole)
    })
})