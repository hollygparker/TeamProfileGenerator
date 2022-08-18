const Employee = require('../lib/Employee')

describe('Employee', () => {
    it('Should return employee name', () => {
        const name = 'Abby'
        const worker = new Employee(name)
        expect(worker.name).toBe(name)
    })
})

describe('Employee', () => {
    it('Should return employee id', () => {
        const id = 369
        const digits = new Employee('Abby', id)
        expect(digits.id).toBe(id)
    })
})

describe('Employee', () => {
    it('Should return employee email', () => {
        const email = 'purple369@mail.com'
        const emailAddress = new Employee('Abby', 369, email)
        expect(emailAddress.email).toBe(email)
    })
})

describe('Employee', () => {
    it('Should invoke getName function', () => {
        const invokeName = 'Abby'
        const test = new Employee(invokeName)
        expect(test.getName()).toBe(invokeName)
    })
})

describe('Employee', () => {
    it('Should invoke getId function', () => {
        const invokeId = 369
        const test = new Employee('Abby', invokeId)
        expect(test.getId()).toBe(invokeId)
    })
})

describe('Employee', () => {
    it('Should invoke getEmail function', () => {
        const invokeEmail = 'purple369@mail.com'
        const test = new Employee('Abby', 369, invokeEmail)
        expect(test.getEmail()).toBe(invokeEmail)
    })
})

describe('Employee', () => {
    it ('Should invoke getRole function', () => {
        const invokeRole = 'Employee'
        const test = new Employee('Abby', 369, 'purple369@mail.com', invokeRole)
        expect(test.getRole()).toBe(invokeRole)
    })
})