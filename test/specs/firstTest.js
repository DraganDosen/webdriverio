describe('Ecomerce Application',async()=>
{ 
    it('Login Fail page', async ()=>{

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("LoginPage Practise")
    //await $("#username").setValue("rahulshettyacademy1")
    await $("[id='username']").setValue("rahulshettyacademy1")
    await browser.pause(3000)
    await $("//input[@type='password']").setValue("learning")
    await $("#signInBtn").click()
    //await browser.pause(3000)
    await console.log((await $(".alerdanger")).getText())
    await browser.waitUntil(async()=>await $("#signInBtn").getAttribute('value') ==='Sign In',
 {
    timeout: 5000,
    timeoutMsg: 'expected text to be different after 5s'
  })     
  await console.log((await $(".alert-danger")).getText())  
  await expect ($("p")).toHaveTextContaining("username is rahulshettyacademy and Password is learning")
})
it('Login Success page', async ()=>{

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    console.log(await browser.getTitle())
    await expect(browser).toHaveTitleContaining("LoginPage Practise")
    await $("#username").setValue("rahulshettyacademy")
    await browser.pause(3000)
    await $("//input[@type='password']").setValue("learning")
    await $("#signInBtn").click()
   // wait chackout button is visible
    //await $("//*[@id='navbarResponsive']/ul/li/a").waitForExist()
    await $(".btn-primary").waitForExist()
    await expect(browser).toHaveUrlContaining("shop")
    await expect(browser).toHaveTitleContaining("ProtoCommerce")

})


})



