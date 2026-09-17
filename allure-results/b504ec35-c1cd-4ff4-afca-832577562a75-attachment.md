# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: speciallocators.spec.ts >> Verify second row contains Alden in Web Tables
- Location: tests\speciallocators.spec.ts:73:5

# Error details

```
Test timeout of 3000ms exceeded.
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
    - generic [ref=e125]:
      - heading "Web Tables" [level=1] [ref=e128]
      - generic [ref=e129]:
        - generic [ref=e130]:
          - button "Add" [ref=e132] [cursor=pointer]
          - generic [ref=e134]:
            - textbox "Type to search" [ref=e135]
            - button [ref=e136] [cursor=pointer]
        - table [ref=e139]:
          - rowgroup [ref=e140]:
            - row [ref=e141]:
              - columnheader "First Name" [ref=e142]
              - columnheader "Last Name" [ref=e143]
              - columnheader "Age" [ref=e144]
              - columnheader "Email" [ref=e145]
              - columnheader "Salary" [ref=e146]
              - columnheader "Department" [ref=e147]
              - columnheader "Action" [ref=e148]
          - rowgroup [ref=e149]:
            - row [ref=e150]:
              - cell "Cierra" [ref=e151]
              - cell "Vega" [ref=e152]
              - cell "39" [ref=e153]
              - cell "cierra@example.com" [ref=e154]
              - cell "10000" [ref=e155]
              - cell "Insurance" [ref=e156]
              - cell [ref=e157]:
                - generic [ref=e158]:
                  - generic "Edit" [ref=e159] [cursor=pointer]
                  - generic "Delete" [ref=e162] [cursor=pointer]
            - row [ref=e165]:
              - cell "Alden" [ref=e166]
              - cell "Cantrell" [ref=e167]
              - cell "45" [ref=e168]
              - cell "alden@example.com" [ref=e169]
              - cell "12000" [ref=e170]
              - cell "Compliance" [ref=e171]
              - cell [ref=e172]:
                - generic [ref=e173]:
                  - generic "Edit" [ref=e174] [cursor=pointer]
                  - generic "Delete" [ref=e177] [cursor=pointer]
            - row [ref=e180]:
              - cell "Kierra" [ref=e181]
              - cell "Gentry" [ref=e182]
              - cell "29" [ref=e183]
              - cell "kierra@example.com" [ref=e184]
              - cell "2000" [ref=e185]
              - cell "Legal" [ref=e186]
              - cell [ref=e187]:
                - generic [ref=e188]:
                  - generic "Edit" [ref=e189] [cursor=pointer]
                  - generic "Delete" [ref=e192] [cursor=pointer]
        - generic [ref=e196]:
          - group [ref=e198]:
            - button "First" [disabled]
            - button "Previous" [disabled]
            - button "Next" [disabled]
            - button "Last" [disabled]
          - generic [ref=e199]:
            - text: Page
            - strong [ref=e200]: 1 of 1
          - combobox [ref=e202]:
            - option "Show 10" [selected]
            - option "Show 20"
            - option "Show 30"
            - option "Show 40"
            - option "Show 50"
  - contentinfo [ref=e209]:
    - generic [ref=e210]: © 2013-2026 TOOLSQA.COM | ALL RIGHTS RESERVED.
```