const Intern = require('../lib/Intern')

describe('Intern', () => {
    it('Should return name of school', () => {
        const school = 'Northwestern'
        const schoolName = new Intern('Abby', 369, 'purple369@mail.com', school)
        expect(schoolName.getSchool()).toBe(school)
    })
})

// describe('Intern', () => {
//     it('Should invoke getSchool function', () => {
//         const invokeSchool = 'Northwestern'
//         const test = new Intern('Abby', 369, 'purple369@mail.com', invokeSchool)
//         expect(test.getRole()).toBe(invokeSchool)
//     })
// })

describe('Intern', () => {
    it('Should invoke getRole function', () => {
        const invokeRole = 'Intern'
        const test = new Intern('Abby', 369, 'purple369@mail.com', 'Northwestern', invokeRole)
        expect(test.getRole()).toBe(invokeRole)
    })
})

