const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({headless:false});
    const page = await browser.newPage();
    const ap = await page
    ap.goto('https://payroll.moneyforward.com/',{waitUntil:'domcontentloaded'});
    const user = {
        'email':'',
        'pass':''
    }
    let month = 8
    ap.type('#sign_in_session_service_email',user.email);
    ap.type('#sign_in_session_service_password',user.pass);
    page.goto('https://payroll.moneyforward.com/my/reports/payslips',{waitUntil:'domcontentloaded'});
    page.click('div.period-list');
    for (let l = 0; l < month; l++) {
        ap.select('select.dropdown-menu')
        page.click('a.pa-btn-setting pa-btn-size-xxsmall');
    }
    await browser.close();
})