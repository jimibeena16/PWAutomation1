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
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
            - generic [ref=f3e10]:
              - generic [ref=f3e13]:
                - link "Mind Map every assignment" [ref=f3e17] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
                - link "See how Mind Maps connect all the facts and figures you upload to Gemini Notebook" [ref=f3e21] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
                  - text: See how Mind Maps connect all the facts and figures you upload to GeminiNotebook
              - generic [ref=f3e24]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
                - link "Gemini Notebook" [ref=f3e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
                - link "Learn More" [ref=f3e28] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
                - link [ref=f3e29] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=CmFKIQcyrapCNJsulkOUPzavW8ArGuc7LiQHxtu23rxbsk4nkiA8QASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE-QFP0G95po5veIsBMtll2L6sSfgP15s3JCjj9HEij31rLY7bVBe9eEFEVhNqJspKjWGbIlGOY1od9q-UnaBMyvUEliT9-HPiYmR27YaFVKmOvcVKYQkpZIWLy9spX4fgxoHRtlhqnVF7xI0sjidh-UNUMM70N5Y7h4fSs6kXOfBKta2a555shiQmLJrm90Gpnz5YyTOylxwzR9oIrx4WlmqyiEbQNoHSPndacOL_Wo16eIM0LYrCSxviCTk6bw-W9TNXnwXnT4-GmuVUtJZjC9VabyxHOqN74xOflLMDHjwDde6uPt5r7XHkmoLo_4tfBwett_FnwqV-hwjABIeE6N3oBYgF6O_OxVmgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WNOazOu-9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxTYhcKFWNvbS5nb29nbGUuTm90ZWJvb2tMTWowCi5jb20uZ29vZ2xlLmFuZHJvaWQuYXBwcy5sYWJzLmxhbmd1YWdlLnRhaWx3aW5keAGIAQGQAQGqDQJJTsgNAeoNEwjgttHrvvWWAxXLEqQGHc2VFa7wDQKIDgmwDtrDq48Z2BMM0BUBmBYByhYCCgD4FgGAFwGyFxAYASoKNDk3MDIxMjIyMVAGuhcCOAGqGBcJAAAAACJuIUESCjQ5NzAyMTIyMjEYAbIYCRICgE8YLiIBANAYAegYAcIZAggB&ae=1&gclid=EAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE&num=1&cid=CAQSiAIAQM4h3HGZcrCudPfRhfDvKakEABEQHga3y9b0omGMhtmtOgERFlz-0G_kGIGFV_Yvf0bQh-EW_l5Ainj4yKRVqgZUZuy2Pqh9316qBGbNu3Zz9X8PVKugbbHqb9d7AoXyRp5fPfHvDp3aFlmbw7AuL1_fAK0WG4LdRaS0qvm-Fw1ck-9t9G47_YZ5IfiT8aEoiQP6khc6Bt6bSXBiOW6H9kzsVnBuw8c5-jpd0-k3CccV5QmCCkXoiO6MTlaWCAkGZIHbvEesklMds7vs5xtTHo76HEqak_UCMU-LMjw-Da9bc7fEOn6dXmsFcVGY5s3VmXeoyRYzoOGI8NOpv3Ckxs3YvygyEyQYAQ&sig=AOD64_1PrvE4BvVIDt4I1CiCclQ6zLdOHw&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24036751336%26gclid%3DEAIaIQobChMI0LHR6771lgMVyxKkBh3NlRWuEAEYASAAEgKm4_D_BwE
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
          - link "Explore Scripting Courses" [ref=e47] [cursor=pointer]
          - link "Upgrade Industrial Robotics" [ref=e52] [cursor=pointer]
          - link "Hire Web Developers" [ref=e57] [cursor=pointer]
          - link "Learn Coding Online" [ref=e62] [cursor=pointer]
          - link "Download Productivity Apps" [ref=e67] [cursor=pointer]
          - link "Compare Developer Tools" [ref=e72] [cursor=pointer]
          - link "Download Secure Browsers" [ref=e77] [cursor=pointer]
          - link "Automation tools guide" [ref=e82] [cursor=pointer]
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
            - link "Download Secure Browsers" [ref=e99] [cursor=pointer]
          - button "Here's a basic button example." [ref=e103] [cursor=pointer]
          - button "This button is inside a Shadow DOM." [ref=e105] [cursor=pointer]
      - insertion [ref=e107]:
        - generic [ref=e110]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e112]: Discover more
          - link "REST API documentation" [ref=e113] [cursor=pointer]
          - link "Web UI examples" [ref=e118] [cursor=pointer]
          - link "Playwright testing examples" [ref=e123] [cursor=pointer]
          - link "Postman API testing" [ref=e128] [cursor=pointer]
          - link "Switch Broadband Providers" [ref=e133] [cursor=pointer]
          - link "QA certification prep" [ref=e138] [cursor=pointer]
          - link "QA job board" [ref=e143] [cursor=pointer]
          - link "Software Testing courses" [ref=e148] [cursor=pointer]
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