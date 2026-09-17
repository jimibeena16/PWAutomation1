# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shadowdom.spec.ts >> Fill input inside Shadow DOM
- Location: tests\shadowdom.spec.ts:21:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByPlaceholder('Enter text')

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Software Testing courses" [ref=e5] [cursor=pointer]
  - banner [ref=e10]:
    - navigation "Main navigation" [ref=e11]:
      - link "SUT" [ref=e12] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e13]'
        - text: Practice
      - generic [ref=e14]:
        - list [ref=e15]:
          - listitem [ref=e16]:
            - button "Demos" [ref=e17] [cursor=pointer]
          - listitem [ref=e18]:
            - link "Tools" [ref=e19] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e20]:
            - link "Tips" [ref=e21] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e22]:
            - link "Test Cases" [ref=e23] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e24]:
            - link "API Testing" [ref=e25] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e26]:
            - link "About" [ref=e27] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e28] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e29]:
    - insertion [ref=e33]:
      - iframe [ref=e35]:
        - generic [ref=f3e1]:
          - generic [ref=f3e6]:
            - link [ref=f3e7] [cursor=pointer]:
              - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
            - generic [ref=f3e10]:
              - generic [ref=f3e13]:
                - link "Get Competitive Transit Times" [ref=f3e17] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
                - link "Get tailored shipping & logistics solutions to support your transport needs. Get a Quote" [ref=f3e21] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
                  - text: Get tailored shipping & logistics solutions to support your transport needs.Get a Quote
              - generic [ref=f3e24]:
                - link:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
                - link "MSC" [ref=f3e26] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
                - link "Get Quote" [ref=f3e28] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
                - link [ref=f3e29] [cursor=pointer]:
                  - /url: https://www.googleadservices.com/pagead/aclk?sa=L&ai=CfJWvPMyratWiO_rap9oPmKTtwAK64qnUiQGvh4eGqBbO4t6HjA4QASCVlJmjAWDlyuWDtA6gAcvS3rAByAEJqQKtCPZ2jVK0PqgDAcgDywSqBIUCT9C9-Xa2nC-gv9IbbDUt__HQpx2GUZmmhzcRX_m8kA-G2spV2vCoSgO0lm4Rd_8zf_nK_-sb8ZWau0ey5TOKpapOLHaij5Vo8cCkOLlRZRt0BQhG1B35RpAO82zCro9HIYliJwZlgZroYQx1CRGbTN4BdlO6T65nglgPplHgt1HOhr8PXShlTMainQcf0nyoM8oMDAd7cKs0Oa-lbo9MxgVq7j38SSB2cDyLzUodUSaj_ZBR4xiNRGkWTmlQz-8guGrpxKQWZdiqjkJhim3VFBfZ485-E5Xt6EFqGwymxzKgG_rc4EgreFnNcI0ytTA5LkPcyOf9q7tiXXs9W1bOLm-HIIRlwATTyLrh0wSIBdLR4pxOoAYugAf0__-VAagHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgH_uixAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHn-GxAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgHmMWxAqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHANIIMgiAYRABGB8yCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliUzK_pvvWWA2ABmgkpaHR0cHM6Ly93d3cubXNjLmNvbS9lbi9scC9ib29rLXdpdGgtbXltc2OxCVHDRa8lHTUwgAoByAsB4AsBgAwBogwDkAEBqg0CSU7IDQHqDRMI0ra16b71lgMVeu1JBR0YUhsoiA4JsA7QxKiXGNgTDIgUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAACgeSJBEgo0OTcwMjEyMjIxGAGyGAkSAqJPGC4iAQDQGAHoGAHCGQIIAQ&gclid=EAIaIQobChMI1bC16b71lgMVeu1JBR0YUhsoEAEYASAAEgINkvD_BwE&num=1&cid=CAQSiAIAQM4h3DD-MsfCBIH2vKLIMHebj-9Cneusj603fqo4W7Ar1q9Ovr_cU8Q1BAJIErCaeJKuTGLLtZhZUTIwITt4u2ljEUDeq8EWx1XdXT7-Xm8TkCyC1gYUO7rfy_DCjiH3OXuMO9N4N0t85m77jxZgH5tg0Q25kXZzav6wqj4h_pwiiYC37mqNABtEuNZ16E00I9oNlnZIJWP4ADOwTJ15_1RqwoCZd5xnkDj77ntPh9y7tfe6SgEmjd8_mClugAmxOsVGmFyqddJ7mdKt5SRDzV0e2Jb86W_xYFa1mQt7I4ycXz3NJV1FgKCiscWmcAsw7nRRpORidfym5tajziT3ZdDd7ifnT-gYAQ&sig=AOD64_0eI36XOQQ5kWTVZl75uJaKKE9QDw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://ad.doubleclick.net/searchads/link/click%3Flid%3D58700008667996720%26ds_a_cid%3D315083007%26ds_a_caid%3D21001489336%26ds_a_agid%3D%26ds_a_fiid%3D%26ds_a_lid%3D%26ds_a_extid%3D%26%26ds_e_adid%3D%26ds_e_matchtype%3D%26ds_e_device%3Dc%26ds_e_network%3Dx%26%26ds_url_v%3D2%26ds_dest_url%3Dhttps://www.msc.com/en/lp/book-with-mymsc%3Futm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3D21001489336%26utm_term%3DM-%26utm_adgrp%3D%26utm_source_platform%3DGoogle%2BAds%26utm_assetgroupid%3D6491349584%26%26%26%26%26gclsrc%3Daw.ds%26gad_source%3D5%26gad_campaignid%3D20998301906
          - generic [ref=f3e39] [cursor=pointer]
          - button [ref=f3e44] [cursor=pointer]
          - iframe
    - paragraph [ref=e37]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e38] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e39]:
      - insertion [ref=e41]:
        - generic [ref=e44]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e46]: Discover more
          - link "Compare Developer Tools" [ref=e47] [cursor=pointer]
          - link "Learn Coding Online" [ref=e52] [cursor=pointer]
          - link "Download Secure Browsers" [ref=e57] [cursor=pointer]
          - link "Upgrade Industrial Robotics" [ref=e62] [cursor=pointer]
          - link "Hire Web Developers" [ref=e67] [cursor=pointer]
          - link "Explore Scripting Courses" [ref=e72] [cursor=pointer]
          - link "Download Productivity Apps" [ref=e77] [cursor=pointer]
          - link "Selenium automation framework" [ref=e82] [cursor=pointer]
      - generic [ref=e89]:
        - navigation "breadcrumb mb-2" [ref=e90]:
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Home" [ref=e93] [cursor=pointer]:
                - /url: /
            - listitem [ref=e94]: / Shadow DOM
        - heading "Shadow DOM page for Automation Testing Practice" [level=1] [ref=e95]
        - generic [ref=e97]:
          - paragraph [ref=e98]:
            - text: Shadow DOM is a web standard that allows developers to encapsulate HTML markup, CSS styles, and JavaScript code within a custom HTML element, known as a Shadow DOM element.
            - link "Hire Web Developers" [ref=e99] [cursor=pointer]
          - button "Here's a basic button example." [ref=e103] [cursor=pointer]
          - button "This button is inside a Shadow DOM." [ref=e105] [cursor=pointer]
      - insertion [ref=e107]:
        - generic [ref=e110]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e112]: Discover more
          - link "Software Testing courses" [ref=e113] [cursor=pointer]
          - link "Switch Broadband Providers" [ref=e118] [cursor=pointer]
          - link "API design resources" [ref=e123] [cursor=pointer]
          - link "Automation practice website" [ref=e128] [cursor=pointer]
          - link "QA job board" [ref=e133] [cursor=pointer]
          - link "Automation tools guide" [ref=e138] [cursor=pointer]
          - link "Cypress testing guide" [ref=e143] [cursor=pointer]
          - link "API testing tools" [ref=e148] [cursor=pointer]
  - contentinfo [ref=e153]:
    - generic [ref=e158]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e159]
      - paragraph [ref=e160]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e161] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e162] [cursor=pointer]
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Interact with Expand Testing Shadow DOM using user-facing locators', async ({ page }) => {
  4  |   await page.goto('https://practice.expandtesting.com/shadowdom');
  5  |  
  6  |   const shadowButton = page.getByRole('button', { name: 'This button is inside a Shadow DOM'});
  7  |  
  8  |   await expect(shadowButton).toBeVisible();
  9  |  });
  10 | 
  11 |  //Locate Shadow DOM Text Content
  12 | test('Verify text inside Shadow DOM', async ({ page }) => {
  13 |   await page.goto('https://practice.expandtesting.com/shadowdom');
  14 | 
  15 |   const shadowText = page.getByText('This paragraph is inside a Shadow DOM');
  16 | 
  17 |   await expect(shadowText).toBeVisible();
  18 | });
  19 | 
  20 | //Locate Shadow DOM Input by Placeholder
  21 | test('Fill input inside Shadow DOM', async ({ page }) => {
  22 |   await page.goto('https://practice.expandtesting.com/shadowdom');
  23 | 
  24 |   const input = page.getByPlaceholder('Enter text');
> 25 |   await input.fill('Playwright Shadow DOM');
     |               ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  26 | 
  27 |   await expect(input).toHaveValue('Playwright Shadow DOM');
  28 | });
  29 | 
  30 | //Locate Shadow DOM Checkbox
  31 | test('Check checkbox inside Shadow DOM', async ({ page }) => {
  32 |   await page.goto('https://practice.expandtesting.com/shadowdom');
  33 | 
  34 |   const checkbox = page.getByRole('checkbox');
  35 |   await checkbox.check();
  36 | 
  37 |   await expect(checkbox).toBeChecked();
  38 | });
  39 | 
  40 | //Shadow Host + Child Element
  41 | test('Locate element through shadow host', async ({ page }) => {
  42 |   await page.goto('https://practice.expandtesting.com/shadowdom');
  43 | 
  44 |   const shadowHost = page.locator('#shadow-host');
  45 |   const button = shadowHost.locator('button');
  46 | 
  47 |   await expect(button).toBeVisible();
  48 | });
  49 | 
```