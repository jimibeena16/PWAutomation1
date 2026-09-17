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
    40 × waiting for element to be visible, enabled and stable
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
    - generic [ref=e130]:
      - iframe [ref=e133]:
        - generic [ref=f10e2]:
          - link [ref=f10e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjsvjEsjCnuGzmaWulyem8QlVbTwB8nOnvtqICHOn5pvsXzYBPPebAQFsgTsXbkYRpw_VOQ4tZI-pWmNqrUSLruPkzzume_EW6pVLju8IQ3E8VJd7VpdUpSwyn_nooOG-LhEBFXavu29eYPtxeU4L_ZHV2J7IAej9usULccZUEUqHsJQacEVE129yqE6Hrz0a8lXuMoWlO-7LQ7ewr1iwE-eWyj7D4AyyXc1V8F_4SZDUZoDqxyfPELMsbGWJ82QcIfA1gFczBgBdyviEUhyHS8ACMpt24mOqsKpQDLLvXH648EjPkSvjYPEaBt1RfQyeGeBFGiWFoMo8ATwins3eCBX-gdMNSa7L86Ghj4I_3x9-tRfoasDwr6hxxZPSHeeefZmpc8Me9pS82nIEt_XNNuD_d4rwwKGAFz_jig0wJ6faBq5PBvkvXg6remxtTDMt0VaGDxMbk16Wwmk-mvhS_gVGK8QwNnWj4DZq8ipTvq7eXuWUo9z8fTm0pIYLt2rWO59jN1NNQ_H7ROjthkT9X3d5iBgL3bFoFxJTX5OUvcrtkeVAlFOOWudrvrCJJ8KRHa2QzWOiZyhSb858QRIWvk0zntmg8555UmOFfJQVin8T-53r9D79IMznfUWeFXOWCN6qSJ-mWPLJ4t3DEWv-nolJ-UrxgCoKb5NH_j6GhVUXBd7H_oxP0EAj_MaBGg8P8fZ8rc-6GzKqG-N83iXTeUHEHhTzLknxdeU-YLAUInwps7DXWDznveBq9PcvHbiQePm4VU2YVa-X0UMn53jFEyoRpCyw6tgc28UHJo_8ZRrWzEiu3zQ67mozg_05a4OA5lIHwIypzEG0MHI4zgTT7f02pL_d2vrNdwlk32zuyL174f0JbP1h-X5EjSMR5hEjE8tzinwGyBijBHob9Cxx6qUm3NISOXvNC4vWzKSRZfvD3SwtDb7jo3SqIh3T03YLcJNpZUQorKJ0ef64NDsHXSXX_SjK1DeexzhEKh-z9IRYc5XFkbATGJhmTODEJ3vQVAHFaI_OGVqWA1IIVz5nfLv6SHvxLmQZptGGea3s9_3I8ILITLK6fDIzi0-eQlyCSb9i1dj4psbr6EtPkzGc4ZqKCkmqPUgZucV8GGtQrrMF9tENjz_tTQQzqGJbfaFKErys8mU0z0ZsZ2LTuv7vxusDhlAI9iJNvlrnMHlfYzLQ268Jz9GSWdjusHfeykTbxbJ7IrVuDm9ZcmfLSc_-jC8TUcI0gKIC1Fg6jQ7se40orHwa1ubBFYrYsVDgtVxcQyIv30QiDBdwY4qouBqHR3iaXoUqGIQJ3QTTpvb_7Kz2IR6JSYegr2HSo44UVMbGa3xafYTHl66zFnwCEA0Xzr5qQgXRroSo3tVbN8qLHRefycPE6BCvtfv5abpx8Ul3IF88GrxhiKrLHnV3g3t6i0lKeLC0D0mq8RaASSNWaR3t1wkY6AyiSUol1t65Ilazcog4s70PTNzCvmeIee5QBvuSe35yRh6yA1cv_A_Tf1Rua8JKLhZyUmvgSdJ7Cx8OTiWliu8y2KNuWANL8aHvmnOkK5rY69fZkHdWWwqAPiNlXCwZVmXqWw6lAVEJVYPu-oYgETRpPij0VTNgWKMBBAAIOV5GJTEE8NMMHHokR54ELaPcxIJ3RN6JLApbWS-hY2w5yvptELXN9EYOR_5nWIJk6BqeOd5KDl0iuMFH26fw8COBVP-u9BozW6aocbeeqC1UW5bcthhe0h8MncyNg8lGHt-Kw_hj4NwNimpXowCEfOXaxIPpvCpeAC9m87bGk2Xc-PxsXpSALa8QH_L4wIKkBNuvdZFdypoEzEui9oY4dKLUk9ZCziJ93uJw6i4OKGn-977ZrrU6-kaMRYG_1j1f59Bf5YyyLPe3XWLSUuRVoKXg-baoJArWBqd-VM-sIw_gEAkZWGiXVpEzA-uf6h-cbj2mLg-hY7_vWhRuGiP3JJBLebD-3BxEpVaw00Hw4awj3kHHqNspkJUVrIc0vfBjrPfMMmReJn1m5hg&sai=AMfl-YQGLPRmS5pQnZAqXSQm51MLy960CbAga6i0dWs_3Y1ojUeOSbm5xkIUQGu2fTEYqlHSO13DhoQQtSYAZxtY9neW_LW-iRBa_V-5Ad3gdS2meQJ7xkp44NSJ5lCP4se93pZH3A9n_VGqmeRGnfEhUxprTCzLfo3Q0n6o50feopru4_ljYK3CEQe69CLz4V02ZEWsEFKbhWfXZa7bigSt0c5F-vHayDJOypddeunsZaW746mUXMFpr4oYBFNthcrBYqzv2YuqwWX3xkYui2eJ1qx4DBwNBIBhJmdlSTrB-lawm8hfWlSvYDcmCaqjeNVZ88SIp1ezYUvLXR8LzN-KNaj_SPTLx5IoGFcXD_R13-dbMuaXxGazL2eER8Q4VQ6Mv6zYo7zDgrL_ZwflqfQyG_M3VIDpKI_AzIjKY7QZcZg6BZcAP57MgUCixZEQsyVW375JQaX7gQnXQ7o4bgeVGggrMbpIaG0q5uotq0KicCDHEru_wpw0uhlk1ygOLd6jIFFVlSr0R3y1v1n4dCpY9qHW51xtAiKp9-0TASzmHJ2cQxrYBfEmTJGUQ8w-JLCV79d0gIL2_Gt_wewfQl8Y5xhjFAWyK2CA2AOFEop-ZaazwKQqQCnMHWNbLcG8bEftthpjGJO4-f1e-cRSCDdhrW8Yc4yriiS0b58FhzPZAK_eVVfD5fPmxdyrO9TEpek_13UdlUYMLGU57axn_qV09i93tsOrVm5YtCaMZ9kYOhKgOuEflci-XbO6lzwSD6vlE8w-bgpllkoikbUtdFQOS5vL8kp3KzgVMQuXyH_PYZPdmHZBxxL421A4RDnmW3ltIs-eVfXBbDVPDsQ4Q_V4GUKJF_T5v4AVDGIz4avkcKdKpJzTq_lADNAllFAAtFxh1iwvftXdYgYp8ElQwgcYXygJpekRsvMEm5V0&sig=Cg0ArKJSzARKYslg-0wa&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
            - img "Advertisement" [ref=f10e5]
          - generic [ref=f10e6]:
            - generic:
              - generic [ref=f10e7] [cursor=pointer]
              - button [ref=f10e12] [cursor=pointer]
      - iframe [ref=e136]:
        - generic [ref=f5e2]:
          - link [ref=f5e4] [cursor=pointer]:
            - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjssJrnte5G92gn6xWK6x_KY_-6alGHAvaElycWdmGDJhyrWoHNp2YvyuFtQknnWeKpso7qcFyIQZZvbU1YNzqQA4uGr1MiP_wYcM7CLkJQHyA6AFxlxWHIjKZx_iU5C6NxwilXOsETApovHv7ERaWGRkVOAwAGgSt2SbszQO3OitwIR3D56OZBGqtHyY03zNu3qZb87NnYXZrCTAjBtmNpZ4KhswttkWdgJE4fBG6DtjubdeJvDmCtWri5X_3ubCrLhkIdSIvk5UoV3oikzLRWyfbhotHbu0sxBfLnf0VzXhk3hqYnsXq2Frr5a0P6o57XoAMthMT9lBEcQH0MgHCqjtMr9BOnQwKx9cKxrskEqLjBa8mh3wxRdLMgzgVlJwgWoPbpeVxszq3jHqnxV8va3LQOFJ0sTNA-LxwDj_SegTVtoWKXj0XyAvgNQVpGQSp_mVcPMd7yXJTZF3yiOYXB1I5eKvrNlNw7r5IL9xy89gjxUe8ba-NP3A7Pol6tz_hzVsoC4ZjoZFtcfD87QXon9tk-kxY891k7zNyuVp6slaPRGZCtiCa5HC1hoAduKvuj6cacoFrdaR99n7i8n80jGij73OkoilitwM6MQeRTtbF7b-0JgNF8WEkEdrSOdAAvE8LtbCXpHqspYH5rca0tAOe3sDqPAxc014kgDPCGa88TUk4hyjxLujB0aEl31YDXmes8cdJtf502Tv07tGkGyJCO0nvovSMIuZRbieQ4C_4rFGeh9uPWkAo2ThIs5v7BkU6pN8jNLVtST7XD34vQ8GWsPR6VWK_yzb6HcoQhGavq9E6Rl2m5rh9p8gQFq4e8lEVI_M1gie6YMliTVbc8C6Yq0wJR5M9XSSNQogPooHtZDq3uCis0D3IATJiTf9CQUHfmy2VqaXxE2Y7_-EcPzTBKin2SWoNFNDySUK7lykGG1X-QLL5KWVZMkJOThh6qRnejJVLSknTlFlmrgu5Mwg-5PCMjfPMj8ctDn1b3CYRU60x-wVp-oNwagqDQeK7vYP5AzxhiyIhqwpGfdAH2YWD5VNEebG1YIIvoU0bmq1-ypukr0b3Ofi0xYWCbPjnR8-OhHVirOCrN_AvWXDiRO9Yfif4CYPCweYCLlFOpzQbri0U8nTKTu_1R9eHzQbMZ3dROQuQMuRPh3_zRJvem5O3LQmC41_FGH52mmT75i_1KRD99kNctZS24gYqs-snxTZXnG00gdibZi9SCkgQFlTsbemYO_syHtigUax9gPoXR8fZldJc3yeRwbc6y6GmcNIXPxnbunv-gk3pH4njSem2nEdHw04VA4hjdY91HVTnpdlx8NcJTLpkMeaOugTT5LRvoiu7jBqPNfUIaLDzJxhMRUl6Z7-ar0Iu17xpnD-sGChIcBLK_J6kaPzpuNBiFs0akHlRvDBWLd2akjk3QmjN1oZ58EakOuk-sPQGfvbJrD2yHEV3CdFktniMJU68RnE0Jp76OLOcvKgA1RYPcFR6ZzKOUtuHVag6JISuQiC6RqItf2suazOl-XaKr3Dpq2Cecbsq3Uk7OgmMuVbIgwOrx8Tsft8sA-DF9eTTN3O8pBOWvfP6rnfN3wpt-i257XGqhJ5INKzd3pdRf5s9g2l8uxvEkViH7kiZentZpBCEcOxNHbBJ9KktTvCVTneq2gQXFpOSVC70Ng24CpsPupTnwV157O9NlVbgz1Ljcq5T_J6l-C3HrpkJvh4OLtqj4iTj0-7cItqIqx-i3gv7OaaohM2bBRZLi6UB4ZWKeFnNnKQkrsMcp3BeEAo6g0awW6TZbHVgQUnqufW5rb4ueNZL9V_k7s1KQqNRs-cSaNxDFSIBU9VZ7l6HE1HQLaqCBBPRl-LZXxeSeeUUIQR3bP_i7zg18JuYFNOmbf1OsKbvoFSH2vbBN7hwLzh8ltjQFlwUOnrSs7pVGCAJisMsq1hzncz39P5wmDv5gvUHSVWKbFB6gXOnGw5DrPPK7o-yGqA1fV4RpXqVby77SkTT6_M_Ad0zcz25Ppt7T4GBcbi4WmTCbUzEw&sai=AMfl-YTpo2yzxCqYcT5fI5eHOBMW_FIxLQGMaCIpXVO3UFAdyVSEb6jXI2P0KWSXPg8UPOmL_hKlwbBy6iWtBoWtdTcsCyIOjM6_BP5u7zekl_01NRsFsrToET2t_Qh-eYh8qawBAq7dRYk7i7LLbLIbLU0k8UFymCqopyALU8ViHxBORrrC5rVE3bhwoOzU140rRim0sPO9At-4nSQ05TqkztvlZJN02reuxRIsSgyipSZa-KEdVwGl8uIzeG0uEbMPTqLKVPnAhXWd5AdyfLTPt27wOXxeO_PiEoi8ocMfsBPQrpwMX-ufaUDqgzJJGTz1lxjRZ1LubJyMuVE-kox90JiZKSXFIg0QgePo9i48usMwLUHakYS7Ua-D01EDoYcYJMMhrxFDFEoQ-lvvsxWB3DRzmYtOG2hVq6sgIOR-R9R4_gTl3Ao8UU8KAJa1lX6pSxLtXbBLxyUUrRLwkAO0vNSlEjiC-g5-sFsA36EHwspr_Is9j7tAc1OIdoHwuvjts1Ocbo7qLsbyAgjQG0nhNF3rqYIrxX_F9bByand9Ag5eOktd0rWef1XG61pMEQ1q0ZKWplaFj29reuQHBusUjoH1nKT4nilQwPXTa1NK2aOazeTplgpR1xAceilvC5SfpvajUm_eRIJAs8S-4d9-9Zfm6MLu3fSJ1fG4czzRYKaUL5MwtksMnRGmBZanM4JmQuYq48_7YprLfPEB6MWHQriqOAEILIUw1Nxzv2DCgXCBYvcB4bIRrDfHqT-Cwp_7ktq28mmvbi15eeU0Xj10RIPeq3thEuq4DjIR8DOOFWW_pwp8PSe_dIdc6ABp1LdhZ6TfLroJ8Tmkf_3AtLiLXntdxFtzrPjOF5HFAlelMOCfjj0N8Nal_uZuDMCHNT2GCIp8BzNwXnivwy37mDgVYbyXhSWyYYuHVBPL&sig=Cg0ArKJSzGXu1U_uVtdl&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
            - img "Advertisement" [ref=f5e5]
          - generic [ref=f5e6]:
            - generic:
              - generic [ref=f5e7] [cursor=pointer]
              - button [ref=f5e12] [cursor=pointer]
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
> 42 | await menuItems.last().click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  43 |  });
  44 | 
  45 |  test('has title5', async ({ page }) => {
  46 | //webtables
  47 | await page.goto("https://demoqa.com/webtables")
  48 | const rows = page.locator('tbody tr');
  49 | await expect(rows.last()).toContainText('Kierra');
  50 | });
  51 | ``
  52 | test('has title6', async ({ page }) => {
  53 | //Using nth -- Used to select an element by index, starts from 0
  54 | await page.goto("https://demoqa.com/elements")
  55 | await page.locator('.menu-list li').nth(2).click();
  56 | });
  57 | 
  58 | test('has title7', async ({ page }) => {
  59 | //webtables
  60 | await page.goto("https://demoqa.com/webtables")
  61 | const rows = page.locator('tbody tr');
  62 | await expect(rows.nth(1)).toContainText('Alden');
  63 | });
  64 | 
  65 | test('has title8', async ({ page }) => {
  66 | //Using and() -- combines 2 locators,Element must satisfy both conditions
  67 | await page.goto('https://demoqa.com/text-box');
  68 | const fullName = page.getByPlaceholder('Full Name').and(page.locator('#userName'));
  69 | await fullName.fill('Jimi');
  70 | 
  71 | const emailTextbox = page.getByPlaceholder('name@example.com').and(page.locator('#userEmail'));
  72 | await emailTextbox.fill('jimi@test.com');
  73 | });
  74 | 
  75 | test('has title9', async ({ page }) => {
  76 | //Using or() -- Matches either locator, when UI can display one of multiple elements
  77 | await page.goto('https://demoqa.com/text-box');
  78 | const fullName = page.locator('#userName');
  79 | const email = page.locator('#userEmail');
  80 | await expect(fullName.or (email).first() ).toBeVisible();
  81 | });
  82 | 
```