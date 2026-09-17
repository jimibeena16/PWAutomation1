# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: demo.spec.ts >> has title4
- Location: tests\demo.spec.ts:38:6

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
Call log:
  - attempting scroll into view action
    2 × waiting for element to be stable
      - element is not visible
    - retrying scroll into view action
    - waiting 20ms
    2 × waiting for element to be stable
      - element is not visible
    - retrying scroll into view action
      - waiting 100ms
    42 × waiting for element to be stable
       - element is not visible
     - retrying scroll into view action
       - waiting 500ms
    - waiting for element to be stable

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
    - generic [ref=e130]:
      - iframe [ref=e133]:
        - generic [ref=f4e2]:
          - link [ref=f4e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjss-1aJHwTqUCbrKSfUivXjuOxSruOVUCKyBWNbORGxok3KAmfGJxMPTeuoOJJ76Yl95KnTnuJWaHULFriPB8hrtwT-tTKebgs-TWtHGpTy6XOoESWRo2moeB7mp-_6UwQTFHsl2iZ1I0JVpT1Y-idY0oN29GDSBb6w1WnsTbZ-b1t7_ZTI4iZqgXu98oG1l7ZRMY5ELHZrq_c0NTfScYXIZy2EWfM6vJZTdkJGz64FXq0q2Tq0gmdwRIEd93-fRLkciuInM9dAYokiqwB34JQtC0-CQUWBU_hjwh5Knd-RB1fJv_095BBaJVzgZzbWwL36HQKVi-LCDziYfrjQB9HGVBajLoQs8HbE1e3R5CdLUCx8QH86jvRiZwuwMUredXFpKbJJ2v0SOzBhYb46tL5IV0rmJfQd0M03o0ilfh497JcmC6P6FDdTIJnZcvnnjfD-MkP5CDu-Y6J87Xkhy1fHA9Ad0gYijArCdkiylPel6-cMLSNSJ8tnmjValS2UOkqP19vJE6rgYgElrMsmn3Alq_ySMR7xBkCDfwyzaeBoOOx_Rurj3MiyLCtN5KVJRRc-W1dQmrFAjTVg554OeZL20PSOJ_2zKQ-3PubCA8kFd7XtXwUc3GVTB8m35Wo7R73jr-WVVxCFOdR35c_dHCQnMCM0kWK1rfWz7wJdJKEyXXX324kVBVPmzVh6oDm-UmUGAxIkapg_YI4i6KFanHHKcrHJf0mK3M6cliJQXwCYDIu-Usmn49cj-VCGUSMNIGrTnuVk5ed9UkkS10h_r390Z5u8zZQQTaAxCxDhFINGzD2Lqo5ITTOLtz7D1h3Cf7-2FhQ4GCSZgHyF6H_37yCiTPxyHYv3r3oD38zACJMiY9F9pWV2x7JEnqfsRv58l3m9Z8-3dxg2wlqWckjrtCZbNZBRit-ACxo24QC6LQ70PRoOPs497EKmENbsPppdGDqvDBLHE852OuYf_2CNtplZsc7o6gc6ZfIpP12SBpRIYnt7M4-XlQyUplAaZMgizNsf6b9B9hSm97CccqnlsWFCrQm02WGQMHnEzhIHOQ-E9FD_crPBNIUW7bFO4MTP9cHRLcTRq3FVRBSg-y1ROjGzhlkIZKFA4Ggo38CxuUM-rQqtzL_RlpmSH4TjMBF-Bejvu5vvvE6ugiaOrGdlSQXC4QKssWTDkrMsuPXM53fpNbSdNXX-YiJWd5CnDI64T-NhoKsSe8R52hVQPfsxFvnwGJAwLTCsYH-Pua5DdnVQBuyQZafhC4DbkdB1La7aDhprUEXKoIPOhZaRSMYtwv4fn_0_36ZixovtyVsJQg5fAzdjRcQCO6zF532aUZ2bMI7z2jzl0xmaddRcSozPGGdMBb9Fq8DvAVUUAXK3IsNZayww4i_yzLjY2qCyJJAjbiwLLGBCafFjaC6e9wFKVlMmxoupFBG6fJ7PziEO-RMVZLozjRwOrWrwy5EjdMQ8RIp5VcVKrMpMIjqd1OK7kA1J5TpeLtsNWA0KPZUu4Vcy9tkRGvUJVCcPZdUGM3opVa31XODTDov6Wu7pTGvE2EWGNGkMRFb9mRNJ1uagK1mMiQMtyEh4GqUlJqTRGURSsIwjobZqvJICde3cuSeT0GoMOTOUg5W7m51w_7nY9xAT2udELamCIT5xVLbihjXQGn2tSOkaOZWjQLGuUT3yWrDA0VzewTkP4K4HQLOByw57SqQVRg8mTVe-JKBsQvQx6R1EhKJnqj8oshNrpoUV6JyytbbXc-u5zmbKgvoUt1C_ivsU-vdDwTxcWkS6PXvD9lmS7OnxnLwTXyJmjOrVG8bKqUemZSYbkZFBkxL4TgJEuNj4VdsrFf-qvB7kULMqWCNVjNmALAI-WqkAqVQ_cE7DJeIkyRy9EinKwGgby2JM_eYQfBDuqfxB-Zd5oCOVl7fu1UQxeiwkSkkUHBYscl-DpAeUVdYuL0mqxEJC0warbTiqfdBY2Q2EKGPIT6Sn9aFfX7o_WJSBj_Z_xso0aW7nX_bJyz4grz1JW5xGkU2o&sai=AMfl-YRbbWBCeD2mN8Bsl7OaAdX_VN3QtfRP_sD8bvUgiqKVpDibcYt0p1PpUxsGNYFq6wsxDkNICMk8vklSSENBcKu4ly9WD7iqpHY88AIpHlxhHdQYHbOmvFKkxoVtfWUESro3Y9dQP3KdRRrYaEaSnubuDJLp9PU0QP2HDh-vJUJxd1Ws4uR-b6txaXOvKPiHzT1DqyCJAQq13foNmmOyhU4gzlVSDqBlCHqpicvA56EixSDnxSzzjTZ23wMZc_766iRdL1uGbM5V0kAqBp5pd9GyB2_qnsCS9YJ_dELnw_tiZHYO3nPQT6TWbAMclsHH5Fehk2TM1Ms_3doBl3ayVTro77EdjdbGZP2oaWvMwCEErX4kpA1EZSLWjFCN6EF8Zb4lhqSAjTvqAyPxW1EIybwJliY4Dr0YdJ9RmWJhQFs0yivgoXmVtjvEytJdp1gVXF37RWlXhDqXcaRcj7UDwhCQC-KZ8tM_ZRHHsjK20jzca4r395FzAKxym4dRf5G3TmkORCrWmhA1qO1G5LUjSLWz4tq29gRbg3qay4T_ZdgV1KCDrXH2tuKSf4eKQOcKy7BiR63fGq7LBfQ-VC0I_693uiUw9kTzuzsdqFxiss8koWcqmRhN6CYyYugHjvq5xPk9r49u_spJAzENpiwhe-DEfhhJwdsEXNYWsILYNFa_CDh9JYZgLO5FpLpFJXUlxFDkjBGjaNU9gJTUDgqzSw-jTxO-09fA0i0TfOPVkkg12QXxalxaEGPd-mFEECZbUzph7A0cvO2sqU8IeRHj-B52u6a8OhPHg3t1AxO5iRuM6HQhXuvEXHJkBQojjVGFzMvnvOLkGBB_TH-jT4IcJonfHcRExKBKfi2bxTz46K1zuTzRbBdvamkbyVigiQrD6MKbI2XMVPp_7zIWhmU7pKs7RnO1QvMjgKXJimE&sig=Cg0ArKJSzCs6PRFJr7E9&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
            - img "Advertisement" [ref=f4e5]
          - generic [ref=f4e6]:
            - generic:
              - generic [ref=f4e7] [cursor=pointer]
              - button [ref=f4e12] [cursor=pointer]
      - iframe [ref=e136]:
        - generic [ref=f6e2]:
          - link [ref=f6e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjstDiKo4dkDONa_lga1FxjTRi-EEo2smeG5chLixnhs8c8YhjGtHdQ1q3npw9sKPE6VpdFTkUH0-yxVV1Wx5-GyHYh3_IHiFEh0uvr480bs3BU4_2AuItCNiQwwJs_od2diKwmNN_ziaTg92fP3nKVES1HgPRM_8ObADubgJ8FT5Pw9RHnvZAV0SW7lM67k-TQ565sU5iolwLARzLQAOh4uNXw_sPF6qrDTivhDyjHpEGrxTFDIoo1ia5e9OQ88rbO33Vuy41GhAYr5XXWpIrHs7BxWajIaow4QYFXOrLv04G25rNZdreoP1B917vMPjQGp7kK0JgMdaHE2pOvk3Milgh-ArFASS0gUfnsfEKrI6Rmwb6jiC_Fj91JrOSU36HpZsMWra-A3B4WAug-wYbLr88qPhGzgg1OyvE0Qt8fp2JXglDjR_yoYRQj2dEkV3lSdIFKupvmqFdproasGQ4JPEn3KPye2ONNcWXBMZ-hYBFP6IjRPvVdScM_jqhPzcUnDQlFzLjLAMO9wPHYNFaYQT_G-wX-qsRWi1o2OAcYGiafXW_YkDVseQ48bLx7_D364RmU6roSIvFpLkjy7GJWELCHH8JTfSaQqC2RtVkcWyLA-IZ9uJX26lNga-aTCS8itj_6zsALgDPb5AbaiapFE0YrCGgfs_g0e_gCOVQmVflF3pD1mLvRqECw3LayvA5V1DgnlcvKYMd6ALptwua54oYJ17aS7kzS8M4lskjmCSAVeJR0Wg63wq7mxm1uupAk8hB0BJ_ve622RlChipsWo35Z9uay2-tuCHTyHFjVaS_uX17Gw8w2yWJkxJmJ3MQzkdxHqYbT_vINt4tdSQGDCl7Rt21IawTiwFEHDa-a9C5PNOH0lquM6ZMF0AG6dyWBxS-p2ce6iWSM-2vxbU-Gw7imh9tGRKQ6Bcf2xBHv4jy8X_-KyDVC2DgM-VnDJ770zb5UgywgErYoMR0uw_RS8pNBVwr5jM8URGIYaXTXcmdOF7idyTjhQ7bRvbR-5YQK-43HGjpPGNrGickCAAj1rk7oMPhzUbV6i2jLENj9gN_kWiY-KUhWiwDrhNSF7RSPdUPC_2lycgz2RqYIEZdPysxAS-y3wOdCJs03aHpDE5w6E1hxSo-igZC7uHVMCPmyylRMfuw-HkspuZ1Y8acSTuRN_okA-j2ZESUSGfQcV-JO212eyyK1d-IDhfMg5QNxmDX8elBryT4U8fleLg2z_FNPZhvyodMfnh0TEOCgA8X7DMYYD2aCamDN6lJuFk-Rm9SlqI70tCi7jIGoDIGtMYs8mM3EGP4l2Ev9zT15ER71al3ecq2IA-B-bOLhF_4uiajHWHsVz39K-vz1BwrzKsJI9BPKGnnirkkQihTJdZKJs_A052zR6BbhlN38Z1W_GU82PeJ8bM-Fm68DsB_nlwfHmWL_6Xrh1IauAIrUW_lzVf8JpTcWSfjXyo8vnNqbomMSzG5JuuqsjCd-eraxb05_OrLKhbQOAJiLI7GG-9TgRWzchF93eR3U5MPNHTks1hRRQbMIVw63RGbB4VgDJA32NFyK_9P6fEfyurzycI2m_kpTtcfsh5-Ifwz6Klp_WK2hknh28lxV5kctK9_z6cWfUmMJzJDqWL7qkJv7zAlGpP59QbkqVLEBrsbHW1FIcwmST_KIseCLiqc-j7cxWCHLkId8bFWG7Rj2EwYy9_3uHRVNIcQU8y_MmlMsgiSDHOyTyuG98oZ3rESUJS4Z53rPdHkYGMrg-KKLrtXkIcSr7SxlHgj5KN3YdYVez4EMT7ZpkB-WHc0k_AewA4QjJd9bwlh3Q70ek3aruZ4kADNNfGZJ4ztIOFDEZkUPkGM04lAhjZDkxmm58dQGzOTrf1Bp8CRT5s9VoSJTRNAyp4za93Wnlp7wAvPMn7cBH-i5L5pZzOlsf70cxKoVfUqV697mitnwDrAvFzBHBFEwJigBZeuIBjSXcxwY2r2iZifXhzQLeb0EAzjIVGdPSk2BLz0bhoC6LSUqSQyX9buwwT1uF-D_gISed6r2oseLoQ14GMPyw7WhujypcV&sai=AMfl-YR0kB5POMFJWNKBn_jBbiiJ4yxnPrhmEqdsmaWeKAzOAqQB3SU8M_8OZvaTq95SHeoMaoAT-yTilJN7021xqGyYFByV4JF6mbS36k7uw8nAXLPbiiDyG944P2O7CazMB3yK3h63k0sUmKGFe3i9FJhI_zMNQWy1VqaMRcuMNyRJqeltKMp9Zpa_lDu4PxVLMv8eFJYg6MqPmVgeEF-_QsFstQvtcxm-aoeZBGBqIIOoQhVpkWKNh6meyN6vkLLyMzUutDytS8N5PL89UDuf9OmU8LIBs7Rwr8BZMEaC9ygcDe-71eass6J6I_1JVBHVdZzXMnjThFMrFv5p8djjuOkrasBGF-GtjJkSU0VWtCzxsWZ5Jz46W36UR_ixCfnceVKtnfZdtvYLKhRkt_lCJMZ5psQQz42XKxKrwRYcav3I6k3VQzxkIaEydo0yz8E2ab4AtJ8f8nhjvlk7650p9U7B6WBajlnUJ3QWRRJEF5VldRgN4MnPIRr3p__licjJ2bQ1XWRWgHrrCh0HeR_LRpoAEC47ynVbu-UDyCj9sp2xkiir8pmIOr73IcOD8zvrGCo1IGP-hHy_a5ngl_6spXHM4mUDC0rqQ0IMchCx9luV5d7F2m3qxGYPqDZoMuO2OHDYbyIzLA0zXSpBop63K837aBW91ACcidy0ZUGsOOBV5DO_aMgwS9ro0Tmx6MVFYr_C-kpreJQJ4Q1Rzy1HnMJotr3lrOHQtAMLafrrb59Cu9PCooHNpR52tIxHy6LcaBFFTze8FwspRp70O-j-ZUv8OPPeXuoEuRdMZKBgipouLTp0tfUAXZLds2ths4olLPDr5uUnTKYblVvGYhDNW4GMIM8YXHWpU_NWnEhC1ckSRQ7MsiXnnBSCO2JVMohbKj3neNJbxSOhrpiGe0Utc2R4k8MScpbBJWwQy6g&sig=Cg0ArKJSzAuVdiIaxZ6j&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
            - img "Advertisement" [ref=f6e5]
          - generic [ref=f6e6]:
            - generic:
              - generic [ref=f6e7] [cursor=pointer]
              - button [ref=f6e12] [cursor=pointer]
  - contentinfo [ref=e137]:
    - generic [ref=e138]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
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
  11 | //Chaining using filter
  12 | test('select Male using filter', async ({ page }) => {
  13 |   await page.goto('https://demoqa.com/automation-practice-form');
  14 | 
  15 |   await page
  16 |     .locator('#genterWrapper label')
  17 |     .filter({ hasText: /^Male$/ })
  18 |     .click();
  19 | });
  20 | 
  21 | //using first()--when multiple elements match and want the first one
  22 | test('has title2', async ({ page }) => {
  23 | await page.goto("https://demoqa.com/elements")
  24 | const menuItems = page.locator('.menu-list li');
  25 | await menuItems.first().click();
  26 | //same as
  27 | await page.locator('.menu-list li').nth(0).click();
  28 |  });
  29 | 
  30 | 
  31 | test('has title3', async ({ page }) => {
  32 | //webtables
  33 | await page.goto("https://demoqa.com/webtables")
  34 | const rows = page.locator('tbody tr');
  35 | console.log(await rows.first().textContent());
  36 |  });
  37 | 
  38 | test.only('has title4', async ({ page }) => { //use scrollintoview
  39 | //using last()--when we need last matching element
  40 | await page.goto("https://demoqa.com/elements")
  41 | const menuItems = page.locator('.menu-list li');
> 42 | await menuItems.last().scrollIntoViewIfNeeded();
     |                        ^ Error: locator.scrollIntoViewIfNeeded: Test timeout of 30000ms exceeded.
  43 | await menuItems.last().click();
  44 |  });
  45 | 
  46 |  test('has title5', async ({ page }) => {
  47 | //webtables
  48 | await page.goto("https://demoqa.com/webtables")
  49 | const rows = page.locator('tbody tr');
  50 | await expect(rows.last()).toContainText('Kierra');
  51 | });
  52 | ``
  53 | test('has title6', async ({ page }) => {
  54 | //Using nth -- Used to select an element by index, starts from 0
  55 | await page.goto("https://demoqa.com/elements")
  56 | await page.locator('.menu-list li').nth(2).click();
  57 | });
  58 | 
  59 | test('has title7', async ({ page }) => {
  60 | //webtables
  61 | await page.goto("https://demoqa.com/webtables")
  62 | const rows = page.locator('tbody tr');
  63 | await expect(rows.nth(1)).toContainText('Alden');
  64 | });
  65 | 
  66 | test('has title8', async ({ page }) => {
  67 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  68 | await page.goto('https://demoqa.com/text-box');
  69 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  70 | await fullName.fill('Jimi');
  71 | 
  72 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  73 | await emailTextbox.fill('jimi@test.com');
  74 | });
  75 | 
  76 | test('has title9', async ({ page }) => {
  77 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  78 | await page.goto('https://demoqa.com/text-box');
  79 | const fullName = page.locator('#userName');
  80 | const email = page.locator('#userEmail');
  81 | await expect(fullName.or (email).first() ).toBeVisible();
  82 | });
  83 | 
```