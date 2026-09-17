# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: shadowdom.spec.ts >> Locate element through shadow host
- Location: tests\shadowdom.spec.ts:11:5

# Error details

```
Test timeout of 3000ms exceeded.
```

```
Error: page.goto: Test timeout of 3000ms exceeded.
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
  - banner [ref=e6]:
    - navigation "Main navigation" [ref=e7]:
      - link "SUT" [ref=e8] [cursor=pointer]:
        - /url: /
        - 'img "Best Website for Practice Automation Testing: Free UI and REST API Examples and Apps. Using Cypress, Playwright, Selenium, WebdriverIO and Postman." [ref=e9]'
        - text: Practice
      - generic [ref=e10]:
        - list [ref=e11]:
          - listitem [ref=e12]:
            - button "Demos" [ref=e13] [cursor=pointer]
          - listitem [ref=e14]:
            - link "Tools" [ref=e15] [cursor=pointer]:
              - /url: /#tools
          - listitem [ref=e16]:
            - link "Tips" [ref=e17] [cursor=pointer]:
              - /url: /tips
          - listitem [ref=e18]:
            - link "Test Cases" [ref=e19] [cursor=pointer]:
              - /url: /test-cases
          - listitem [ref=e20]:
            - link "API Testing" [ref=e21] [cursor=pointer]:
              - /url: /notes/api/api-docs/
          - listitem [ref=e22]:
            - link "About" [ref=e23] [cursor=pointer]:
              - /url: /about
        - list
        - link "Free ISTQB Mock Exams" [ref=e24] [cursor=pointer]:
          - /url: https://istqb.expandtesting.com/
  - main [ref=e25]:
    - insertion [ref=e29]
    - paragraph [ref=e32]:
      - text: Do you enjoy this platform? ❤️
      - link "Buy us a coffee" [ref=e33] [cursor=pointer]:
        - /url: https://www.buymeacoffee.com/expandtesting
    - generic [ref=e34]:
      - insertion [ref=e36]
      - generic [ref=e40]:
        - navigation "breadcrumb mb-2" [ref=e41]:
          - list [ref=e42]:
            - listitem [ref=e43]:
              - link "Home" [ref=e44] [cursor=pointer]:
                - /url: /
            - listitem [ref=e45]: / Shadow DOM
        - heading "Shadow DOM page for Automation Testing Practice" [level=1] [ref=e46]
        - generic [ref=e48]:
          - paragraph [ref=e49]: Shadow DOM is a web standard that allows developers to encapsulate HTML markup, CSS styles, and JavaScript code within a custom HTML element, known as a Shadow DOM element.
          - button "Here's a basic button example." [ref=e50] [cursor=pointer]
          - button "This button is inside a Shadow DOM." [ref=e52] [cursor=pointer]
      - insertion [ref=e54]
  - contentinfo [ref=e56]:
    - generic [ref=e61]:
      - heading "Practice Test Automation WebSite for Web UI and Rest API" [level=4] [ref=e62]
      - paragraph [ref=e63]:
        - text: "Version: e64cd80e | Copyright"
        - link "Expand Testing" [ref=e64] [cursor=pointer]:
          - /url: https://expandtesting.com/
        - text: "2026"
```

# Test source

```ts
  1  | import {test, expect} from '@playwright/test'
  2  | 
  3  | test('Interact with Expand Testing Shadow DOM using user-facing locators', async ({ page }) => {
  4  |   await page.goto('https://practice.expandtesting.com/shadowdom');
  5  |  
  6  |   const shadowButton = page.getByRole('button', { name: 'This button is inside a Shadow DOM'});
  7  |    await expect(shadowButton).toBeVisible();
  8  |  });
  9  | 
  10 | //Shadow Host + Child Element
  11 | test('Locate element through shadow host', async ({ page }) => {
> 12 |   await page.goto('https://practice.expandtesting.com/shadowdom');
     |              ^ Error: page.goto: Test timeout of 3000ms exceeded.
  13 | 
  14 |   const shadowHost = page.locator('#shadow-host');
  15 |   const button = shadowHost.locator('button');
  16 | 
  17 |   await expect(button).toBeVisible();
  18 | });
  19 | 
```