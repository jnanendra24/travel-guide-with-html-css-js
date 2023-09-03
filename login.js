const em = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('login-form')
form.addEventListener('submit',(e) =>{
    let messages = []
    let x = em.value.indexOf('@gmail.com')
    if(x == -1)
    {
        messages.push('enter a valid email')
    }
    if(password.value.length < 8)
    {
        messages.push('Password must atleast have 8 characters')
    }
    if(messages.length > 0)
    {
        e.preventDefault()
        alert(messages.join('\n'))
    }
    else
    {
        alert('Login Sucess')
    }
})
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}