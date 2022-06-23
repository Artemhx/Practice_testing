const enterprises = [
    {
      id: 1,
      name: "Предприятие 1",
      departments: [
        {
          id: 2,
          name: "Отдел тестирования",
          employees_count: 10,
        },
        {
          id: 3,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 4,
          name: "Администрация",
          employees_count: 15,
        },
      ]
    },
    {
      id: 5,
      name: "Предприятие 2",
      departments: [
        {
          id: 6,
          name: "Отдел разработки",
          employees_count: 50,
        },
        {
          id: 7,
          name: "Отдел маркетинга",
          employees_count: 20,
        },
        {
          id: 8,
          name: "Отдел охраны труда",
          employees_count: 5,
        },
      ]
    },
    {
      id: 9,
      name: "Предприятие 3",
      departments: [
        {
          id: 10,
          name: "Отдел аналитики",
          employees_count: 0,
        },
      ]
    }
  ]

// 1. Вывести все предприятия и их отделы. Рядом указать количество сотрудников.
// Для предприятия посчитать сумму всех сотрудников во всех отделах.

// **Пример:**
// Предприятие 1 (45 сотрудников)
// - Отдел тестирования (10 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Администрация (15 человек)
// Предприятие 2 (75 сотрудников)
// - Отдел разработки (50 сотрудников)
// - Отдел маркетинга (20 сотрудников)
// - Отдел охраны труда (5 сотрудников)
// Предприятие 3 (нет сотрудников)
// - Отдел аналитики (нет сотрудников)

for(let i=0;i<enterprises.length;i++)
{
    //переменная для подсчёта кол-ва сотрудников
    let empNum = 0
    for(let j=0;j<enterprises[i].departments.length;j++)
    {
        empNum += enterprises[i].departments[j].employees_count
    }
    if(empNum != 0)
    {
        console.log(enterprises[i].name + " (" + empNum + " сотрудников)")
    }else console.log(enterprises[i].name + " (нет сотрудников)")
    
    for(let j=0;j<enterprises[i].departments.length;j++)
    {
        if(enterprises[i].departments[j].employees_count != 0)
        {
            console.log("- "+ enterprises[i].departments[j].name + " (" + enterprises[i].departments[j].employees_count + " сотрудников)")
        }else console.log("- "+ enterprises[i].departments[j].name + " (нет сотрудников)")
    } 
        
}

// 2. Написать функцию, которая будет принимать 1 аргумент
// (id отдела или название отдела и возвращать название предприятия, к которому относится).
// Пример:
// getEnterpriseName(4) // Предприятие 1
// getEnterpriseName("Отдел маркетинга") // Предприятие 2

const getEnterpriseName = function(id)
{
     
    let enterpriseName = ""
    for(let i =0;i< enterprises.length;i++)
    {
        for(let j =0; j< enterprises[i].departments.length; j++)
        {
            if(id == enterprises[i].departments[j].id || id == enterprises[i].departments[j].name)
            {
                // присваиваем переменной название предприятия, к которому относится отдел
                enterpriseName = enterprises[i].name
            }
        }
    }
    return enterpriseName
}

getEnterpriseName("4")
getEnterpriseName("Отдел маркетинга")

// Для проверки -> Выведет в консоль название предприятия, которому принадлежит отдел
// console.log(getEnterpriseName("4"))
// console.log(getEnterpriseName("Отдел маркетинга"))




// 3. Написать функцию, которая будет добавлять предприятие. В качестве аргумента принимает название предприятия
// Пример:
// addEnterprise("Название нового предприятия")

const addEnterprise = function(enterpriseName)
{
    let maxId = 0 // переменная для определения номера последнего id
    for(let i =0;i< enterprises.length;i++)
    {
        maxId = enterprises[i].id
        for(let j =0; j< enterprises[i].departments.length; j++)
        {
            maxId = enterprises[i].departments[j].id
        }
    }
    // добавление нового предприятия в enterprises
    enterprises.push({id: maxId+=1, name: enterpriseName, departments: []})
}

addEnterprise('Предприятие 4')

// Для проверки -> выведет в консоль названия всех предприятий, вместе с новым добавленным
// enterprises.forEach(function(item)
// {
//     console.log(item.name)
// })


// 4. Написать функцию, которая будет добавлять отдел в предприятие.
// В качестве аргумента принимает id предприятия, в которое будет добавлен отдел и название отдела.
// Пример:
// addDepartment(1, "Название нового отдела")

const addDepartment = function(enterpriseId,departmentName)
{
    let maxId = 0 // переменная для определения номера последнего id
    for(let i =0;i< enterprises.length;i++)
    {
        maxId = enterprises[i].id
        for(let j =0; j< enterprises[i].departments.length; j++)
        {
            maxId = enterprises[i].departments[j].id
        }
    }

    for(let i=0;i<enterprises.length;i++)
    {
        if(enterprises[i].id == enterpriseId)
        {
            //добавление нового отдела в предприятие
            enterprises[i].departments.push({id: maxId+=1, name: departmentName, employees_count: 0,})  
        }
    }
}

addDepartment(1,'Отдел кадров')

// Для проверки -> Выведет в консоль все отделы, в том числе новые добавленные 
// for(let i=0;i<enterprises.length;i++)
// {
//     console.log(enterprises[i].name)
//     for(let j=0;j<enterprises[i].departments.length;j++)
//     {
//         console.log("- "+ enterprises[i].departments[j].name)
//     } 
// }


// 5. Написать функцию для редактирования названия предприятия.
// Принимает в качестве аргумента id предприятия и новое имя предприятия.
// Пример:
// editEnterprise(1, "Новое название предприятия")

const editEnterprise = function(enterpriseId,newEnterprise)
{
  for(let i=0;i<enterprises.length;i++)
  {
      if(enterprises[i].id == enterpriseId)
      {
        // изменяем название предприятия
        enterprises[i].name = newEnterprise
      }
  }
}

editEnterprise(1,"Предприятие 111")

// Для проверки -> Выведет в консоль названия всех предприятий и их id
// for(let i=0;i<enterprises.length;i++)
// {
//     console.log(enterprises[i].name + " - id:" + enterprises[i].id)
// }


// 6. Написать функцию для редактирования названия отдела.
//Принимает в качестве аргумента id отдела и новое имя отдела.
// Пример:
// editDepartment(7, "Новое название отдела")

const editDepartment = function(departmentId,newDepartment)
{
  for(let i =0;i< enterprises.length;i++)
  {
      for(let j =0; j< enterprises[i].departments.length; j++)
      {
          if(enterprises[i].departments[j].id == departmentId)
          {
              // изменяем название отдела
              enterprises[i].departments[j].name = newDepartment
          }
      }
  }
}

editDepartment(7, "Отдел бухгалтерии")

//Для проверки -> Выведет в консоль названия всех отделов и их id
// for(let i=0;i<enterprises.length;i++)
// {
//     console.log(enterprises[i].name)
//     for(let j=0;j<enterprises[i].departments.length;j++)
//     {
//         console.log("- "+ enterprises[i].departments[j].name + " - id:" + enterprises[i].departments[j].id)
//     } 
// }


// 7. Написать функцию для удаления предприятия. В качестве аргумента принимает id предприятия.
// Пример:
// deleteEnterprise(1)

const deleteEnterprise = function(enterpriseId)
{
  for(let i=0;i<enterprises.length;i++)
  {
      if(enterprises[i].id == enterpriseId)
      {
        // удаляем предприятие
        enterprises.splice(i,1)
      }
  }
}

deleteEnterprise(1)

// Для проверки -> Выведет в консоль названия оставшихся предприятий и их id
// for(let i=0;i<enterprises.length;i++)
// {
//     console.log(enterprises[i].name + " - id:" + enterprises[i].id)
// }




// 8. Написать функцию для удаления отдела.
// В качестве аргумента принимает id отдела. Удалить отдел можно только, если в нем нет сотрудников.
// Пример:
// deleteDepartment(3)

const deleteDepartment = function(departmentId)
{
  for(let i =0;i< enterprises.length;i++)
  {
      for(let j =0; j< enterprises[i].departments.length; j++)
      {
          if(enterprises[i].departments[j].id == departmentId && enterprises[i].departments[j].employees_count == 0)
          {
              // удаляем отдел
              enterprises[i].departments.splice(j,1)
          }
      }
  }
}

deleteDepartment(10)

//Для проверки -> Выведет в консоль названия всех отделов и их id, кроме удалённых
// for(let i=0;i<enterprises.length;i++)
// {
//     console.log(enterprises[i].name)
//     for(let j=0;j<enterprises[i].departments.length;j++)
//     {
//         console.log("- "+ enterprises[i].departments[j].name + " - id:" + enterprises[i].departments[j].id)
//     } 
// }




// 9. Написать функцию для переноса сотрудников между отделами одного предприятия.
// В качестве аргумента принимает два значения: id отдела,
// из которого будут переноситься сотрудники и id отдела, в который будут переноситься сотрудники).
// Пример:
// moveEmployees(2, 3)

const moveEmployees = function(idFrom,idTo)
{
  let check1
  let check2
  let employeeCount
  for(let i =0;i< enterprises.length;i++)
  {
      for(let j =0; j< enterprises[i].departments.length; j++)
      {
        
          if(enterprises[i].departments[j].id == idTo)
          {
            check1 = i
          }
          if(enterprises[i].departments[j].id == idFrom)
          {
            check2 = i
          }
          
      }
  }
  
  if(check1 == check2)// если отделы находятся в одном предприятии, код ниже выполнится
  {
    for(let i =0;i< enterprises.length;i++)
    {
      for(let j =0; j< enterprises[i].departments.length; j++)
      {  
        if(enterprises[i].departments[j].id == idFrom)
        {
          // передаем кол-во сотрудников отдела из которого хотим перенести в переменную employeeCount
          employeeCount = enterprises[i].departments[j].employees_count
          // обнуляем кол-во сотрудников отдела из которого хотим перенести
          enterprises[i].departments[j].employees_count = 0

          for(let i =0;i< enterprises.length;i++)
          {
              for(let j =0; j< enterprises[i].departments.length; j++)
              {
                if(enterprises[i].departments[j].id == idTo)
                {
                  // добавляем кол-во сотрудников, при помощи переменной employeeCount, в отдел куда хотим перенести
                  enterprises[i].departments[j].employees_count += employeeCount
                }
              }
          }
        }
      }
    }
  }else console.log("Отделы находятся в разных предприятиях!")
}

moveEmployees(2,3)


// Для проверки -> можно вывести код из задания 1
// for(let i=0;i<enterprises.length;i++)
// {
//     let empNum = 0
//     for(let j=0;j<enterprises[i].departments.length;j++)
//     {
//         empNum += enterprises[i].departments[j].employees_count
//     }
//     if(empNum != 0)
//     {
//         console.log(enterprises[i].name + " (" + empNum + " сотрудников)")
//     }else console.log(enterprises[i].name + " (нет сотрудников)")
    
//     for(let j=0;j<enterprises[i].departments.length;j++)
//     {
//         if(enterprises[i].departments[j].employees_count != 0)
//         {
//             console.log("- "+ enterprises[i].departments[j].name + " (" + enterprises[i].departments[j].employees_count + " сотрудников)")
//         }else console.log("- "+ enterprises[i].departments[j].name + " (нет сотрудников)")
//     } 
        
// }