import express from "express";
import playwrite from "playwright";

const app = express();
const PORT = 3001;

app.get("/", async(req, res) => {
  const browser = await playwrite.chromium.launch({
    headless: false,
  })

    const page = await browser.newPage();
    await page.goto('https://koi29.fr/');
    while(true) {
        await page.waitForTimeout(5000); // wait for 5 seconds
        await page.locator('#btn-open-login-form').click({ button: 'left' });
        await page.locator('#log').fill('test@test')
        await page.locator('#login_password').fill('password')
        await page.locator('#submit').click({ button: 'left' });
    }

});



app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});