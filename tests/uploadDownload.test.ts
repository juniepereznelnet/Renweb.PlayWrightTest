import { test } from "@playwright/test";

test("Download files", async ({ page }) => {
    await page.goto("https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo");
    await page.type("#textbox", "Like, Share, Commend & Subscribe");
    await page.click("id=create");

    //const [download] = await Promise.all([
    const download = await Promise.all([
        page.waitForEvent("download"),
        page.click("id=link-to-download")
    ])

    const fileName = download[0].suggestedFilename();
    await download[0].saveAs(fileName);

    //const getFileNameValue = await download.path(); //download[0]
    //await download.saveAs(getFileNameValue);
    //console.log(getFileNameValue);

    //Note 1) that files are deleted after browser is closed
    //2) use page.on for unknown download initiation

    //await page.waitForTimeout(1500);
})

test("Upload files", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");
    await page.setInputFiles("//input[@type='file']", [
        "C:/Renweb.PlayWrightTest/uploaditems/upload.jpg",
        "C:/Renweb.PlayWrightTest/uploaditems/upload1.jpg"
    ]);

    await page.waitForTimeout(2000);
})

test("Upload files hidden", async ({ page }) => {
    await page.goto("https://blueimp.github.io/jQuery-File-Upload/");

    const [uploadFiles] = await Promise.all([
        page.waitForEvent("filechooser"),
        page.click("//input[@type='file']")
    ])
    const isMultiple = uploadFiles.isMultiple();
    console.log(isMultiple);

    uploadFiles.setFiles([
        "C:/Renweb.PlayWrightTest/uploaditems/upload.jpg",
        "C:/Renweb.PlayWrightTest/uploaditems/upload1.jpg"
    ])

    await page.waitForTimeout(2000);
})