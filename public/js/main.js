
document.addEventListener('DOMContentLoaded', () => {
    let classlist = document.querySelector('button.login').classList
    document.querySelector('button.login').addEventListener('click', () => {
        classlist.add('blur-effect')
        setTimeout(() => {
            classlist.remove('blur-effect')
        }, 300)
    })

    const progressBar = document.querySelectorAll('.progress-bar')
    progressBar.forEach((bar => {
        bar.style.width = bar.parentElement.nextElementSibling.textContent
    }))


  

    // document.querySelector('form').addEventListener('submit', (e) => {
    //     e.preventDefault()

    //     const formData = new FormData(document.querySelector('form'))
    //     const searchparams = new URLSearchParams()

    //     const name = formData.get('name')
    //     const email = formData.get('email');
    //     const message = formData.get('message')

    //     let data = {
    //        name, 
    //        email,
    //        message
    //     }

    //     let options = {
    //         method:"POST",
    //         header:{
    //             "Content-Type":"application/json"
    //         },
    //         body:JSON.stringify(data)
    //     }
    //     fetch('/', options)
    //         .then(response => response.json())
    //         .then(data =>  console.log(data))
    //         .catch(err =>  console.log(err))
    // })

})