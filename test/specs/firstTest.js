import LinkPage from '../pageobjects/path.page.js'
describe('Ecomerce Application',async()=>
{ 
    
it('Email and Password', async ()=>{
    
  //await browser.url("https://commerceos.staging.devpayever.com/")
  await browser.url(LinkPage.url)
    
   // console.log(await browser.getTitle())
   //await $().waitForExist(LinkPage.payeverEmail)
   await  $(LinkPage.payeverEmail).isClickable()
   await $(LinkPage.payeverEmail).click()
   var value = "dragan.dosen20a@gmail.com"
   await browser.pause(3000)
   await $(LinkPage.payeverEmailImport).waitForEnabled()
   await  $(LinkPage.payeverEmailImport).setValue(value)
   
 
   
   
   await $(LinkPage.payeverPassword).click()
   await $("[type='password']").setValue("Palmeiras@123")
   
   await $ ("[type='button']").click()
   await browser.pause(2000)

  })

  it('Sign Up', async ()=>{


   var r = Math.random().toString(36).slice(2, 7);
   var mail = r + "@gmail.com"

   await browser.pause(5000)
   await $ (LinkPage.name).isDisplayed()
   await $ (LinkPage.name).isClickable()
   await $ (LinkPage.name).click()
   await $ ("[formcontrolname ='firstName']").setValue("Dragan")
   await browser.pause(2000)

   await $ (LinkPage.surename).isDisplayed()
   await $ (LinkPage.surename).click()
   await $ ("[formcontrolname ='lastName']").setValue("Dosen")
   await browser.pause(2000)

   await $ (LinkPage.email).isDisplayed()
   await $ (LinkPage.email).click()
   await $ ("[formcontrolname ='email']").setValue(mail)
   await browser.pause(2000)

   await $ (LinkPage.pass).isDisplayed()
   await $ (LinkPage.pass).click()
   await $ ("[formcontrolname ='password']").setValue("Palmeiras123@")
   await browser.pause(2000)

   await $ (LinkPage.confpass).isDisplayed()
   await $ (LinkPage.confpass).click()
   await $ ("[formcontrolname ='confirmPass']").setValue("Palmeiras123@")
   await browser.pause(2000)

   await $ ("[class ='signup-button']").isDisplayed()
  
   await $ ("[class ='signup-button']").click()
   await browser.pause(8000)

   await $ (LinkPage.company).isDisplayed()
   await $ (LinkPage.company).click()
   await $ ("[formcontrolname ='name']").setValue("DraganCo")
   await browser.pause(2000)

   await $ (LinkPage.detail).isDisplayed()
   await $ (LinkPage.detail).click()
   await browser.pause(2000)
   await $ ("//*[@id='mat-option-0']/span/div").click()
   //*[@id="mat-option-0"]/span/div
   await browser.pause(2000)

   await $ (LinkPage.phone).isDisplayed()
   await $ (LinkPage.phone).click()
   await $ ("[formcontrolname ='phoneNumber']").setValue("63564780")
   await browser.pause(2000)

   
   
   await $ ("[type ='submit']").click()
   await browser.pause(8000)

   //get started
   await $ ("[class ='welcome-screen-content-button']").click()
   await browser.pause(8000)
   
   //await expect($ ("//div[_ngcontent-dov-c606]contains('Checkout')"))
   await $ (LinkPage.widget1).isDisplayed()
   await $ (LinkPage.widget2).isDisplayed()
   await $ (LinkPage.widget3).isDisplayed()
   await $ (LinkPage.widget4).isDisplayed()
   await $ (LinkPage.widget5).isDisplayed()
   await $ (LinkPage.widget6).isDisplayed()


})


})
