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
    43 × waiting for element to be visible, enabled and stable
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
          - /url: https://ad.doubleclick.net/pcs/click?xai=AKAOjstX7RVy4iaKoO89zMqJpDp2B2RbXcaG3-XvzECAj3KTbQtrmGkE56Tgajrvz7K3xEby5KckV2i9l5-rI6U09o7VSekhvNQG5eaCIhjUT0Zz7n-JEy6k_smc3loOwHHhTgMisR6f2Gk0ACNqKN4T8RSXIvjCwnXh2hMLKk-fGv0j3nBnKjHzTPAJsZk3J4iLz2s9yX-WOEiq7IYmZHIj_2smiuIeOqznlYMLK4ZF7k-dD8Psewd53TR3DxzRNa0S85kNeGUyfKnmzYtBmNDOxDERNKFU4X9a-3d9zzjjsNc_uBdNbtgCDsyqHvoSGs6uiMIps7rEruOdiNGmFtqVUvKK85Aq6ouYkkWhkgRgpPJh1XAD8l8fzdT8Meee2u_NWV61JWhRgGTNAUaDyau8wmcUuuabDIDX4N2FeGF66eWigz767SIaFokfUGkMjvd3kwfP33Ab4Yz7Q4lO21_5MV7Y7B2_Z1z56vneAUr_vI38-mg1A99ommb-gdKZdGqPi4mx0OU9kwtff9T5ByBwt6hiPQLN0JxLpt993pvkNeHH7_SgSmgqA8llzcZZp5S6b7_ZMMnzDJUx4BRx0MdDdtncvXz9D6nkyoVLoOV7gU2oDjjDmwvo_-XDgDQoFMldSRPtFlb5we42aJg-e8JgBE6dU-YfhUJaDHqN8iht7yfhdPCx9SE_UJrnJR7YY4QfnBxMqTi8tFvsdPFCpBYxBE-PNTtW8KIBcQZh40-gC83gQ2smXjYspt0tdM_36NCnG61LFpzcV4FGZrndoeYCz0KqcrnDNeHlUIHG-SFiGYt5LiyYHbZOcgazRZUB-wjB07Oab7KmYOTQlOrhP4dLnslUj7hhFK70Tx05TISog6lzJB0tCSjEJ-922qjpPxQ0nJqR2WMa3tCdjC4lI3HIOeXAeoHC9sQFhYEKGJdbtWaZfIHIepjPO6xBZEMg-fTKZ6_hWc2xb3-Qt_M3rkPCHYzKiyLS_8trUqYLNCQpuXbd9UjdM3qIAGnrC2-cdz3SQ9QoC9d57Io746nlAFNH8T5awj1-_7XydrCvGio8fHpyU481_BogruB2-ldkxsQRsIdfCdKqgIWKW3tvGBNgL2Qo6d3DNMSfj2vwc8f5u6N1zTw9mjcT5lRCNw8-FxQe39XajDUddxESR279_bANL_iGEq2aEUcB3uLA7lZd4xaSpqzgOjFqA9fSzqgyEYdfSHxfdGLnMk-PBz92Ae4ba2aURDwYfx9u9PbwyplqLC4xQLOgiVl3c8yaN95CIfIkXYUq5YdLm5Pv2zBtBhq4fG3hZTYbbAbeYsnzA17ZuutNPCOA-nyxNzfKq2kIU12toryIPZftsAAwGkYlHmghB_FNtLdiIMVDomwVnpz3tNI4JmjuLmQtIdZh1iFoXMop43NpaRJaZH5TtKZt3Ay342WUqmZyyamFeQG5aj0_NpYi28rzXOGP72ZL-wIThnSNAhNHk-KTWiWfZiqt59-IUzXlSM1T6Ko4vmUNWPJxkZ2adJnbNNa73RnR9o0YE4FnOygc50cVaUwoWHuWYY_osGiJ6XTB_3dYwd-Rtc3IJF1GUHvBXaUovHuK-TTdtyNKgxLPkseEQKC3ME6oqLmSIUHbxQytOUScRbnOpSbiJqbblCecSpuzwvZDwaRh0QaNsMM0NlmcHsKDAw_0xLUHpOrM4lrMIc9XA0p3klm5TZ3ophFiSfOG7_9Un3u8xNsSU613JKfoZ5hrUPj4Dg_A_ViVB-SQYUCq5Ak7nbtNAjuGhoZ3Jf0cd42t5L9newosxVWDf3m_EW_Gh8Qjb91_0ZNDJXVyVUk8fFnr0aDLoq3gS5lkULwaWMMjMgqUYiC_9T66wrEmePqGYIc_CFC74lFWWfMM7LYwiogamR5YezdKLD1wbgkdzD-Z0osHjKt6RHfkOfJPIhPXTo_Ri8rrwWUZ6zZ28gW3rRGKBWyWptVz3lx1r6GMV5kS60ajDZsL5VFk90n1OmPLKyaaJ9JUUpbWsrsVIbDqaQAq1Vk9NL3gYuYH2ZzvoQ&sai=AMfl-YRgXewyoUlCC-S7sO4a6zBGoW5kdi0xfAjy0ahHl-KWt5-XZGp7uUGo1HRMtRb7aqCxpKtILsWNrFauA_AIapxGZ-nsYrUKaPwShc99heDizGnpxvmvWoncI-5HzbRaZdnjD0GX-5tmZ_Zgis28lR27lMV6a7omkAtsv0_6EP6j4Ah3sAmWKl9rP7SfEp6AQlpmna18-cMvI_nexe0g1xarH6bfswMaGIVrrxFN9TyMk2Hnso1cc4HD5Y2htUkDm7cTpAK4hmv-a3n83AfUSbYx4foKSrUMKKTnZwKctlmCT7GhfbyBWmQ4lWHsnpqNGtvGvqk25Rsc7PtspwCS_3yKV6tnJSFDOSeJlnFl8MYUwJhmKITtNR2mgCiF8WWISYsdBXES5UOlZ6rq_x5-Nkz0u4OgfhZI7czxmdajCXdw_8ONu4M2Eh7gdWkQXV6IVVrIp5KaZ9SCEa1HrH24dt1TBQpffjaE7jzDXeEv_3m21BBmnUcJKUNVNp-_NAZZL5GQFcREMT05_zkyH3L_87ZWq9C0pEXZidbj_sAw6RpzSuq3DBejN68WmA19LM02OBGxtqYxXipKOvexD8GqD1efcyEDZOuBWmBePaIKAZxOr0yvllzbUeDq1LGVlWKC-_RbvhiBWLP7H--YPj284wTZFv_OBol9RVw8FmcsyXtxmITt6fEfeAzuKxvxXSTkEyhhl6bieJwz-PDb51s7DSE8aDnW0Khn8N0OgAVBtlrUxOdFpqDU-es51ojTr8cfyHdDQZUKo7JAINKg-p7YWsT1tz1_V8MOykoQYttEOEbJ9rG0ERJPpzVFTL2W10pV1lkpTV9lSWpI_Cv516OLJiej8pueCC8qP02xeD6K9S6AUkG7JA5diXKtOI77zhjRz4RM28UMi3uX2qpG89_fzkBntrIgkvEFderF3ro&sig=Cg0ArKJSzCidwVX8tXCG&fbs_aeid=%5Bgw_fbsaeid%5D&crd=aHR0cHM6Ly9tYWxhYmFyZ29sZGFuZGRpYW1vbmRzLmNvbQ&urlfix=1&adurl=https://www.malabargoldanddiamonds.com/in/pan-india/en/collection-campaigns/lyara-signature-stackable-jewellery.html%3Futm_source%3Dprogrammatic_DV360%26utm_medium%3Ddisplay%26utm_campaign%3DDV360_Malabar_Stackable_Kerala_Male_Display_Campaign_Aug26_300x250_GIF%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D24161519730
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
  26 |    
  27 |  await page.goto("https://demoqa.com/elements")
  28 |  await page.waitForTimeout(5000)
  29 | const menuItems = page.locator('.menu-list li');
  30 | //await page.pause()
> 31 | await menuItems.last().click();
     |                        ^ Error: locator.click: Test timeout of 30000ms exceeded.
  32 | 
  33 | await page.screenshot({
  34 |     path:'screenshots/screenshot1.png'
  35 | })
  36 | }
  37 | 
  38 | )
```