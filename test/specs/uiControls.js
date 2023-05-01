//const expectchai = require ('chai').expect
describe('UI Controls Test Suite',async()=>
{ 
  
it('UI Controls', async ()=>{

    await browser.url("https://rahulshettyacademy.com/loginpagePractise/")
    
    await $("#username").setValue("rahulshettyacademy")
    await browser.pause(3000)
    await $("//input[@type='password']").setValue("learning")
    const radioButtons = await $$(".radiotextsty")
    const userDropdown = radioButtons[1]
    await userDropdown.click()
    await browser.pause(5000)
    const modal = await $(".modal-body")
    await modal.waitForDisplayed()
    await $("#okayBtn").click()
    await userDropdown.selectByIndex(0)
    //expectchai (await userDropdown.getValue()).to.equal("stud")
    

   

})


})