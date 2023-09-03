const name = document.getElementById('username')
const password = document.getElementById('pass')
const conpassword = document.getElementById('cpass')
const em = document.getElementById('email')
const form = document.getElementById('login-form')
const errorele = document.getElementById('error')
form.addEventListener('submit', (e) => {
    let messages = []
    let x = em.value.indexOf('@gmail.com')
    if(x == -1)
    {
        messages.push('enter a valid email')
    }
    if (password.value.length < 8)
    {
        messages.push("Password must atleast have 8 characters")
    }
    if (password.value != conpassword.value)
    {
        messages.push("Both passwords doesn't match")
    }
    if (messages.length > 0) {
        e.preventDefault()
        alert(messages.join('\n'))
    }
    else
    {
        alert('Register Sucdess now you can Login Using your credentials')
    }
})
function googleTranslateElementInit() {
    new google.translate.TranslateElement({ pageLanguage: 'en' }, 'google_translate_element');
}