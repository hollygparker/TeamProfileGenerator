const Engineer = require('../lib/Engineer')

describe('Engineer', () => {
    it('Should return Github username', () => {
        const github = 'abbypurple963'
        const githubUsername = new Engineer('Abby', 369, 'purple369@mail.com', github)
        expect(githubUsername.github).toBe(github)
    })
})

describe('Engineer', () => {
    it('Should invoke getGithub function', () => {
        const invokeGithub = 'abbypurple963'
        const test = new Engineer('Abby', 369, 'purple369@mail.com', invokeGithub)
        expect(test.invokeGithub()).toBe(invokeGithub)
    })
})

describe('Engineer', () => {
    it('Should invoke getRole function', () => {
        const invokeRole = 'Engineer'
        const test = new Engineer('Abby', 369, 'purple369@mail.com', 'abbypurple963', invokeRole)
        expect(test.invokeRole()).toBe(invokeRole)
    })
})