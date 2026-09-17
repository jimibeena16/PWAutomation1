# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shadowdom.spec.ts >> Interact with Expand Testing Shadow DOM using user-facing locators
- Location: tests\shadowdom.spec.ts:3:5

# Error details

```
TimeoutError: page.goto: Timeout 10000ms exceeded.
Call log:
  - navigating to "https://practice.expandtesting.com/shadowdom", waiting until "load"

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - paragraph [ref=e3]:
    - link "PMP Practice" [ref=e4] [cursor=pointer]:
      - /url: https://pmp.expandtesting.com/
    - text: "| Free PMP Certification Mock Exam Test +900 Questions & Quizzes"
    - link "Development Tools" [ref=e5] [cursor=pointer]
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
              - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=9&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
            - generic [ref=f3e10]:
              - generic [ref=f3e13]:
                - link "Presentation ready, set, go" [ref=f3e17] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=0&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
                - link "Move from research to review. Turn your complex data into polished thinking." [ref=f3e21] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=7&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
                  - text: Move from research to review. Turn your complex data into polishedthinking.
              - generic [ref=f3e24]:
                - link:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
                - link "Gemini Notebook" [ref=f3e26] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=1&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
                - link "Learn More" [ref=f3e28] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
                - link [ref=f3e29] [cursor=pointer]:
                  - /url: https://adclick.g.doubleclick.net/aclk?sa=l&ai=C6zmVqNqrasSfGNTAvr0PwNCD8AP77ozMiQGW85LujxaGvYv8gyoQASCVlJmjAWDlyuWDtA6gAceVwb8-yAEJqAMByAPLBKoE8wFP0Cogo7qPD0Bvm4bf6pKVXinGubfRiw6DHQpIOPEeeRTHUavKosCY93zoxap6jixeWH1XT5KCGiuSytafyKqFRfAPfaNGzs7lcguKvzIiyvAiDl9ONng1HNL4UcGj22v6KrmdmHOTP6VMdpIDX422DLLWneS3HwAR5SjIaTi0AZtG1SX1JINlzfaMNT6We2KfryXOx_UN86FrQByZSh7-aZzgWwsSajOh4DNlEkuKvhlqLakWRNZY7hwCL5tBBjPvEqhfaua1R8A7wDLZo5j8k7s_Qw7tElpm9qXuDqUgaHFyEh5PY0k85dtu11u_XbcbsoLABLzPq4rpBYgFseK-w1mgBi6AB8fNkZ8ZqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAe68LECqAeqm7ECqAf-6LECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAef4bECqAem67ECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcA0ggyCIBhEAEYHzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WKvYzsnM9ZYDYAGxCXm51WZOnLf6gAoBmAsByAsBgAwBogxjKg4KDI7fsQKV4rEC8N-xAmIXChVjb20uZ29vZ2xlLk5vdGVib29rTE1qMAouY29tLmdvb2dsZS5hbmRyb2lkLmFwcHMubGFicy5sYW5ndWFnZS50YWlsd2luZHgBiAEBkAEBqg0CSU7IDQHqDRMIh5nQycz1lgMVVKCvAR1A6AA-8A0CiA4JsA7IhLqJGdgTDNAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjQ5NzAyMTIyMjFQBroXAjgBqhgXCQAAAAAICRpBEgo0OTcwMjEyMjIxGAGyGAkSAoVUGC4iAQDQGAHoGAHCGQIIAQ&ae=1&gclid=EAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE&num=1&cid=CAQShwIAQM4h3DVl6aXzlSFNynZp0CozQgWvBhf0ndDMq02ynkVxLtbUOZCotkbX7pcQGCGqJ97-vW3UMAV8sA4CpQpMOqArvmshBGX1kPclghzSFm5sWoBlKAgUbSeCcgbxEodZjsl-DfFdXGExIidOUHhLzbGiWS9MNGd9ELYYYGgmhJsgM0x1AtwIsJMeOFCWVNhuIIeOOLRqiFfmYlEAX7oKBNpfoRjdro9wGlsNIIY2eygNoMXSIYuzXpON96PV5tkSk7_bOIG5tU-1gejKhKrYWRhgmQgN_Ff3Sd4qr6L94gCFb7TnuQ903R6ZecGfKwRUgYMPh44ibSFwXF6ZrKxoKLTD-VE-aRgB&sig=AOD64_3lIRwGSiRGBFl2Fzokp_ueGzQ93Q&client=ca-pub-1056034821646296&rf=1&nb=8&adurl=https://notebook.google/%3Fgad_source%3D5%26gad_campaignid%3D24032293169%26gclid%3DEAIaIQobChMIxJPQycz1lgMVVKCvAR1A6AA-EAEYASAAEgIYbfD_BwE
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
          - link "Web UI examples" [ref=e47] [cursor=pointer]
          - link "Automation testing software" [ref=e52] [cursor=pointer]
          - link "Quality Control & Tracking" [ref=e57] [cursor=pointer]
          - link "REST API documentation" [ref=e62] [cursor=pointer]
          - link "API testing tools" [ref=e67] [cursor=pointer]
          - link "Postman API testing" [ref=e72] [cursor=pointer]
          - link "Selenium automation framework" [ref=e77] [cursor=pointer]
          - link "QA certification prep" [ref=e82] [cursor=pointer]
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
            - link "Web Browsers" [ref=e99] [cursor=pointer]
          - button "Here's a basic button example." [ref=e103] [cursor=pointer]
          - button "This button is inside a Shadow DOM." [ref=e105] [cursor=pointer]
      - insertion [ref=e107]:
        - generic [ref=e110]:
          - heading "These are topics related to the article that might interest you" [level=2] [ref=e112]: Discover more
          - link "Scripting Languages" [ref=e113] [cursor=pointer]
          - link "Programming" [ref=e118] [cursor=pointer]
          - link "Web Browsers" [ref=e123] [cursor=pointer]
          - link "Development Tools" [ref=e128] [cursor=pointer]
          - link "Web Design & Development" [ref=e133] [cursor=pointer]
          - link "Factory Automation" [ref=e138] [cursor=pointer]
          - link "Software" [ref=e143] [cursor=pointer]
          - link "Automation tools guide" [ref=e148] [cursor=pointer]
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
> 4  |   await page.goto('https://practice.expandtesting.com/shadowdom');
     |              ^ TimeoutError: page.goto: Timeout 10000ms exceeded.
  5  |  
  6  |   const shadowButton = page.getByRole('button', { name: 'This button is inside a Shadow DOM'});
  7  |    await expect(shadowButton).toBeVisible();
  8  |  });
  9  | 
  10 | //Shadow Host + Child Element
  11 | test('Locate element through shadow host', async ({ page }) => {
  12 |   await page.goto('https://practice.expandtesting.com/shadowdom');
  13 | 
  14 |   const shadowHost = page.locator('#shadow-host');
  15 |   const button = shadowHost.locator('button');
  16 | 
  17 |   await expect(button).toBeVisible();
  18 | });
  19 | 
```