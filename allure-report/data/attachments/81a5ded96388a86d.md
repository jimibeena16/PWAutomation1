# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: special_locators.spec.ts >> last locator
- Location: tests\special_locators.spec.ts:25:6

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
    51 × waiting for element to be visible, enabled and stable
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
      - generic [ref=f7e2]:
        - link [ref=f7e4] [cursor=pointer]:
          - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsu6lE8k5bGzeqXEhn0Lahv1_kin1cPv1pIbHeYMWYksIZpf30Bo5cWGzwtxMiGGK8J2wF-Gln0QUunt-u3IJs4ZslqwZVAJ13YeczF2mhjMyJYCJSRqH9qKxidHSKGXgOwlIS3OPrBxcYLgKpRKEFfZ3t30ItfnKsTEOMR_JPR6UJtddCh-2lhhmXkgMwhIICO0lLIcbYPeugUVz1o1m-F1bvfJPlHTopX14UpEovnq7jX4aPNVCmjcqd5UE318AyaDf8gDhjMVAb6nycJSPbLGXOeC2-4oAL7xnoOL4FSbCyRp3GZ_rc_rRJjaNkiR_kkzLLu55GX2r4dlwLU-SpIkHnvU6BnSXdawwM1zdeg0aqYq2R243VKSmIJICg6pS5ss2LSBob2jupmMEBHP54fe3LLMrmR6CPe-z5MO3QPRoBt9x_4zqBkTIeusLLRaIKu-CcWhkCf-AL3bQNycB0Z0hl0OTf3EhGArUUqZdMD1-EoxI8R7Px4dVYPYGX7KYI_nZ3VJ0tswC1QixrbkWpR5U229b2F402vl1FkYFepX9O6JbngdK1JQkQJrqOZrWRP_TLvJe696R2jR-bvcxcAgaaD19sCw0nOOXZPASQDVvg3M5CTLge66TRlsZyprutZ94gF_3gD-20IBhCpI6Z6MQrcsqxHb8S4lSA_ilFcp1jkaejXFF7mnbV9YV_VualVtxhkBXsu3PKEyX4OEG5YHQ-8k8_FO4pZvNTmqQ9UW4H2Tobvyh87UFpR0F5pRLZuxwZGq_2XFQl2_pfhwS-0_2fikGmPwI5KHT0o6Gd0ABL_YhCfSm1HtZhO7PPsaFfw9Qtu04sfySarrXKxSqfAAgR_uAGKNwYsqw6GPNQqFBL8PPQvArGceE5NxgtVXULD2-O0KquHoZrfqVCnbKnjGqoHgx9HrCOFNu_b4sTAUb0Ptvcdbnku3cmH4TXeeQRQFOZEm0YGKK-TP9srqL4H2VQH5GkMYNihUeb37x76weA3KjUt58A1VhKPiqlcG39IRP8fWWFdInNPwCyv9i4kvY4pNRlYXLX3RBzVA2PJ88MWu_T9gbAkNkUrwngZIghXGwdL9OSU_0VfZAKBcRTTNwb4jQhlE1NqvfFj7F05fK3UsfDi5VK8DO3ZoOjVtJY6sSMyFBCHhtG5CV5Melg7p1XHWE_xTepijv3iSoYI8IUg40FZUUoyNygy113ZIxZ8B5BiVrw2aEOdykOUjBBrWwFhGkb2KhRVavTioOv5xf0n-XleOvieakeKrgTsdu7cMtIn49DYU9SsQxZbvqUIuLt7jMsL4iAzg7HRlAh2Fm9IUwxLnadU2ROizRSedHHqZnC2Y03A7dQe3QRKkDjCpLP0B2_ymOLYzpwL854UGortg0AUx6adwzCOIjOy-he68xTH_FW-Fkju1KYmYIBTLru5-diOeXQ5S_vIoobJCjSe3dIieZWlFizzZeMcSGjAyeRErn-gpT-tyNJ0v1R8LmXxsQ4L2L3RVXnDbgZowRBRmrjPpLlNEs3SFQWlA5xaOSAQRqdIvQ1YrVlBqN82vwNZ_UfalT0sjDQOYnH5CTrhquDhqcBxdxizyUJazdrpfeYg_n1uDQEWxUqPyNHLgXMGvPMOA-jj_vkMvnhe2hDqkGIPyc5GqlfIRQHYW1ZNvESSIlUrhkJoT_3u6Gec_zf7Pef6FiB_nsc6p_Cf4Y1m-qeR0cN6PyGpYOKD6ke8HE22LI7AB0sqaZmeOYDCEdKF_GUtzt4Or7kVxoRfzsdZKs6C9L1UnHjA3X89FnbvYLKHuvb1bymU7GZWuMdejOQPL_k0kW8pxiXlQxFpV45SRilZrBoRXsBo003rnvT16-LJ53t80Tm3RE5RhIexWJ4N8IwfRVEFqhRzdYEuHpKIjzBbAeDThwQXTu9KF6I9szMWeqLYWsyXFvQqPLDNtq6Gb5R6kQYoekw2OGpjg80w8xaYiNjKZJ_E9N5ur4yefZMYuUPLJSc7DJfSt-qa35n1T9eGeDQKqOHh7dCycukYLgNRP-z0D_BLRKCpo&sai=AMfl-YQYSJnj0J5wgj65LXoQnKp5qpS3SpIlsyTHMDmD4CXYjYeLxwmqqFBDrxVw0mZMxA7dfYzNv1GgJ-72o2P16CzwCpASm_CEKloAZc3Pm1tTYBUgaXHWgvMHHsvFg-E28t0EujrgniDthdRJOTTempGGTP2WNDW3lnN2ckyJdBXBMKhIk7DAKcuq6GyK4Z6-khcj-BKXIZ2IBFmNbuNn1dGZSpNKjIE5cYGowuJYSQV1CJkZZp1r4-xN2cH4w8pT0VToZtZcpvHvvYH-NiP6bQHYHAxPXB9ualZ9t4NnXXcsmlNRtFHYV64M-qUp4I-xlry5lRvWWBZew8IwE8thgI7jSEZ3BHur6Dqy_GgwkdfJUCSqPFCZqGQ0tYoHyoOanB-rQz6LzEziJiVSheuv_dwO9eknww-bcDcn4oze6buNX1YXV-l3MULhCN3O0WsvjjRgcCTZ4d_25-VoyctigQWKu_qGjZLkXOq5LiiGflocOmAhtSWpmm01gSyL2d0X2SpFvdnhxdIJMVVuKwU-eD-_9dwQlI2IVER512fQ22L0Yzoxp9gAyvh9RaVTKlPnJyKZvhOxrAyeBQWtbp2QyuWMAuZZKh4h3AIWm5adNiMBdNlDPqhAoum75WcDfLV7dUM2K3EKX94wHHxRTrBi-xDbBYFrasU55ptGZVxlOybb7mtagXPponOSEMBotdGkgV6qhzFx1a2cspMCUHIpbKVNhd714C_wzftkPUJQj8lN3aTpvttySeAs6eFbMGwscdSGfZpe6ztswYHTAD1_JntzoImCQoYg-7BKKK14qPWCCCOgOyAZDjuypfmCBj7XNpuVpi28_OGLvRpYJLvGzCbfGedh51ecOEi1gTRwK_1x57gZCeoUwWxgWDBW1grjkuW5soBvbFijBkdxPA1EuhxCLQgsIVhjMdrP&sig=Cg0ArKJSzPF95zn9C_9x&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
          - img "Advertisement" [ref=f7e5]
        - generic [ref=f7e6]:
          - generic:
            - generic [ref=f7e7] [cursor=pointer]
            - button [ref=f7e12] [cursor=pointer]
  - contentinfo [ref=e134]:
    - generic [ref=e135]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```

# Test source

```ts
  1  | import{test, expect} from "@playwright/test"
  2  | 
  3  | test('chaining using placeholder', async({page}) => 
  4  |     {
  5  | await page.goto("https://demoqa.com/text-box")
  6  | const form = page.locator('#userForm');
  7  | await form.getByPlaceholder('Full Name').fill('Jimi');
  8  | await page.pause()
  9  | await form.getByPlaceholder('name@example.com').fill('jimi@test.com');
  10 | 
  11 | }
  12 | )
  13 | 
  14 | test('chaining using filter', async({page}) => {
  15 |     await page.goto("https://demoqa.com/automation-practice-form")
  16 | // forms page
  17 | const genderSection = page.locator('#genterWrapper');
  18 |  await page.pause()
  19 | await genderSection.getByText('Male', {exact: true}).click();
  20 | await page.pause()
  21 |    
  22 | }
  23 | )
  24 | 
  25 | test.only('last locator', async({page}) => {
  26 |  await page.goto("https://demoqa.com/elements")
  27 | 
  28 | const menuItems = page.locator('.menu-list li');
  29 | //await page.pause()
> 30 | await menuItems.last().click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  31 | 
  32 | await page.screenshot({
  33 |     path:'screenshots/screenshot1.png'
  34 | })
  35 | }
  36 | 
  37 | )
```