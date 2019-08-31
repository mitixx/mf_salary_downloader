const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
        const page = await browser.newPage();
    await page.goto('https://payroll.moneyforward.com/',{waitUntil:'domcontentloaded'});
    const user = {
        'email':'',
        'pass':''
    }
    let month = 8 + 1 //8ヶ月+1
    await page.type('#sign_in_session_service_email',user.email);
    await page.type('#sign_in_session_service_password',user.pass);
    await page.click('input[name ="commit"]');
    await page.goto('https://payroll.moneyforward.com/my/reports/payslips',{waitUntil:'domcontentloaded'});
    for (let l = month; l--;) {
        await page.click('div.period-list');
        await page.click('ul[aria-labelledby="period-list"] > li:nth-child('+l+')');
        //await page.waitForNavigation({waitUntil: "3000"});
        await page.click('div.reports-header > ul > li:nth-child(2)'); //pdf =2 print = 1
        console.log(l+'明細の処理完了');
    }
    await browser.close();
})();