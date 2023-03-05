let occupations = [
  'Junior developer',
  'Middle developer',
  'Senior developer',
  'Junior QA',
  'Middle QA',
  'Senior QA',
  'Project manager'
]
let namesArr = []

document.getElementById('submit').addEventListener('click', () => {
  let names = document.querySelectorAll('.input')
  names.forEach((element) => {
    namesArr.push(element.value)
  })
  document.querySelector('.result').innerHTML = ''
  document.querySelector('.result').style.border = '1px solid grey'
  createTeam(namesArr, occupations)
})

function createTeam(teamNames, teamOccupations) {
  function defineSalary(max, min) {
    let salary = Math.trunc(Math.random() * (max - min) + min)
    return salary
  }

  let team = {}
  teamNames.forEach((el, index) => {
    let newObj = {}

    newObj.name = el
    newObj.occupation = teamOccupations[index]

    team[Object.keys(team).length] = newObj
    if (teamOccupations[index].indexOf('Junior') > -1) {
      newObj.salary = defineSalary(500, 1000)
    } else if (teamOccupations[index].indexOf('Middle') > -1) {
      newObj.salary = defineSalary(1500, 2000)
    } else if (teamOccupations[index].indexOf('Senior') > -1) {
      newObj.salary = defineSalary(2500, 3000)
    } else {
      newObj.salary = defineSalary(4000, 4500)
    }

    newObj.tellAboutYourself = () => {
      return `My name is ${newObj.name}. I am a ${newObj.occupation}. Ma salary is about ${newObj.salary}$`
    }
  })
  team.showTeam = () => {
    let teamResult = ''
    for (let value of Object.values(team)) {
      if (typeof value !== 'function') {
        teamResult += `${value.name} - ${value.occupation}, salary - ${
          value.salary
        }\n${value.tellAboutYourself()}\n`
        document.querySelector(
          '.result'
        ).innerHTML += `${value.name} - ${value.occupation}, salary - ${value.salary}$<br/>`
      }
    }
    console.log(teamResult)
  }
  team.showTeam()
}
