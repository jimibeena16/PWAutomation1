# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> has title4
- Location: tests\demo.spec.ts:40:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('.menu-list li').last()
    - locator resolved to <li id="item-4" class="btn btn-light ">…</li>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
    - waiting 20ms
    2 × waiting for element to be visible, enabled and stable
      - element is not visible
    - retrying click action
      - waiting 100ms
    42 × waiting for element to be visible, enabled and stable
       - element is not visible
     - retrying click action
       - waiting 500ms

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - banner [ref=e3]:
    - link [ref=e4] [cursor=pointer]:
      - /url: https://demoqa.com
  - generic [ref=e8]:
    - generic [ref=e11]:
      - generic [ref=e12]:
        - generic [ref=e13] [cursor=pointer]: Elements
        - list [ref=e25]:
          - listitem [ref=e26] [cursor=pointer]:
            - link "Text Box" [ref=e27]:
              - /url: /text-box
          - listitem [ref=e30] [cursor=pointer]:
            - link "Check Box" [ref=e31]:
              - /url: /checkbox
          - listitem [ref=e34] [cursor=pointer]:
            - link "Radio Button" [ref=e35]:
              - /url: /radio-button
          - listitem [ref=e38] [cursor=pointer]:
            - link "Web Tables" [ref=e39]:
              - /url: /webtables
          - listitem [ref=e42] [cursor=pointer]:
            - link "Buttons" [ref=e43]:
              - /url: /buttons
          - listitem [ref=e46] [cursor=pointer]:
            - link "Links" [ref=e47]:
              - /url: /links
          - listitem [ref=e50] [cursor=pointer]:
            - link "Broken Links - Images" [ref=e51]:
              - /url: /broken
          - listitem [ref=e54] [cursor=pointer]:
            - link "Upload and Download" [ref=e55]:
              - /url: /upload-download
          - listitem [ref=e58] [cursor=pointer]:
            - link "Dynamic Properties" [ref=e59]:
              - /url: /dynamic-properties
      - generic [ref=e62]: Forms
      - generic [ref=e75]: Alerts, Frame & Windows
      - generic [ref=e87]: Widgets
      - generic [ref=e100]: Interactions
      - generic [ref=e112]: Book Store Application
    - generic [ref=e124]: Please select an item from left to start practice.
    - iframe [ref=e133]:
      - generic [ref=f5e2]:
        - link [ref=f5e4] [cursor=pointer]:
          - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvLKL9cyrj4xu1sxWAwsTpg8QHNj1DQpgP5Qw3CjD8oGvgMKlHQB16fX2s7Z0KA5nFcSE_AjlhS7jeSonU4SrOKWUJa1nk84bKGWhAJEKEuMS4UKvhxtNUTmU41PxB-yZuuP5T9yX67QnNBlugOEHgtrgOBYOPDNdiX7hXxMmL7N43ATduwPHOdZVQxya5Gv5kTq6NEc40kJ9dUOeoJBY8ZCNO6dwBJZkxMqSn5-_6XL16N3LgD_IxYZyxyUL-COkcXSkix1PZgOw1xXqHTIdRjQiMsccLItcYia-ttJWxiTkgwZkA6etJlvKVhaegc_7NiEdh8tIANQoIgVQbfY-7KjJ9r_Aq7GlN3T67O1Hg2IVFX-rnYvIA_BlWeQdoC4G6ZqxnjUoGonDzMuU4ORV2QMsZigermP_F2KL_cxkeSyCYfhve-JZzaRgyqrqd5purrvHbPzom_wKkV6Y-vwItVaKK0TKhpwKiL8sJvBFcpZqvmBoPNPyZWkvQRzFc2HBZrNGzprQ20FlnNJzy8FU5UeVeCnx1VSwwIW9p0UcY21Sld32GZlgKzkLoquE9v82JJWnPzNE6cdZlxhr5BIeQSnBG6vmW3VcydgfkSSkekGFhcvmSdFe4XuOFS6ugssjkBupcs9vBxAiZJFfy_Vos-_4c0zxUAPQZfZ8RaZWbQoisKTQSWzO-kBBI0wKEtEjAl3z3Tqc3plNR_2c7WEbQ71FHk3VejeGosE9UrD93-PNhZVLtR-SfH7KTszQVjsVQCBwdvFVdxv8pzDDxVn11nDV7sNLKfIKohgS231lgzLiY7w3e_LVdzspoFL75aj7u2MDjODilqTPVZbUi14hoNt7x3QaTtgJQ9mcZNN2Bb6COEMvAdOtpWv_5Mc6twCygdPBwGpSEQ-oMnpFUUQgYGdVtJBBRxjDOoiYbnU3nLbdQsyAEJu2P70Bk1HGrGLPVdaDfHv5sG_enEgjlv-5zowN3EVrjaEyJQLF-fqbE3ZyadFA0BPxcLR6lX_XFFBO8xsB4RhD6p-SHQeIrp67m-BZTVbu8QGo5ch0lhOuY8Uw4ApQKSn2UiYDr0fEHDk_0bHmOgH9YKYdx5HnpgmmEtI5OpyJIRHPVBL92x3m3tU07D6ToDE-0cmXKRtX2LSVw1ofT5oSg99uEki0pSUu28H0fOYWlseqbuN9e-A79i1GhzVhRc9pDMYzSOO7TVX5g4r9mjuPQXUe0MxfU6J6-fLGKr6kmZ_wiruFVYBZCWE4A0Y259P9gZUvaVUDdsaPg_ifOQu0_gkZZb2r3dJJv9YnvLjTO-2tUir9rtKrynT3Z7e5kzCm_sNjJRcBkbeEA3TU8J6_Kb4mNxXgbmNSVweguo8dgLF46PWkhwRqAsGPqPFj629QxzufTX3j8o6Y2g7OHuIFeYUMG7LDNFWRMQETrjHaPo25KiC0PanlXCy8163xKqaLoCfrALN-NwvpB5l9dznBMgcw3EcAEb93DDQg4vtS9MnUM4F6fQnN8xcMljUetOFOcY3cj8TcL4KD2vPUmt8fDiainZ84bDhIIod5v_ajSGQcE0b72e8IP-eWcPJV_jQ3M4ZMieOVbe8z8MPFCGnHXx4iTildl5GgL8Qs2S-bGMf4EEGp2NahBZoc4Jf6Rd6oQqrfbhtLYHHWaJZGItJB0QMk-bhaLkAyW8NGVhuQQ91fvX7WCWmQzl3EmUSiX71x-tjB8a4yZjf-kjR9cz6XuEocmUKHUjAqFZS6lpS_MNgYrotlHYFHoum6qoQmVpZaJyB81zlUYcl5d7GebnB7HtE16vqt_m1w7plnI4Wg08WTrk1jlBIUPraMbL9ahiFW-otcExvFy2MobxTRd1kghDPHJF3WtxiJ0vUD01JxxLXSxuTAT7NAWGo3TiWIUaEJU569B0PbqYrkcZ0gf14ampuoQWG41vH8-7SP9sBrxf0RFpB8RZ9dMzMwTIzP_0GyIYSFxiRxRj5_a6W1KY7_6lJtL37-o2zz8d_0Oa3OcNAgE8pN7dnACbFexbjPKtV-whveg7TxwkNEBs&sai=AMfl-YRdGzOPIlMY-AfHzoTOWwEGM145KyerYuYv33ZUF7_TQlOTYWsOmG9RnwbDuGxMA6VkDO2HYNEcw3DbnX53s_0WcymQThY4ddNdF7qAiSvgJ9dxA17g43s_1kGlOomj43a6HBCyd0X9zkHeqCVjXr_pfYsFB4Z89cgkCqA3jc-5qK2C6zMl_jekhgb_Hy6K6XPcwVZxMnW7C1axVNOiivc8gunrd91LYKHRHatOqR0MZuwHrbTBGm4Mx2D9Yz2QVp1eD5Lsv7jGeICjNe0zJKh9PiSIat1pzYmQsfPTHPoh1eZvB7httheagJTfnW-d9tmCM085KEs79QEaENJ05ge17jKxSABC34ee08ZoyYuuIf2qkQUEdEQu6KavVNNi13-9QuZFK5M6Iw5gAlNuqBxR7hVdAWCCiYENFjxWa9MkcT4ncoNoZU3jRjjyXkGDQqGLwgRVthPyzcvDDXus7VkbeOEj65pJ1M3HVsec-rF07FhBV2rPFTeG4dKLlLocKVySXL8VhUpKVVrzuabSf4xwWvGslsljtvUXqEoZ42ybZ-V9_FHE4Kszk9tV-RDu0S1WZO_FyF6z26AUP5JqxQEs2SGJdLv-6EunZ0HM3mh6LRODoc2DN1rwTwUqot5w6pK1sERTYauUzTSVlKIDP61Vp5lvQlzVbEZsfvDMboaOmttRK5IjpTtiyV9Bh-3feNTM6Z1bnAvSNEljFMYC55bgXQukyJwXbtbqyRIbxR26wdjMBrCJ7WXUBqgd6insysM7RFvA34cgI23HE7rQZsTQ9_XeQLKD3yRx2DER6Tha-u0QenJRdOCLUQ40AdQEl1Xfmqk-zqCSABgVmXUsxrL8qFAj4wQ1GlVQmt5bgkbwFITL1BYYrqxwdWIRmlnzQ5wny7VYwW-6liWqle63FCzCMJG_95uVjW_x7e4&sig=Cg0ArKJSzCRsu4iSxEtO&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
          - img "Advertisement" [ref=f5e5]
        - generic [ref=f5e6]:
          - generic:
            - generic [ref=f5e7] [cursor=pointer]
            - button [ref=f5e12] [cursor=pointer]
  - contentinfo [ref=e134]:
    - generic [ref=e135]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import {test,expect} from '@playwright/test'
  2  | 
  3  | test('has title', async ({ page }) => {
  4  | //Chaining using getByPlaceholder
  5  | await page.goto("https://demoqa.com/text-box")
  6  | const form = page.locator('#userForm');
  7  | await form.getByPlaceholder('Full Name').fill('Jimi');
  8  | await form.getByPlaceholder('name@example.com').fill('jimi@test.com');
  9  | });
  10 | 
  11 | test('has title1', async ({ page }) => {
  12 | //Chaining using filter
  13 | await page.goto("https://demoqa.com/automation-practice-form")
  14 | // forms page
  15 | const genderSection = page.locator('#genterWrapper');
  16 | 
  17 | await genderSection
  18 |     .locator('label')
  19 |     .filter({ hasText: 'Male' })
  20 |     .click();
  21 | 
  22 |     });
  23 | 
  24 | //using first()--when multiple elements match and want the first one
  25 | test('has title2', async ({ page }) => {
  26 | await page.goto("https://demoqa.com/elements")
  27 | const menuItems = page.locator('.menu-list li');
  28 | await menuItems.first().click();
  29 | //same as
  30 | await page.locator('.menu-list li').nth(0).click();
  31 |  });
  32 | 
  33 | test('has title3', async ({ page }) => {
  34 | //webtables
  35 | await page.goto("https://demoqa.com/webtables")
  36 | const rows = page.locator('tbody tr');
  37 | console.log(await rows.first().textContent());
  38 |  });
  39 | 
  40 | test('has title4', async ({ page }) => {
  41 | //using last()--when we need last matching element
  42 | await page.goto("https://demoqa.com/elements")
  43 | const menuItems = page.locator('.menu-list li');
> 44 | await menuItems.last().click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  45 |  });
  46 | 
  47 |  test('has title5', async ({ page }) => {
  48 | //webtables
  49 | await page.goto("https://demoqa.com/webtables")
  50 | const rows = page.locator('tbody tr');
  51 | await expect(rows.last()).toContainText('Kierra');
  52 | });
  53 | ``
  54 | test('has title6', async ({ page }) => {
  55 | //Using nth -- Used to select an element by index, starts from 0
  56 | await page.goto("https://demoqa.com/elements")
  57 | await page.locator('.menu-list li').nth(2).click();
  58 | });
  59 | 
  60 | test('has title7', async ({ page }) => {
  61 | //webtables
  62 | await page.goto("https://demoqa.com/webtables")
  63 | const rows = page.locator('tbody tr');
  64 | await expect(rows.nth(1)).toContainText('Alden');
  65 | });
  66 | 
  67 | test('has title8', async ({ page }) => {
  68 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  69 | await page.goto('https://demoqa.com/text-box');
  70 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  71 | await fullName.fill('Jimi');
  72 | 
  73 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  74 | await emailTextbox.fill('jimi@test.com');
  75 | });
  76 | 
  77 | test('has title9', async ({ page }) => {
  78 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  79 | await page.goto('https://demoqa.com/text-box');
  80 | const fullName = page.locator('#userName');
  81 | const email = page.locator('#userEmail');
  82 | await expect(fullName.or (email).first() ).toBeVisible();
  83 | });
  84 | 
```