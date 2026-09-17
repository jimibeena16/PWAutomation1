# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shadowdom.spec.ts >> Check checkbox inside Shadow DOM
- Location: tests\shadowdom.spec.ts:31:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('checkbox')

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
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
            - generic [ref=f3e10]:
              - generic [ref=f3e13]:
                - link "Presentation ready, set, go" [ref=f3e17] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
                - link "Move from research to review. Turn your complex data into polished thinking." [ref=f3e21] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
                  - text: Move from research to review. Turn your complex data into polishedthinking.
              - generic [ref=f3e24]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
                - link "Gemini Notebook" [ref=f3e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
                - link "Learn More" [ref=f3e28] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
                - link [ref=f3e29] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C0mzjIMyrapXDBJCq1d8P8MjoiAn77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0DxRFxld2S_oWaUaNX89lykRBTac7vr5aRO-UixAnMOnxjfR7ui0lx6HbSSiE6VmrECS-TFbf1OHDYkc3GBcn3M_VDd7WocAkuQBdvNpHvaB7rsnY5MonfnoJoyR58W3knN7bczTpq0QDqnIwbajdf5SKFFX41pILeP04NcQLRZX4flEuzWnuKygKBL8ab3ursmE3lQ8BijNeQgI5RyrzCiEVX4ZszJ94kMMTqJrsRUTVlkbS1OTYDneOfZ4AQPvmUhcCmSBLYlLmvU7ndJQWZSfbydzIJmVGdtchV-d0AAUVRCA7CSC-M1bcpobOcFFCz7ABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMruz9u-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwiO2NHbvvWWAxUQVfUFHXAkGpHwDQKIDgmwDsiEuokZ2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAAOUIOUESCjQ5NzAyMTIyMjEYAbIYCRIChVQYLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE&num=1&cid=CAQShwIAQM4h3IDOzj7-EdLZSDqTX1rbT9tlVqVHQ1brNyULmijZmStOthdKRRSQ1-ClzHsg9RjQbS1dSIeBLdyp9vgnlmUMJKiJ9F6e1WLOzEkweGCnx7uAy-4arHeolo2gGaaNkCwgzHS4gdagyynLq5G-hGnTdvqIJbubBtuBMDqDk-Ahotsx8UJAnPVGTzP2ZseWZNzsDZqDXk2IZhgvA51OfN_qBJ7etbe0K03K5o7Bwlgs-t1hyNpY55VTHVCamMYE9WCoTAAZGkIwOAkBzoVDW5dp877gsod_uNGQmeDFFhMaGoJ-w_OsdYPHu1EBDjfiNHX3HJ_geyQh46W0U_bKKr65PKt8YRgB&sig=AOD64_1iKefXaz3wpGeFG8asZzJbK60KRA&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIldPR2771lgMVEFX1BR1wJBqREAEYASAAEgLGEPD_BwE
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
          - link "Download Secure Browsers" [ref=e47] [cursor=pointer]
          - link "Upgrade Industrial Robotics" [ref=e52] [cursor=pointer]
          - link "Explore Scripting Courses" [ref=e57] [cursor=pointer]
          - link "Learn Coding Online" [ref=e62] [cursor=pointer]
          - link "Download Productivity Apps" [ref=e67] [cursor=pointer]
          - link "Compare Developer Tools" [ref=e72] [cursor=pointer]
          - link "Hire Web Developers" [ref=e77] [cursor=pointer]
          - link "Playwright testing examples" [ref=e82] [cursor=pointer]
      - generic [ref=e89]:
        - navigation "breadcrumb mb-2" [ref=e90]:
          - list [ref=e91]:
            - listitem [ref=e92]:
              - link "Home" [ref=e93] [cursor=pointer]:
                - /url: /
            - listitem [ref=e94]: / Shadow DOM
        - heading "Shadow DOM page for Automation Testing Practice" [level=1] [ref=e95]
        - generic [ref=e97]:
          - paragraph [ref=e98]: Shadow DOM is a web standard that allows developers to encapsulate HTML markup, CSS styles, and JavaScript code within a custom HTML element, known as a Shadow DOM element.
          - button "Here's a basic button example." [ref=e99] [cursor=pointer]
          - button "This button is inside a Shadow DOM." [ref=e101] [cursor=pointer]
      - insertion [ref=e103]:
        - generic [ref=e106]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e108]: Discover more
          - link "QA job board" [ref=e109] [cursor=pointer]
          - link "Web UI examples" [ref=e114] [cursor=pointer]
          - link "Software Testing courses" [ref=e119] [cursor=pointer]
          - link "Cypress testing guide" [ref=e124] [cursor=pointer]
          - link "QA certification prep" [ref=e129] [cursor=pointer]
          - link "API testing tools" [ref=e134] [cursor=pointer]
          - link "Selenium automation framework" [ref=e139] [cursor=pointer]
          - link "Automation practice website" [ref=e144] [cursor=pointer]
  - contentinfo [ref=e149]:
    - generic [ref=e154]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e155]
      - paragraph [ref=e156]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e157] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
  - generic [ref=e158] [cursor=pointer]
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
  25 |   await input.fill('Playwright Shadow DOM');
  26 | 
  27 |   await expect(input).toHaveValue('Playwright Shadow DOM');
  28 | });
  29 | 
  30 | //Locate Shadow DOM Checkbox
  31 | test('Check checkbox inside Shadow DOM', async ({ page }) => {
  32 |   await page.goto('https://practice.expandtesting.com/shadowdom');
  33 | 
  34 |   const checkbox = page.getByRole('checkbox');
> 35 |   await checkbox.check();
     |                  ^ Error: locator.check: Test timeout of 30000ms exceeded.
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