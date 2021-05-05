const { Console } = require("console");
const puppepteer = require("puppeteer");
//const assert = require("assert");
const expect = require('chai').expect;

(async () => {
    let browser;

    browser = await puppepteer.launch({
        args: ['--start-maximized'],
        "headless": false,

    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1366, height: 768 });

    await page.setDefaultNavigationTimeout(0);
    await page.goto("https://gamesmith.com/", {
        waitUntil: 'load',
        // Remove the timeout
        timeout: 0
    });

    //Login and Verfify name start here
    try {
        const [flag] = await page.$x("//a[contains(text(), 'Sign In')]");
        await flag.click();
        await page.waitFor(2000);
        await page.waitForSelector("[name='email']", { visible: true })
        await page.click("[name='email']")
        await page.type("[name='email']", 'Muneebakhtaar@gmail.com')
        await page.click("[type='password']");
        await page.type("[type='password']", 'mun123,./');
        console.log("Welcome");
        await page.waitForSelector("[type='submit']")
        await page.click("[type='submit']");
        console.log("Logged in");

        await page.waitFor(5000);

        await page.waitForSelector('._21LNYQeV1rakEakR67jJXP', { visible: true });
        await page.click('._21LNYQeV1rakEakR67jJXP');
        await page.waitFor(1500);
        await page.waitForSelector('.dd-items-center > li:nth-of-type(1) a')
        await page.click('.dd-items-center > li:nth-of-type(1) a')

                      //My Profile, copying my name from element, triming it and verifying with expected name
        await page.waitForSelector(".FOxDw0j77vE8_Lk6i8gMt h3");
        const name = await page.$eval('.FOxDw0j77vE8_Lk6i8gMt h3', el => el.textContent.trim());
        expect(name).to.equal('Muneeb Akhtar')
        console.log(`Profile Name: "${name}" `);
    }
    catch (error) {
        throw ("Login/Verify Name Scenario Failed   " + error);
    }
    // Login and verify name ends here 

    //*Studio creation start here

    try {
        await page.waitForSelector("._2lOnGq2WT5_zORrWxySo76 > :nth-child(6)");
        await page.hover("._2lOnGq2WT5_zORrWxySo76 > :nth-child(6)");
        console.log("hoveredddddd");
        await page.click("._2lOnGq2WT5_zORrWxySo76 > :nth-child(6)");

        await page.waitForSelector("._265El3KgV_oWA2O9IBrBvp div");
        await page.click("._265El3KgV_oWA2O9IBrBvp div");
        await page.waitFor(3000)
        await page.evaluate(() => {
            window.scrollBy(0, 700);

        });

        const [texts] = await page.$x("//span[contains(text(), 'Join now')]");
        await texts.click();

        await page.waitFor(1000);
        await page.click("#g3021-yourname", { visible: true });
        await page.type("#g3021-yourname", 'AUTO');

        await page.click("#g3021-email", { visible: true });
        await page.type("#g3021-email", 'QA');

        await page.click("#g3021-companyname", { visible: true });
        await page.type("#g3021-companyname", 'Checkly');
        await page.click("#contact-form-comment-g3021-howcangamesmithhelpyou", { visible: true });
        await page.type("#contact-form-comment-g3021-howcangamesmithhelpyou", 'Relax Guys its a Test');

        console.log("Studio done");
    }
    catch (error) {
        throw ("Studio creation scenario is Failed " + error)
    }
    //Create Stduio ends here



    //*Game Ninja start here 
    try {
        await page.waitFor(3000)
        await page.evaluate(() => {
            window.scrollBy(0, -700);

        });
        await page.waitFor(3000)
        const [game] = await page.$x("//a[contains(text(), 'Games')]");
        await game.click();
        await page.waitFor(5000);
        await page.waitForSelector("[placeholder='Game Title']");
        await page.click("[placeholder='Game Title']");
        await page.type("[placeholder='Game Title']", 'Ninja');

        await page.click(".icon-search");

        //this code for go to child div and copy text inside element
        /*await page.waitForSelector(".pypQWjFlvoBi-PqXYxX9l:nth-child(19) > .\_3j7-miyRcLk0dldA1m40XP > .\_3oE6DpZab91zwJ_d_RcBIW > .\_3GUxZhB18nozxGq-Rl1CY > a > h1");
        const Gamername = await page.$eval('.pypQWjFlvoBi-PqXYxX9l:nth-child(19) > .\_3j7-miyRcLk0dldA1m40XP > .\_3oE6DpZab91zwJ_d_RcBIW > .\_3GUxZhB18nozxGq-Rl1CY > a > h1', el => el.textContent.trim());
         console.log(Gamername); 
     
     
        var conditionn = await page.$eval(".pypQWjFlvoBi-PqXYxX9l:nth-child(19) > .\_3j7-miyRcLk0dldA1m40XP > .\_3oE6DpZab91zwJ_d_RcBIW > .\_3GUxZhB18nozxGq-Rl1CY > a > h1", el => el.textContent.includes("Ninja Hens"));
        expect(conditionn).to.equal(true);
     
        console.log("Condition is " + conditionn);
        */
      
                                    //find ninja hen inside existing page as ctrl+f
        await page.waitFor(8000);
        var findGamer = await page.evaluate(() => window.find("Ninja Hens"));

        expect(findGamer).to.equal(true);
        console.log(" \"Ninja Hens\" found");
    }
    catch (error) {
        throw ("Game search scenario failed" + error);

    }
    // game ninja ends here

    //*Makets tab start here
    try {
        await page.waitFor(4000);
        await page.click("._2lOnGq2WT5_zORrWxySo76 > :nth-child(4)");
        await page.waitForSelector("._2FxSPnRP6dVNVLjj8ZQewN");
        await page.click("._2FxSPnRP6dVNVLjj8ZQewN");
        await page.type("._2FxSPnRP6dVNVLjj8ZQewN", 'Karl Unterholzner');
        await page.waitForSelector(".fa-search");
        await page.click(".fa-search");
        await page.waitFor(3000);
                            //Coping the text exist in an element and triming it
        try {
            await page.waitForSelector(".as92j__LRXPAO3MCfJICM > :nth-child(1) h1");
            var Maker = await page.$eval(".as92j__LRXPAO3MCfJICM > :nth-child(1) h1", el => el.textContent.trim());
            expect(Maker).to.equal("Karl Unterholzner");
            console.log(Maker);
        }
        catch (error) {
            throw ("Karl didn't exist in results  " + error);
        }

    }
    catch (error) {
        throw ("Market Search scenario failed" + error);
    }

    //Makets tab end here

    //*Script to implement job  
    try {
        await page.waitFor(3000);
        await page.waitForSelector("._2lOnGq2WT5_zORrWxySo76 > :nth-child(8)");
        await page.click("._2lOnGq2WT5_zORrWxySo76 > :nth-child(8)");
        await page.screenshot({ path: 'buddy3-screenshot.png' });
        const text = "Artist";
        await page.waitForSelector("._1m3PCjfYC18vYdJvRnEboy");
        await page.click("._1m3PCjfYC18vYdJvRnEboy");
        await page.type("._1m3PCjfYC18vYdJvRnEboy", text)
        await page.waitFor(5000)
                                   //verifying the "Artist" text exist in any string on this page
        try {
            await page.waitForFunction(
                (text) => document.querySelector("body").innerText.includes(text),
                { timeout: 10000 },
                text
            );
            console.log(` "${text}" is  found`);
        } catch (e) {
            throw (`Text "${text}" is not found`);
        }
        console.log("Script End: Test Cases Passed");

    }
    catch (error) {
        throw ("Job Searching Scenario Failed >>   " + error);

    }

    //Jobs Script end here
     await browser.close();



})();